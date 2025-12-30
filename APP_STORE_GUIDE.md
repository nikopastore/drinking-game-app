# SipWiki App Store Submission Guide

This guide covers everything needed to submit SipWiki to the Apple App Store and Google Play Store.

## Pre-Submission Checklist

### Completed by Claude ✅

| Task | File/Location | Description |
|------|---------------|-------------|
| Age Gate Component | `src/components/AgeGate.tsx` | Full-screen verification on first launch asking if user is of legal drinking age. Stores in localStorage. |
| Age Gate Integration | `src/components/Providers.tsx` | Age gate wraps entire app - blocks all content until verified |
| Terms of Service | `src/app/terms/page.tsx` | Comprehensive TOS covering age requirements, responsible drinking, liability disclaimer, user content, prohibited activities, AI features, etc. |
| Privacy Policy | `src/app/privacy/page.tsx` | Already existed |
| Alcohol Disclaimer | `src/components/AlcoholDisclaimer.tsx` | Reusable component with 3 variants: `full`, `compact`, `footer`. Includes SAMHSA helpline. |
| iOS Native Project | `/ios` folder | Generated via `npx cap add ios` with Capacitor 8 |
| Android Native Project | `/android` folder | Generated via `npx cap add android` with Capacitor 8 |
| Static Export Config | `next.config.ts` | Configured for static export when `NEXT_PUBLIC_STATIC_EXPORT=true` |
| Auth Callback (Mobile) | `src/app/auth/callback/page.tsx` | Client-side auth callback for mobile (replaced server route) |
| Sitemap Static Export | `src/app/sitemap.ts` | Added `force-static` for mobile builds |
| MCP API Static Export | `src/app/api/mcp/route.ts` | Added `force-static` for mobile builds |

### You Need To Do

- [ ] Apple Developer Account ($99/year) - https://developer.apple.com
- [ ] Google Play Developer Account ($25 one-time) - https://play.google.com/console
- [ ] Create app icons (1024x1024 master, use https://appicon.co/ to generate all sizes)
- [ ] Take screenshots for all device sizes
- [ ] Create feature graphic for Google Play (1024x500)
- [ ] Ensure https://sipwiki.app/privacy is publicly accessible
- [ ] Ensure https://sipwiki.app/terms is publicly accessible

---

## How the Age Gate Works

The age gate (`src/components/AgeGate.tsx`) works as follows:

1. On first app launch, a full-screen modal appears
2. User sees SipWiki branding and age verification prompt
3. Two buttons: "I am of legal drinking age" / "I am not of legal drinking age"
4. If verified, stores `sipwiki-age-verified=true` in localStorage
5. If declined, shows "Access Denied" screen with option to go back
6. On subsequent visits, localStorage is checked and gate is skipped if verified

The component is integrated in `src/components/Providers.tsx` and wraps the entire app.

---

## How to Build for Mobile

```bash
# 1. Build the static export
npm run build:mobile

# 2. Sync web assets to native projects
npx cap sync

# 3. Open in IDE
npx cap open ios      # Opens Xcode
npx cap open android  # Opens Android Studio
```

---

## iOS App Store Submission

### 1. Prerequisites
- Mac computer with Xcode installed
- Apple Developer Program membership ($99/year)
- Valid Apple ID

### 2. App Configuration

Open `ios/App/App.xcworkspace` in Xcode.

#### Bundle ID
The bundle ID is already set to `com.sipwiki.app` in `capacitor.config.ts`.

#### App Version
In Xcode, set:
- Version: `1.0.0`
- Build: `1`

#### App Icons
Create app icons in these sizes and add to `ios/App/App/Assets.xcassets/AppIcon.appiconset/`:

| Size | Filename | Use |
|------|----------|-----|
| 20x20 | icon-20.png | iPad Notifications |
| 29x29 | icon-29.png | Settings |
| 40x40 | icon-40.png | Spotlight |
| 60x60 | icon-60.png | iPhone App |
| 76x76 | icon-76.png | iPad App |
| 83.5x83.5 | icon-83.5.png | iPad Pro App |
| 1024x1024 | icon-1024.png | App Store |

**Tip:** Use https://appicon.co/ to generate all sizes from a single 1024x1024 image.

### 3. App Store Connect Setup

1. Log in to https://appstoreconnect.apple.com
2. Go to "My Apps" > "+" > "New App"
3. Fill in:
   - Platform: iOS
   - Name: SipWiki
   - Primary Language: English (U.S.)
   - Bundle ID: com.sipwiki.app
   - SKU: sipwiki-ios-1

### 4. App Information

#### App Description (4000 chars max)
```
SipWiki is your ultimate drinking game companion! Browse 100+ party games from classics like Beer Pong and Kings Cup to unique games you've never played before.

FEATURES:
- 100+ Drinking Games - Complete rules for every game
- Smart Filters - Find games by player count, materials needed, and intensity
- Live Mode - Built-in timer and AI referee for rule questions
- Spin the Wheel - Let fate decide your next game
- Cocktail Recipes - 50+ drink recipes from classics to party punches
- Favorites - Save your go-to games for quick access
- No Account Required - Browse freely, sign in only for comments

GAME CATEGORIES:
- Card Games (Kings Cup, Ride the Bus, Irish Poker)
- Cup Games (Beer Pong, Flip Cup, Rage Cage)
- Dice Games (Three Man, 7-11-Doubles)
- No Props Needed (Never Have I Ever, Most Likely To)
- Two-Player Games
- Large Group Games (6+ players)

RESPONSIBLE DRINKING:
SipWiki promotes responsible alcohol consumption. You must be of legal drinking age in your jurisdiction to use this app. Know your limits, never drink and drive, and look out for your friends.

Perfect for:
- House parties
- Tailgates
- Pregames
- Bachelor/Bachelorette parties
- College gatherings
- Game nights

Download now and make your next party legendary!
```

#### Keywords (100 chars max)
```
drinking games,party games,beer pong,kings cup,flip cup,college,party,drinking,game rules,pregame
```

#### Support URL
```
https://sipwiki.app/support
```

#### Privacy Policy URL
```
https://sipwiki.app/privacy
```

### 5. Age Rating
- Select **17+** (Due to alcohol content)
- Answer "Yes" to:
  - Alcohol, Tobacco, or Drug Use or References: Frequent/Intense
  - Mature/Suggestive Themes: Infrequent/Mild

### 6. Screenshots

Required sizes (portrait):
| Device | Size (pixels) |
|--------|---------------|
| iPhone 6.9" | 1320 x 2868 |
| iPhone 6.7" | 1290 x 2796 |
| iPhone 6.5" | 1284 x 2778 |
| iPhone 5.5" | 1242 x 2208 |
| iPad Pro 12.9" | 2048 x 2732 |

**Suggested screenshots:**
1. Age Gate screen (shows responsible drinking commitment)
2. Home page with game categories
3. Game detail page with rules
4. Live Mode with timer
5. Spin the Wheel
6. Cocktail recipes

### 7. Build & Submit

```bash
# Build the web app
npm run build:mobile

# Sync to iOS
npx cap sync ios

# Open in Xcode
npx cap open ios
```

In Xcode:
1. Select your team in Signing & Capabilities
2. Product > Archive
3. Distribute App > App Store Connect
4. Upload

### 8. Review Notes for Apple

Include this in the review notes:
```
AGE VERIFICATION:
This app requires users to confirm they are of legal drinking age before accessing any content. An age verification gate appears on first launch and blocks all app content until the user confirms their age. This verification is stored locally and only asked once.

RESPONSIBLE DRINKING:
The app provides information about drinking games for entertainment purposes only. It promotes responsible drinking throughout, including:
- Responsible drinking tips on the age gate screen
- SAMHSA helpline information (1-800-662-4357)
- Terms of Service with full liability disclaimer
- Alcohol disclaimer components throughout the app

FUNCTIONALITY:
No account is required for basic functionality. Users can browse all games, cocktail recipes, and use Live Mode without signing in. Sign-in is only required for leaving comments.

TERMS & PRIVACY:
- Terms of Service: https://sipwiki.app/terms
- Privacy Policy: https://sipwiki.app/privacy
```

---

## Google Play Store Submission

### 1. Prerequisites
- Google Play Developer Account ($25 one-time)
- Java JDK 17+ installed
- Android Studio installed

### 2. App Configuration

Open `android/` folder in Android Studio.

#### Package Name
Already set to `com.sipwiki.app` in `capacitor.config.ts`.

#### Version
In `android/app/build.gradle`:
```gradle
versionCode 1
versionName "1.0.0"
```

#### App Icons
Add icons to `android/app/src/main/res/`:

| Folder | Size |
|--------|------|
| mipmap-mdpi | 48x48 |
| mipmap-hdpi | 72x72 |
| mipmap-xhdpi | 96x96 |
| mipmap-xxhdpi | 144x144 |
| mipmap-xxxhdpi | 192x192 |

Also add a 512x512 `ic_launcher.png` for the Play Store listing.

### 3. Generate Signed APK/AAB

1. In Android Studio: Build > Generate Signed Bundle/APK
2. Create a new keystore or use existing
3. Save keystore securely - you'll need it for all future updates!
4. Generate Android App Bundle (.aab)

**Important:** Keep your keystore file safe! If you lose it, you cannot update your app.

### 4. Google Play Console Setup

1. Go to https://play.google.com/console
2. Create app > Enter app details
3. Fill in:
   - App name: SipWiki
   - Default language: English (US)
   - App or game: App
   - Free or paid: Free

### 5. Store Listing

#### Short Description (80 chars)
```
100+ drinking games with rules, timer & AI referee. Your party starts here!
```

#### Full Description (4000 chars)
Use the same description as iOS (see above).

#### Screenshots
Required sizes:
- Phone: 1080 x 1920 (minimum 2, maximum 8)
- Tablet 7": 1200 x 1920
- Tablet 10": 1600 x 2560

#### Feature Graphic
1024 x 500 pixels (required for Play Store)

### 6. Content Rating

Complete the content rating questionnaire:
- Answer "Yes" to references to alcohol
- This will likely result in **PEGI 16** or equivalent

### 7. App Content

#### Privacy Policy
Add your hosted privacy policy URL: `https://sipwiki.app/privacy`

#### Ads
Declare: No ads (currently no ads in SipWiki)

#### Target Audience
Select: **18 and over only**

This is critical for alcohol-related apps!

### 8. Build & Submit

```bash
# Build the web app
npm run build:mobile

# Sync to Android
npx cap sync android

# Open in Android Studio
npx cap open android
```

In Android Studio:
1. Build > Generate Signed Bundle/APK
2. Select Android App Bundle
3. Sign with your keystore
4. Upload to Play Console

---

## Files Created/Modified Summary

### New Files Created
| File | Purpose |
|------|---------|
| `src/components/AgeGate.tsx` | Age verification gate component |
| `src/components/AlcoholDisclaimer.tsx` | Reusable alcohol disclaimer (3 variants) |
| `src/app/terms/page.tsx` | Terms of Service page |
| `src/app/auth/callback/page.tsx` | Client-side auth callback for mobile |
| `/ios/` | Complete iOS native project |
| `/android/` | Complete Android native project |

### Files Modified
| File | Change |
|------|--------|
| `src/components/Providers.tsx` | Added AgeGate wrapper around app |
| `src/app/sitemap.ts` | Added `export const dynamic = "force-static"` |
| `src/app/api/mcp/route.ts` | Added `export const dynamic = "force-static"` |
| `next.config.ts` | Static export configuration already existed |

### Deleted Files
| File | Reason |
|------|--------|
| `src/app/auth/callback/route.ts` | Replaced with page.tsx for mobile compatibility |

---

## Capacitor Configuration

The `capacitor.config.ts` is already configured:

```typescript
const config: CapacitorConfig = {
  appId: 'com.sipwiki.app',
  appName: 'SipWiki',
  webDir: 'out',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0a0a0f',
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0a0a0f',
    },
  },
};
```

---

## Post-Submission

### Apple Review Time
- Typically 24-48 hours
- May take longer for first submission or if issues are found

### Google Review Time
- Typically 3-7 days for new apps
- Updates usually reviewed within 1-3 days

### Common Rejection Reasons

#### Apple
1. **Age Gate Issues** - The age gate is implemented and prominent
2. **Missing metadata** - Ensure all required fields are filled
3. **Privacy Policy** - Must be accessible at https://sipwiki.app/privacy
4. **Alcohol Content** - Must be rated 17+

#### Google
1. **Target Audience** - Must be set to 18+
2. **Content Rating** - Must accurately reflect alcohol content
3. **Privacy Policy** - Must be valid URL, not 404

---

## Updating the App

When releasing updates:

```bash
# 1. Build web assets
npm run build:mobile

# 2. Sync to native projects
npx cap sync

# 3. Update version numbers
#    - iOS: In Xcode project settings (Version and Build)
#    - Android: In android/app/build.gradle (versionCode and versionName)

# 4. Build and upload
#    - iOS: Archive in Xcode, upload to App Store Connect
#    - Android: Generate signed AAB, upload to Play Console
```

---

## App Store Assets Summary

| Asset | iOS | Android |
|-------|-----|---------|
| App Icon | 1024x1024 | 512x512 |
| Screenshots (Phone) | 6.9"/6.7"/6.5"/5.5" | 1080x1920 |
| Screenshots (Tablet) | iPad Pro 12.9" | 7" and 10" |
| Feature Graphic | N/A | 1024x500 |
| Short Description | N/A | 80 chars |
| Full Description | 4000 chars | 4000 chars |
| Keywords | 100 chars | N/A (use in description) |

---

## Testing the Age Gate

To test the age gate after it's been verified:

```javascript
// In browser console or React component:
localStorage.removeItem('sipwiki-age-verified');
location.reload();
```

Or use the exported hook in your code:
```typescript
import { useAgeGate } from '@/components/AgeGate';

const { resetVerification } = useAgeGate();
resetVerification(); // Clears verification and reloads
```

---

## Questions?

If you encounter issues during submission:
- Apple: https://developer.apple.com/support/
- Google: https://support.google.com/googleplay/android-developer/

Good luck with your submission!
