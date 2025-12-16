# Auth & Social Signup System - Design Document

**Date:** 2025-12-16
**Status:** Approved

## Overview

Implement a "gated play" authentication system with social proof via contact matching. Users can browse freely but must sign up when they tap a game. After signup, we prompt for contact sync to show friends already on the app (LinkedIn-style trust building).

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Signup trigger | First game tap | Maximum data capture, high-intent moment |
| Auth methods | Google + Apple OAuth | Required for iOS App Store, covers 95%+ users |
| Contact discovery | Contact sync (hashed) | Privacy-safe, works across OAuth providers |
| Friends display | Immediate celebration | Trust moment right after signup |
| Contact sync | Optional with strong nudge | App store friendly, ~70-80% opt-in rate |

---

## User Flow

```
User opens app
    ↓
Browse games freely (home page, game details, filters)
    ↓
Taps any game card
    ↓
Auth Modal appears: "Sign up to play"
    ├── Continue with Google
    └── Continue with Apple
    ↓
OAuth completes → user created in Supabase
    ↓
Contact Sync Prompt: "Find friends on SipWiki?"
    ├── "Yes, find my friends" → native contact picker
    └── "Maybe later" → skip
    ↓
If contacts synced: match against existing users
    ↓
Friends Found Modal: "🎉 3 friends are already here!"
    - Shows profile photos + names (from their user_profiles)
    - "Let's party!" button
    ↓
Redirect to the game they originally tapped
```

---

## Database Schema

### New Tables

```sql
-- User profiles (extends Supabase auth.users)
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  phone_number TEXT,
  phone_verified BOOLEAN DEFAULT FALSE,
  contacts_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hashed contacts for privacy-safe matching
CREATE TABLE user_contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  contact_hash TEXT NOT NULL,  -- SHA256 of normalized phone/email
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, contact_hash)
);

-- Index for fast friend lookups
CREATE INDEX idx_user_contacts_hash ON user_contacts(contact_hash);

-- Friendships (derived from contact matching)
CREATE TABLE friendships (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  friend_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  discovered_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, friend_id)
);

-- RLS Policies
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read any profile" ON user_profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

ALTER TABLE user_contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own contacts" ON user_contacts FOR ALL USING (auth.uid() = user_id);

ALTER TABLE friendships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own friendships" ON friendships FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own friendships" ON friendships FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### Friend Matching Function

```sql
CREATE OR REPLACE FUNCTION find_friends(p_user_id UUID)
RETURNS TABLE (
  friend_id UUID,
  display_name TEXT,
  avatar_url TEXT
) AS $$
  SELECT DISTINCT
    up.id,
    up.display_name,
    up.avatar_url
  FROM user_contacts uc
  JOIN user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN user_profiles up ON friend_uc.user_id = up.id
  WHERE uc.user_id = p_user_id
    AND friend_uc.user_id != p_user_id
$$ LANGUAGE sql;
```

---

## Component Architecture

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthModal.tsx          # Main signup modal (Google + Apple buttons)
│   │   ├── AuthGuard.tsx          # Wrapper that triggers auth on game tap
│   │   └── ContactSyncPrompt.tsx  # "Find friends" permission request
│   ├── social/
│   │   ├── FriendsFoundModal.tsx  # "3 friends are here!" celebration
│   │   └── FriendAvatar.tsx       # Profile photo + name display
│   └── ...existing
├── lib/
│   ├── auth/
│   │   ├── useAuth.ts             # Auth state hook (user, loading, signIn, signOut)
│   │   └── authHelpers.ts         # OAuth config, redirect handling
│   ├── contacts/
│   │   ├── useContacts.ts         # Capacitor contact sync hook
│   │   ├── contactHelpers.ts      # Hash contacts, normalize phone numbers
│   │   └── friendMatcher.ts       # Query Supabase for matches
│   └── ...existing
├── app/
│   ├── auth/
│   │   └── callback/route.ts      # OAuth callback handler
│   └── ...existing
```

---

## Contact Sync Implementation

### Capacitor Plugin

```bash
npm install @capacitor-community/contacts
```

### Contact Sync Hook

```typescript
// src/lib/contacts/useContacts.ts
import { Contacts } from '@capacitor-community/contacts';
import { createClient } from '@/lib/supabase/client';
import { sha256 } from './contactHelpers';

export async function syncContacts(userId: string) {
  const supabase = createClient();

  // 1. Request permission
  const permission = await Contacts.requestPermissions();
  if (permission.contacts !== 'granted') {
    return { skipped: true, friends: [] };
  }

  // 2. Get contacts
  const result = await Contacts.getContacts({
    projection: {
      emails: true,
      phones: true,
    },
  });

  // 3. Normalize & hash
  const hashes = result.contacts.flatMap(contact => {
    const items: string[] = [];
    contact.emails?.forEach(e => {
      if (e.address) items.push(normalizeEmail(e.address));
    });
    contact.phones?.forEach(p => {
      if (p.number) items.push(normalizePhone(p.number));
    });
    return items.map(item => sha256(item));
  });

  // 4. Send to Supabase (batch upsert)
  if (hashes.length > 0) {
    await supabase.from('user_contacts').upsert(
      hashes.map(hash => ({ user_id: userId, contact_hash: hash })),
      { onConflict: 'user_id,contact_hash' }
    );

    // Update sync timestamp
    await supabase.from('user_profiles').update({
      contacts_synced_at: new Date().toISOString()
    }).eq('id', userId);
  }

  // 5. Find matches
  const { data: friends } = await supabase.rpc('find_friends', {
    p_user_id: userId
  });

  // 6. Create friendship records
  if (friends && friends.length > 0) {
    await supabase.from('friendships').upsert(
      friends.map((f: any) => ({ user_id: userId, friend_id: f.friend_id })),
      { onConflict: 'user_id,friend_id' }
    );
  }

  return { skipped: false, friends: friends || [] };
}

function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

function normalizePhone(phone: string): string {
  // Remove all non-digits, keep last 10 digits (US format)
  const digits = phone.replace(/\D/g, '');
  return digits.slice(-10);
}
```

### Contact Helpers

```typescript
// src/lib/contacts/contactHelpers.ts
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
```

---

## Platform Configuration

### iOS (ios/App/App/Info.plist)

```xml
<key>NSContactsUsageDescription</key>
<string>SipWiki uses your contacts to find friends who are already using the app.</string>
```

### Android (android/app/src/main/AndroidManifest.xml)

```xml
<uses-permission android:name="android.permission.READ_CONTACTS" />
```

---

## UI Components

### AuthModal

- Dark modal with neon accent
- Two buttons: "Continue with Google" + "Continue with Apple"
- Apple button uses black/white per Apple HIG
- Shows game name: "Sign up to play [Game Name]"
- Close button (X) in corner

### ContactSyncPrompt

- Friendly illustration (people/friends icon)
- Headline: "Find your friends on SipWiki"
- Subtext: "See which of your contacts are already partying here"
- Primary CTA: "Find Friends"
- Secondary: "Maybe Later"

### FriendsFoundModal

- Celebration animation (confetti or glow)
- Headline: "🎉 [N] friends are already here!"
- Grid/row of friend avatars with names
- If no friends: "Be the first! Invite your friends"
- CTA: "Let's Party!" → proceeds to game

---

## Auth State Management

### Zustand Store Extension

```typescript
// Add to src/lib/store.ts
interface AuthState {
  user: User | null;
  loading: boolean;
  pendingGameSlug: string | null;  // Game user tried to access before auth
  setPendingGameSlug: (slug: string | null) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}
```

### useAuth Hook

```typescript
// src/lib/auth/useAuth.ts
export function useAuth() {
  const supabase = createClient();
  const { user, setUser, loading, setLoading } = useAppStore();

  useEffect(() => {
    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
  };

  const signInWithApple = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, loading, signInWithGoogle, signInWithApple, signOut };
}
```

---

## OAuth Callback Handler

```typescript
// src/app/auth/callback/route.ts
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Create/update user profile
      await supabase.from('user_profiles').upsert({
        id: data.user.id,
        display_name: data.user.user_metadata.full_name || data.user.email?.split('@')[0],
        avatar_url: data.user.user_metadata.avatar_url,
      }, { onConflict: 'id' });
    }
  }

  // Redirect to home (app will handle showing contact sync prompt)
  return NextResponse.redirect(`${origin}/?auth=success`);
}
```

---

## Implementation Order

1. **Database**: Run schema migrations in Supabase
2. **Auth hooks**: `useAuth.ts`, `authHelpers.ts`
3. **OAuth callback**: `/auth/callback/route.ts`
4. **AuthModal**: UI component with Google + Apple buttons
5. **AuthGuard**: Wrapper for GameCard click handling
6. **Contact sync**: Install Capacitor plugin, implement `useContacts.ts`
7. **ContactSyncPrompt**: UI component
8. **Friend matching**: `friendMatcher.ts` + Supabase RPC
9. **FriendsFoundModal**: UI component
10. **Platform config**: iOS Info.plist + Android manifest
11. **Integration**: Wire up complete flow

---

## Environment Variables

```env
# Add to .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Configure in Supabase Dashboard:
# - Google OAuth: Client ID + Secret
# - Apple OAuth: Service ID + Key
```

---

## Testing Checklist

- [ ] User can browse games without auth
- [ ] Tapping game shows auth modal
- [ ] Google OAuth completes successfully
- [ ] Apple OAuth completes successfully
- [ ] User profile created after first login
- [ ] Contact sync prompt appears after auth
- [ ] "Maybe later" skips to game
- [ ] Contact permission granted on iOS
- [ ] Contact permission granted on Android
- [ ] Contacts hashed and stored
- [ ] Friends matched correctly
- [ ] Friends modal shows matched users with names
- [ ] No friends → shows invite prompt
- [ ] User redirected to original game after flow

---

## Implementation Status

### Completed Files

- `supabase/schema.sql` - Database schema with all tables and RPC functions
- `src/lib/auth/useAuth.ts` - Auth state hook with Google/Apple sign-in
- `src/lib/auth/authHelpers.ts` - Profile management helpers
- `src/lib/auth/index.ts` - Auth exports
- `src/app/auth/callback/route.ts` - OAuth callback handler
- `src/components/auth/AuthModal.tsx` - Sign-in modal with Google + Apple buttons
- `src/components/auth/AuthGuard.tsx` - Hook for gating actions behind auth
- `src/components/auth/AuthProvider.tsx` - Global auth context provider
- `src/components/auth/index.ts` - Auth component exports
- `src/lib/contacts/contactHelpers.ts` - Hash, normalize functions
- `src/lib/contacts/useContacts.ts` - Contact sync hook
- `src/lib/contacts/index.ts` - Contact exports
- `src/components/contacts/ContactSyncPrompt.tsx` - "Find friends" modal
- `src/components/contacts/FriendsFoundModal.tsx` - "Friends found" celebration modal
- `src/components/contacts/index.ts` - Contact component exports
- `src/components/Providers.tsx` - Updated to include AuthProvider
- `src/components/GameCard.tsx` - Updated to require auth on click
- `android/app/src/main/AndroidManifest.xml` - Added READ_CONTACTS permission

### iOS Setup Required

The iOS folder doesn't exist yet. After running `npx cap add ios`, add this to `ios/App/App/Info.plist`:

```xml
<key>NSContactsUsageDescription</key>
<string>SipWiki uses your contacts to find friends who are already using the app.</string>
```

### Supabase Configuration Required

1. Enable Google OAuth in Supabase Dashboard → Authentication → Providers
2. Enable Apple OAuth in Supabase Dashboard → Authentication → Providers
3. Run the migrations in `supabase/schema.sql` against your Supabase database

---

*Document created: December 2025*
*Implementation completed: December 2025*
