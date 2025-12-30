# Liquor Cabinet Feature Design

## Overview

Add a "Liquor Cabinet" feature that allows users to track what spirits and mixers they have at home, then see which cocktails they can make with their inventory.

## Navigation Changes

When in **Cocktails mode**, navigation updates:

### Sidebar
- Favourites → stays (shows cocktail favorites)
- Recent → stays (shows recent cocktails)
- **Spin → "Liquor Cabinet"** with cabinet icon
- Shop → stays

### Mobile Nav
- Cocktails | Search | **Cabinet** | Shop

### Routes
- `/liquor-cabinet` - New Liquor Cabinet page
- `/favorites` - Shows cocktails when in cocktail mode
- `/recent` - Shows cocktails when in cocktail mode

## Data Model

### Ingredient Categories

**SPIRITS:**
- Vodka
- Gin (London Dry)
- Gin (Other)
- White Rum
- Dark Rum
- Spiced Rum
- Tequila (Blanco)
- Tequila (Reposado)
- Bourbon
- Rye Whiskey
- Scotch
- Irish Whiskey
- Brandy/Cognac

**LIQUEURS:**
- Triple Sec/Cointreau
- Amaretto
- Kahlúa/Coffee Liqueur
- Baileys/Irish Cream
- Campari
- Aperol
- Chambord
- Blue Curaçao
- Peach Schnapps
- Midori

**MIXERS:**
- Ginger Beer
- Tonic Water
- Soda Water
- Cola
- Cranberry Juice
- Orange Juice
- Pineapple Juice
- Tomato Juice
- Lime Juice (Fresh)
- Lemon Juice (Fresh)
- Simple Syrup
- Grenadine

**BEER & WINE:**
- Lager Beer
- Stout
- Champagne/Prosecco
- Red Wine
- White Wine

**EXTRAS:**
- Bitters (Angostura)
- Vermouth (Dry)
- Vermouth (Sweet)
- Eggs
- Cream

### Storage Shape

```typescript
interface LiquorCabinet {
  items: string[];        // Selected from checklist
  customItems: string[];  // User-added items
  updatedAt: string;
}
```

## Page Layout

```
┌─────────────────────────────────────────┐
│  🍸 Your Liquor Cabinet                 │
│  [Sign in to save your cabinet]         │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │     VISUAL CABINET GRAPHIC      │    │
│  │  ┌─────┬─────┬─────┬─────┐     │    │
│  │  │ 🍾  │ 🥃  │ 🍸  │     │     │    │
│  │  ├─────┼─────┼─────┼─────┤     │    │
│  │  │ 🧴  │ 🍷  │     │     │     │    │
│  │  ├─────┼─────┼─────┼─────┤     │    │
│  │  │ 🧃  │ 🍋  │ 🧊  │     │     │    │
│  │  └─────┴─────┴─────┴─────┘     │    │
│  └─────────────────────────────────┘    │
│  [+ Add Items]                          │
├─────────────────────────────────────────┤
│  🍹 You Can Make (12)                   │
│  [Filter by spirit: All ▾]              │
│  ┌────────┐ ┌────────┐ ┌────────┐      │
│  │Martini │ │Moscow  │ │G&T     │      │
│  └────────┘ └────────┘ └────────┘      │
├─────────────────────────────────────────┤
│  🛒 Almost There (8)                    │
│  ┌────────────────────────────────┐    │
│  │ Negroni - missing: Campari     │    │
│  │ Margarita - missing: Triple Sec│    │
│  └────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### Visual Cabinet
- Dark wooden cabinet SVG with 3-4 shelves
- Bottles render dynamically based on user's items
- Each bottle is a stylized icon (color-coded by type)
- Empty slots show subtle outlines
- Clicking cabinet opens "Add Items" modal

## Recipe Matching Logic

### Ingredient Normalization

Map recipe ingredients to cabinet categories:

```typescript
const ingredientToCabinet: Record<string, string> = {
  "Vodka": "Vodka",
  "Gin": "Gin (London Dry)",
  "White Rum": "White Rum",
  "Dark Rum": "Dark Rum",
  "Rum": "White Rum",
  "Tequila": "Tequila (Blanco)",
  "Cointreau": "Triple Sec/Cointreau",
  "Triple Sec": "Triple Sec/Cointreau",
  "Ginger Beer": "Ginger Beer",
  "Lime Juice": "Lime Juice (Fresh)",
  // ... etc
};
```

### Matching Algorithm

```typescript
function matchCocktails(cabinet: string[]) {
  return cocktails.map(cocktail => {
    const required = cocktail.ingredients.map(i =>
      ingredientToCabinet[i.name] || i.name
    );
    const have = required.filter(r => cabinet.includes(r));
    const missing = required.filter(r => !cabinet.includes(r));

    return { cocktail, have, missing, canMake: missing.length === 0 };
  });
}
```

### Results Grouping
- **"You Can Make"** → `missing.length === 0`
- **"Almost There"** → `missing.length === 1`

## Storage Strategy

### Local Storage (always)
```typescript
localStorage.setItem('sipwiki-cabinet', JSON.stringify(cabinet));
```

### Supabase Sync (if authenticated)

New table: `user_cabinets`
- `user_id` (FK to auth.users)
- `items` (jsonb array)
- `custom_items` (jsonb array)
- `updated_at` (timestamp)

### Sync Logic

**On page load:**
1. Check localStorage for existing cabinet
2. If signed in, fetch from Supabase (Supabase wins on conflict)
3. Display cabinet

**On save:**
1. Always save to localStorage
2. If signed in → sync to Supabase
3. If not signed in → show toast: "Sign in to save your cabinet across devices"

## Add Items Modal

```
┌────────────────────────────────────────┐
│  Add to Your Cabinet            [X]   │
├────────────────────────────────────────┤
│  [Search ingredients...]               │
├────────────────────────────────────────┤
│  SPIRITS                        [−]   │
│  ☑ Vodka                              │
│  ☐ Gin (London Dry)                   │
│  ☑ White Rum                          │
│  ...                                   │
├────────────────────────────────────────┤
│  LIQUEURS                       [−]   │
│  ☐ Triple Sec/Cointreau               │
│  ☑ Kahlúa                             │
│  ...                                   │
├────────────────────────────────────────┤
│  + Add custom item                     │
│  [________________] [Add]              │
├────────────────────────────────────────┤
│           [Save Cabinet]               │
└────────────────────────────────────────┘
```

- Collapsible sections by category
- Search filters the list
- Checkboxes toggle items
- Custom items appear in "Your Items" section

## Implementation Files

### New Files
- `src/app/liquor-cabinet/page.tsx` - Main page
- `src/app/liquor-cabinet/LiquorCabinetClient.tsx` - Client component
- `src/components/liquor-cabinet/CabinetVisual.tsx` - SVG cabinet graphic
- `src/components/liquor-cabinet/AddItemsModal.tsx` - Modal component
- `src/components/liquor-cabinet/RecipeMatches.tsx` - Matched cocktails display
- `src/lib/liquorCabinet.ts` - Storage and matching logic
- `src/config/cabinetIngredients.ts` - Ingredient categories and mappings

### Modified Files
- `src/components/Sidebar/Sidebar.tsx` - Dynamic nav items
- `src/components/MobileNav.tsx` - Dynamic nav items
- `src/app/favorites/FavoritesClient.tsx` - Mode-aware display
- Database: Add `user_cabinets` table migration

## Design Decisions

1. **Hybrid storage** - Local for preview, Supabase for persistence with clear sign-in prompt
2. **Hybrid ingredient entry** - Checklist for common items + custom additions
3. **Visual cabinet** - Playful bottle-on-shelf display
4. **"Almost there" matching** - Show exact matches + missing-1 for discovery
5. **Sub-categories** - Balance between simplicity and accurate matching
