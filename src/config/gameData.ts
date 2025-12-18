import { Game } from "@/types";

export const initialGames: Omit<Game, "created_at" | "is_user_submitted">[] = [
  {
    id: "seed-1",
    slug: "kings-cup",
    name: "King's Cup",
    image: "/games/kings-cup-1.png",
    description:
      "King's Cup (a.k.a. Kings or Ring of Fire) is a classic card-based drinking game where players take turns drawing cards from a ring and perform actions dictated by the card drawn. Each card value has a specific rule, and the King's Cup in the center receives drink contributions until the final King is drawn.",
    rules_text:
      "**Setup:** Place an empty cup (the King's Cup) in the middle of the table and fan a deck of cards face-down in a circle around it. Each player needs a drink.\n\n**Gameplay:** Players take turns drawing one card and immediately performing the rule for that card:\n\n- **Ace (Waterfall):** Everyone drinks in a chain; no one stops until the person before them stops.\n- **2 (You):** Choose someone to drink.\n- **3 (Me):** You drink.\n- **4 (Floor):** Last person to touch the floor drinks.\n- **5 (Guys):** All males drink.\n- **6 (Chicks):** All females drink.\n- **7 (Heaven):** Last person to raise their hand drinks.\n- **8 (Mate):** Pick a drinking buddy for the rest of the game.\n- **9 (Rhyme):** Say a word; players rhyme until someone fails.\n- **10 (Categories):** Name a category; players name items until someone fails.\n- **Jack (Never Have I Ever):** Quick round - first to lose all fingers drinks.\n- **Queen (Questions):** Start a question chain; first to fail drinks.\n- **King (Make a Rule):** Pour into the King's Cup and make a rule. Fourth King drinks the entire King's Cup!\n\n**Ending:** Game ends when the fourth King is drawn and that player chugs the King's Cup concoction.",
    materials: ["cards", "cups", "large cup"],
    min_players: 3,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-2",
    slug: "beer-pong",
    name: "Beer Pong",
    image: "/games/bp-1.png",
    description:
      "Beer Pong is the quintessential party drinking game where two teams throw ping pong balls across a table trying to land them in the opposing team's cups of beer. When a ball lands in a cup, the defending team drinks that cup and removes it. First team to eliminate all opposing cups wins.",
    rules_text:
      "**Setup:** Arrange 10 cups in a triangle (4-3-2-1) at each end of a long table. Fill each cup about 1/3 full with beer. Teams of 2 stand at each end.\n\n**Shooting Rules:**\n- Each team gets two shots per turn (one per player)\n- **Direct shot:** Ball goes in = cup is removed and drunk\n- **Bounce shot:** Counts as 2 cups BUT can be swatted away after it bounces\n\n**Gameplay:**\n- Both teammates shoot, then other team shoots\n- If both players make cups in one turn, team gets 'balls back' for another round\n- Teams get 1-2 're-racks' per game to reorganize remaining cups\n\n**Winning:**\n- First team to eliminate all opposing cups wins\n- Losing team drinks remaining cups on winner's side\n- **Redemption:** When last cup is hit, losing team gets final shots - if they clear remaining cups, it's overtime!\n\n**Pro Tips:** Use water in cups for sanitation and drink from your own cup. Wash balls occasionally. No blocking direct throws!",
    materials: ["ping pong balls", "red solo cups", "beer", "table"],
    min_players: 2,
    max_players: 4,
    alcohol_type: "beer",
    drunkenness_level: 3,
  },
  {
    id: "seed-3",
    slug: "ride-the-bus",
    name: "Ride The Bus",
    description:
      "Ride the Bus is a multi-round card drinking game that combines High/Low guessing with a pyramid card exchange, culminating in a brutal 'riding the bus' punishment for the unluckiest player who must flip cards correctly in succession to escape.",
    rules_text:
      "**Initial Deal:** Deal 4 cards face down to each player. Don't look yet!\n\n**Round 1 - Red or Black:** Each player guesses their first card's color. Correct = give 1 drink. Wrong = take 1 drink.\n\n**Round 2 - Higher or Lower:** Guess if second card is higher or lower than your first. Correct = give 2 drinks. Wrong = take 2 drinks.\n\n**Round 3 - Inside or Outside:** Guess if third card falls between your first two values or outside. Correct = give 3 drinks. Wrong = take 3 drinks.\n\n**Round 4 - Suit Guess:** Guess the suit of your fourth card (1 in 4 chance!). Correct = give 4 drinks. Wrong = take 4 drinks.\n\n**Pyramid Round:** Dealer creates a pyramid (5-4-3-2-1) face-down. Flip cards base to top - match a card in hand to make others drink (row determines drink count). Bluffing allowed but if called and caught, drink double!\n\n**Ride the Bus:** Player with most cards remaining 'rides the bus.' Dealer lays 10 cards face-down. Player flips and guesses red/black. Wrong = drink and START OVER from card 1. Only escape by guessing all 10 correctly in a row!",
    materials: ["cards", "beer"],
    min_players: 2,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 5,
    image: "/games/ride-the-bus-1.png",
  },
  {
    id: "seed-4",
    slug: "flip-cup",
    image: "/games/flip-cup-2.png",
    name: "Flip Cup",
    description:
      "Flip Cup is a fast-paced team relay drinking game where players must chug their drink then flip their cup from rim to upside down on the table. Once successful, the next teammate goes. First team to finish all their flips wins!",
    rules_text:
      "**Setup:** Divide into two equal teams. Line up on opposite sides of a table, facing each other. Each player has a plastic cup with a small amount of beer.\n\n**Starting:** On 'Go!', first players on each team chug their beer as fast as possible.\n\n**Flipping:** Once empty, place cup right-side up on table edge with some base overhanging. Use one hand to flick the rim upward, trying to land it upside down. Keep trying until it lands perfectly upside down!\n\n**Relay:** Next teammate can't start until previous player successfully flips. As soon as a cup lands upside down, next player immediately starts chugging.\n\n**Winning:** First team to have ALL players finish drinking and flipping wins!\n\n**Tips:**\n- Gentle but controlled flip - too hard and it over-rotates\n- Fill cups with only 1-2 ounces for faster rounds\n- Keep towels handy for spillage\n- Try 'Survivor Flip Cup' - eliminate one player from losing team each round until one person remains!",
    materials: ["red solo cups", "table", "beer"],
    min_players: 4,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
  {
    id: "seed-5",
    slug: "rage-cage",
    name: "Rage Cage (Stack Cup)",
    image: "/games/rage-cage-1.png",
    description:
      "Rage Cage (also known as Stack Cup or Boom) is a fast, chaotic drinking game where players bounce ping pong balls into cups and race to 'pass' before getting caught. If you bounce in before the person to your left, you stack their cup and they drink!",
    rules_text:
      "**Setup:** Place 20+ cups filled with beer in the center. One 'Death Cup' in the middle filled to the brim. Two players on opposite sides start with an empty cup and ping pong ball each.\n\n**Bounce and Pass:** Try to bounce your ball into your cup. Once you sink it:\n- Pass cup and ball to your LEFT\n- If you make it on FIRST try, you can pass to ANYONE\n- Then grab a center cup, drink it, and use that empty cup next\n\n**Stack/Slap Rule:** If you sink your shot while the person to your LEFT is still bouncing, STACK your cup on theirs (or slap it away)! That player must:\n- Grab a penalty cup from center\n- Drink it immediately\n- Use that empty cup to continue playing\n\n**Death Cup:** Game continues until only the Death Cup remains. The last player who gets stuck drinking it loses!\n\n**Tips:** Speed is everything! If you see the person to your left struggling, sink it fast and stack them. Watch out for 'first try' passes targeting you!",
    materials: ["red solo cups", "ping pong balls", "table", "beer"],
    min_players: 5,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 5,
  },
  {
    id: "seed-6",
    slug: "edward-40-hands",
    name: "Edward 40 Hands",
    image: "/games/edward-40-hands-1.png",
    description:
      "Edward 40 Hands is a drinking challenge where each participant has a 40-ounce beer bottle duct-taped to each hand. You cannot remove them until both are empty - meaning no bathroom, no phone, nothing until you finish 80oz of beer!",
    rules_text:
      "**Setup:** Get two 40oz bottles per player and rolls of duct tape. IMPORTANT: Use the bathroom and handle any necessities BEFORE taping!\n\n**Strap In:** Have a friend tape a 40oz bottle firmly to each hand. Use enough tape that bottles cannot be wiggled free.\n\n**The Challenge:** Simply drink both 40s to free your hands. There's no turn-taking - just drink at your pace. You cannot remove bottles (or have them removed) until both are completely empty.\n\n**The Struggle:** With bottles for hands, you can't:\n- Use the bathroom (unless you get creative)\n- Check your phone\n- Open doors easily\n- Do basically anything\n\n**Tips:**\n- Use light beer - you're drinking 80oz total (~6-7 standard drinks)\n- Kill one 40 fast to free one hand first\n- Have a sober friend ready with scissors for emergencies\n- This is meant to be silly, not dangerous - tap out if you need to\n\n**Safety:** 80oz is a LOT. Know your limits. It's perfectly fine to play with smaller bottles or quit halfway.",
    materials: ["duct tape", "40oz alcohol"],
    min_players: 1,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 5,
  },
  {
    id: "seed-7",
    slug: "never-have-i-ever",
    name: "Never Have I Ever",
    description:
      "Never Have I Ever is both an icebreaker and drinking game. Players take turns making statements about things they've never done, and anyone who HAS done that thing must drink. It leads to funny, revealing stories and bonding.",
    rules_text:
      "**Setup:** Sit in a circle with drinks. Optionally hold up 5 fingers.\n\n**Gameplay:** Starting player says 'Never have I ever...' followed by something they genuinely haven't done. Examples:\n- 'Never have I ever gone skydiving'\n- 'Never have I ever kissed a coworker'\n- 'Never have I ever broken a bone'\n\n**Drinking:** Anyone who HAS done that thing takes a drink (and puts down a finger if using that variant).\n\n**Turn Progression:** Move clockwise. Each person makes their own statement.\n\n**Optional Rule:** If NO ONE drinks to a statement, the person who made it drinks instead - encourages more interesting statements!\n\n**Tips:**\n- Start mild, escalate as comfort grows\n- The best part is the stories - pause for people to share!\n- Avoid targeting one person maliciously\n- Popular categories: travel, relationships, embarrassing moments, illegal activities\n\n**Ending:** No formal end - play until questions run dry or everyone's sufficiently buzzed. The person who drank most is 'most experienced'!",
    materials: ["no prop"],
    min_players: 3,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
    image: "/games/never-have-i-ever-1.png",
  },
  {
    id: "seed-8",
    slug: "three-man",
    image: "/games/three-man-1.png",
    name: "Three Man",
    description:
      "Three Man is a classic dice drinking game where one player is designated the 'Three Man' who drinks whenever a 3 is rolled. Other dice combinations cause various drinking outcomes, making it a fast-paced social game.",
    rules_text:
      "**Setup:** Everyone rolls one die - first to roll a 3 becomes the Three Man (maybe wear a silly hat).\n\n**Gameplay:** Players take turns rolling both dice. Based on the outcome:\n\n- **Any roll totaling 3 (1+2):** Three Man drinks\n- **Sum = 7:** Person to the LEFT drinks\n- **Sum = 11:** Person to the RIGHT drinks\n- **Sum = 9:** Everyone drinks (social!)\n- **Doubles:** Roller gives out that many drinks total and rolls again\n- **Any die showing 3:** Three Man drinks (in addition to other rules)\n\n**Three Man Switching:** If Three Man rolls a 3, they can pass the title to someone else.\n\n**Continue:** Dice go clockwise. If no rule triggers, turn ends and next player rolls.\n\n**House Rules:** Common additions:\n- 1+4 = Thumb Master (quietly put thumb on table, last to notice drinks)\n- Snake Eyes (1-1) = Choose someone to finish their drink\n\n**Ending:** No set end - play until someone's been Three Man too long or everyone's ready to stop!",
    materials: ["dice"],
    min_players: 3,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-9",
    slug: "thunderstruck",
    name: "Thunderstruck",
    image: "/games/thunderstruck-1.png",
    description:
      "Thunderstruck is a musical endurance drinking game played to AC/DC's 'Thunderstruck'. Players take turns chugging whenever 'Thunder' is sung, passing the drinking baton at each occurrence. Watch out for the long guitar solo!",
    rules_text:
      "**Setup:** Stand in a circle with drinks (beer works best). Determine the order. Designate Player 1.\n\n**Start the Song:** Play 'Thunderstruck' by AC/DC. When the first 'Thunder' is heard, Player 1 starts chugging.\n\n**Drink on 'Thunder':** Player 1 continues chugging until the NEXT 'Thunder' is sung. Then they stop and Player 2 immediately starts chugging.\n\n**Passing the Chug:** Each 'Thunder' = current chugger stops, next person starts. Continue around the circle.\n\n**The Challenge:** The song has a notorious long guitar solo with no 'Thunder' for about 30+ seconds. Whoever's turn falls during that solo must chug continuously until 'Thunder' finally returns!\n\n**Continue:** Follow the song until it ends. By the final chorus, 'Thunder' comes rapidly - quick sips back and forth.\n\n**Tips:**\n- Have extra beers ready - some will finish their cup during the solo\n- Use light beer for endurance\n- The song is ~5 minutes with ~33 'Thunder' mentions\n- Unlucky solo victim usually needs water after!",
    materials: ["music speaker"],
    min_players: 4,
    max_players: 10,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-10",
    slug: "quarters",
    image: "/games/quarters-1.png",
    name: "Quarters",
    description:
      "Quarters is a classic coin-bouncing drinking game. Players take turns trying to bounce a quarter off the table into a shot glass. Succeed and you choose who drinks; miss and the turn passes.",
    rules_text:
      "**Setup:** Shot glass in center, quarter ready, everyone has drinks.\n\n**Basic Play:** On your turn, bounce the quarter off the table trying to land it in the cup. Aim for a spot about a hand's length away.\n\n**If You Miss:** Turn passes to the left. No drinks given.\n\n**If You Sink It:**\n- Choose any player to drink\n- You get to shoot again!\n- Keep shooting as long as you make it\n\n**Bonus Rules:**\n- **3 in a row:** You can make a new rule (like 'no first names') OR make someone finish their drink\n\n**Tips:**\n- The quarter should hit at a slight angle to pop up\n- Too hard = flies over; too soft = won't reach\n- Practice makes perfect!\n\n**Variations:**\n- **Speed Quarters:** Two quarters racing around the table\n- **Team Quarters:** Teams on opposite sides compete\n\n**Etiquette:** Light heckling is fine, but don't physically interfere. Quarters love to roll away - have spares!",
    materials: ["quarters", "shot glass"],
    min_players: 3,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-11",
    slug: "medusa",
    name: "Medusa",
    description:
      "Medusa is a quick, turn-based group game about daring eye contact. All players look down, then snap up and stare at someone. If two players lock eyes, they both shout 'Medusa!' and drink. Fast, silly, and guaranteed laughs.",
    rules_text:
      "**Setup:** Form a circle. Place shot glasses or cups in the center (one per person, filled).\n\n**Heads Down:** One person counts '3, 2, 1... Medusa!' or 'Look!' - everyone starts looking at the floor.\n\n**Look Up:** On the cue, everyone lifts their head and stares directly at ONE other player's face. You must commit - no changing!\n\n**Eye Contact Outcome:**\n- **Mutual eye contact:** Both players shout 'MEDUSA!' and each take a drink from center\n- **No eye contact:** You looked at someone not looking back - you're safe!\n\nMultiple pairs can lock eyes in one round - all affected pairs drink.\n\n**Reset:** Everyone puts heads down for next round. Remove consumed drinks.\n\n**Continue:** Play as many rounds as desired or until center drinks are gone.\n\n**Tips:**\n- 3-5 rounds is usually plenty\n- The sudden chaos of people yelling 'Medusa!' is the fun part\n- No strategy - it's pure luck!\n- Works great as a quick energizer between longer games",
    materials: ["shot glasses"],
    min_players: 4,
    max_players: null,
    alcohol_type: "liquor",
    drunkenness_level: 4,
    image: "/games/medusa-1.png",
  },
  {
    id: "seed-12",
    slug: "power-hour",
    name: "Power Hour",
    description:
      "Power Hour is a drinking endurance challenge: 60 shots of beer in 60 minutes - one shot every minute for an hour. Often set to a playlist that changes songs each minute. Sounds easy, equals about 5-7 beers!",
    rules_text:
      "**Preparation:** Get a Power Hour playlist (60 one-minute song clips) or a timer. Each player needs a shot glass and ~6-7 beers.\n\n**Start:** When the timer/music begins, fill your shot glass with beer and take shot #1.\n\n**Every Minute:** When the minute mark hits (or song changes), everyone takes another beer shot. Yell 'Drink!' together!\n\n**Continue:** 60 shots over 60 minutes. That's roughly:\n- 1.5oz/minute = 90oz total (~7.5 beers) with 1.5oz shots\n- 1oz/minute = 60oz total (~5 beers) with 1oz shots\n\n**Completion:** If you make all 60, you've completed a Power Hour!\n\n**Variations:**\n- **Centurion (Century Club):** 100 shots in 100 minutes (extreme!)\n- **Power Half-Hour:** 30 shots for lighter version\n\n**Tips:**\n- Use light beer\n- Having a themed playlist keeps energy up\n- It's okay to miss a couple shots for bathroom breaks\n- The carbonation and volume are the real challenge\n\n**Safety:** Many people tap out before 60 - no shame! Know your limits.",
    materials: ["music speaker", "beer", "shot glasses"],
    min_players: 2,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 5,
    image: "/games/power-hour-1.png",
  },
  {
    id: "seed-13",
    slug: "wizard-staff",
    name: "Wizard Staff",
    description:
      "Wizard Staff is an ongoing party challenge where you tape each finished beer can to the bottom of your growing 'staff'. When your staff reaches your height, you become a Wizard! The tallest staff at night's end is the 'Wisest Wizard'.",
    rules_text:
      "**Supplies:** Plenty of beer cans and tape (duct tape works best).\n\n**Begin (Level 1):** Finish your first can. Tape the empty on top of a fresh can. You're Level 1!\n\n**Leveling Up:** Each finished can gets taped to the bottom of your staff. Announce your level proudly ('Level 5 Wizard here!').\n\n**Wizard Status:** When your staff reaches your height, you're a 'True Wizard' - maybe don a robe or wizard hat!\n\n**Boss Battles (Optional):** Every 5th level, defeat a 'boss' by taking a shot of liquor before continuing.\n\n**Wisest Wizard:** Tallest staff at party's end wins! They may give a victory speech with staff held high.\n\n**Variations:**\n- **Wizard Duel:** Two players at same level can sword-fight with staffs - first to break loses\n\n**Tips:**\n- Tape securely - tall staffs get wobbly\n- Pace yourself - don't rush to wizardry\n- Be careful moving with long staffs\n- Take a group photo at the end!\n\n**Safety:** This sneaks up on you. Watch your consumption and know when to stop.",
    materials: ["duct tape", "beer"],
    min_players: 2,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 4,
    image: "/games/wizard-staff-1.png",
  },
  {
    id: "seed-14",
    slug: "civil-war",
    name: "Civil War",
    description:
      "Civil War is fast-paced team beer pong warfare - 3v3 with multiple balls in play and NO turns! Each player defends their own cups while attacking opponents. It's a chaotic race to eliminate the other team's cups.",
    rules_text:
      "**Setup:** Two teams of 3, opposite ends of table. Each player has 3 cups in a triangle in front of them (9 cups per side total). Fill with beer. Give each team 3 ping pong balls.\n\n**GO!** No turns - everyone can grab balls and throw whenever ready!\n\n**Shooting:** Aim at any opponent's cups constantly. Retrieve and rethrow as fast as you can.\n\n**When Hit:** If your cup is hit, you must:\n- Drink that cup immediately\n- You CANNOT throw until you finish drinking\n- Remove the cup after drinking\n\n**Elimination:** Player with all cups gone can still retrieve balls for teammates but cannot throw.\n\n**Winning:** First team to eliminate ALL opposing cups wins! Losers drink any remaining cups.\n\n**Strategy:**\n- Focus fire on one player to knock them out quickly (3v2 advantage)\n- Communicate ('Cover me while I drink!')\n- Speed matters more than accuracy\n\n**House Rules:**\n- 'Same Cup' (two balls in one cup) = instant elimination for that player\n- Friendly fire (hitting your own cup) = you drink it as penalty",
    materials: ["ping pong balls", "red solo cups", "table"],
    min_players: 6,
    max_players: 6,
    alcohol_type: "beer",
    drunkenness_level: 5,
    image: "/games/civil-war-1.png",
  },
  {
    id: "seed-15",
    slug: "card-blow",
    name: "Card Blow",
    description:
      "Card Blow is a simple, suspenseful game. A deck of cards is placed on a bottle, and players take turns blowing cards off. The goal is NOT to blow the last card off - whoever does must drink!",
    rules_text:
      "**Setup:** Balance a full deck of cards on an empty bottle or tall glass mouth.\n\n**Gameplay:** Players take turns blowing at the deck. You MUST blow at least one card off - can't just do a tiny puff.\n\n**The Goal:** Blow some cards off, but NOT all of them.\n\n**Losing:** If you blow off ALL remaining cards (clearing the deck), you lose! Chug your drink or take a shot.\n\n**Strategy:**\n- Early rounds: blow more forcefully\n- As cards thin: try gentle exhales\n- When few remain: even a tiny puff might clear them all\n\n**Rules:**\n- No touching cards or bottle - only air!\n- If you fail to blow any card off, take a penalty sip and try again\n\n**Tips:**\n- Blow from different angles (side vs top)\n- Cold breath vs warm breath affects the blow\n- Tension builds as the stack gets smaller!\n\n**Ending:** Play multiple rounds - it's quick. Refill drinks as needed. There's no winner, just whoever avoids losing!",
    materials: ["cards", "empty bottle"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
    image: "/games/card-blow-1.png",
  },
  {
    id: "seed-16",
    slug: "drunk-jenga",
    name: "Drunk Jenga",
    description:
      "Drunk Jenga is classic Jenga with a boozy twist: each block has a rule or challenge written on it. Pull a block, do what it says (often involving drinks). Knock the tower over? Finish your drink!",
    rules_text:
      "**Preparation:** Write instructions on Jenga blocks with a marker. Ideas:\n- 'Take 2 sips' / 'Give 2 sips'\n- 'Everyone drinks'\n- 'Make a rule'\n- 'Truth or Dare'\n- 'Waterfall'\n- 'Categories'\n- 'Rhyme Time'\n- 'Thumb Master'\n- Non-drinking dares ('Sing a song')\n\n**Setup:** Build the tower normally (3 blocks per layer, alternating direction).\n\n**Gameplay:**\n1. Remove one block from below the top completed layer\n2. Read the instruction aloud\n3. Do what it says IMMEDIATELY\n4. Place the block on top\n5. Next player's turn\n\n**Tower Falls:** Whoever knocks it over finishes their drink!\n\n**Popular Block Ideas:**\n- 'Waterfall' - everyone chugs in sequence\n- 'Guys/Girls drink'\n- 'Never Have I Ever - 1 round'\n- 'Left player drinks'\n- 'Make any player drink 5'\n\n**Tips:**\n- The writing sometimes reveals which blocks are loose\n- Drunk players make risky pulls - that's the fun!\n- Keep rules light and fun, not mean",
    materials: ["jenga blocks", "marker"],
    min_players: 2,
    max_players: 6,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-17",
    slug: "buffalo",
    name: "Buffalo",
    description:
      "Buffalo is an all-time, full-time drinking rule: you may only drink with your non-dominant hand. If someone catches you sipping with your dominant hand and yells 'Buffalo!', you must immediately finish your entire drink!",
    rules_text:
      "**Agreement:** At the start of the night, everyone agrees to play Buffalo. Declare dominant hands.\n\n**The Rule:** You can ONLY hold and drink beverages with your non-dominant hand. (Righties use left, lefties use right.)\n\n**Buffalo Call:** If you see someone drink with their dominant hand, yell 'BUFFALO!' They must immediately chug the rest of that drink!\n\n**Always On:** This rule stays in effect the entire event. Even during other games, bathroom trips, everything.\n\n**False Calls:** If you call Buffalo incorrectly (they were using the right hand), YOU drink as penalty.\n\n**Tips:**\n- It's easy early, but as you drink more, you'll forget\n- People get paranoid - clutching drinks in off-hands fiercely\n- Some friend groups play Buffalo for LIFE\n\n**Exceptions:**\n- Non-alcoholic drinks usually exempt\n- If someone's clearly too drunk, ease up\n\n**Ending:** No formal end - rule ends when the party does or everyone agrees to stop.\n\n**Remember:** In Buffalo, left is right and right is wrong! (For righties)",
    materials: ["no prop"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
    image: "/games/buffalo-1.png",
  },
  {
    id: "seed-18",
    slug: "fuck-the-dealer",
    name: "F**k The Dealer",
    description:
      "F**k The Dealer is a card guessing game where players try to guess card values. The dealer gives 'higher/lower' hints. Guess right and the dealer drinks; guess wrong and YOU drink the difference. The name comes from successfully 'f**king over' the dealer!",
    rules_text:
      "**Setup:** One player is the Dealer with a shuffled deck.\n\n**Guessing:**\n1. Player to dealer's left guesses the top card's value (Ace-King)\n2. Dealer peeks and says 'Higher' or 'Lower'\n3. Player makes second guess\n\n**Outcomes:**\n- **Correct 1st try:** Dealer drinks 4, card discarded\n- **Correct 2nd try:** Dealer drinks 2, card discarded\n- **Wrong both times:** Player drinks the DIFFERENCE between their second guess and actual card value\n\n**Passing the Deal:** After 3 consecutive players fail (wrong twice), the deal passes to the next player.\n\n**Strategy:**\n- Watch discarded cards - later in the game, guessers have better odds\n- Dealers often get 'f**ked' late game when few cards remain unknown\n\n**Example:** Card is 9. Player guesses 6 ('Higher'), then 10 ('Wrong!'). Difference = 10-9 = 1 drink.\n\n**Ending:** Game ends when deck is empty or players stop. The dealer who got hit hardest 'lost'!",
    materials: ["cards"],
    min_players: 3,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 4,
    image: "/games/f-the-dealer-2.png",
  },
  {
    id: "seed-19",
    slug: "roxanne",
    name: "Roxanne",
    description:
      "Roxanne is a song-based drinking game played to 'Roxanne' by The Police. Split into two teams - one drinks on 'Roxanne', the other on 'put on the red light'. The song repeats these phrases A LOT, especially at the end!",
    rules_text:
      "**Setup:** Divide players into two equal groups. Assign:\n- **Team Roxanne:** Drinks on every 'Roxanne'\n- **Team Red Light:** Drinks on every 'red light'\n\n**Play the Song:** Start 'Roxanne' by The Police (~3 minutes).\n\n**Drink Cues:**\n- Every 'Roxanne!' = Team Roxanne sips\n- Every 'red light' = Team Red Light sips\n\nThese alternate a lot in the chorus!\n\n**The Challenge:**\n- 'Roxanne' appears ~26 times\n- 'Red light' appears ~26 times\n- Each team takes ~26 sips in 3 minutes!\n\n**Tips:**\n- Use light beer - it's fast drinking\n- The final minute is intense rapid-fire\n- Feel free to sing along!\n\n**Variations:**\n- If someone can't keep up, they can skip a few near the end\n- Split guys vs girls traditionally\n\n**Aftermath:** Usually everyone's quite buzzed after just one 3-minute song. That's the beauty of Roxanne - short but effective!\n\n**Safety:** Use moderate sips - 26 sips in 3 minutes adds up fast!",
    materials: ["music speaker"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-20",
    slug: "movie-drinking-game",
    image: "/games/movie-drinking-game-1.png",
    name: "Movie Drinking Game (Generic)",
    description:
      "A Movie Drinking Game is a customizable set of rules for any movie. Pick common occurrences, cliches, or catchphrases and drink whenever they happen on screen. Turns passive watching into an interactive party!",
    rules_text:
      "**Choose a Movie:** Pick something with recurring elements - classics, superhero films, comedies work great.\n\n**Set the Rules (5-15 cues):** Before starting, agree on drink triggers:\n\n**Common Occurrences:**\n- Character says catchphrase\n- Someone dies\n- There's an explosion\n- Jump scare happens\n- Someone says the movie title\n\n**Character/Item Appearances:**\n- Specific character appears\n- Weapon is used\n- Kiss happens\n\n**Big Events (finish drink):**\n- Villain reveals plan\n- Main character transformation\n- End credits\n\n**Watch and Drink:** Call out triggers as they happen. Everyone drinks accordingly.\n\n**Tips:**\n- Start with fewer rules - you can add mid-movie if too dry\n- Adjust on the fly if one rule triggers too often\n- Use beer, not shots - movies are long!\n\n**Popular Movie Rules:**\n- **Star Wars:** Lightsaber ignites, 'Force' mentioned\n- **Harry Potter:** Spell cast, house points awarded\n- **James Bond:** 'Bond, James Bond', martini ordered\n\n**Caution:** Research or guess frequency - some rules trigger 50+ times!",
    materials: ["tv"],
    min_players: 1,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
  },
  {
    id: "seed-21",
    slug: "truth-or-drink",
    image: "/games/truth-or-drink-1.png",
    name: "Truth or Drink",
    description:
      "Truth or Drink is Truth or Dare's boozy cousin. Players ask each other personal questions - answer honestly or take a drink to refuse. It leads to juicy revelations... or a lot of drinking to keep secrets!",
    rules_text:
      "**Setup:** Sit in a circle with drinks. Optionally prepare question cards or use an app.\n\n**Gameplay:**\n1. Choose someone and ask them a question\n2. They must either:\n   - **Tell the truth** - answer fully and honestly\n   - **Drink** - take a drink and say nothing\n\n**No Pressure:** Once someone drinks, the subject is DROPPED. Don't badger for answers.\n\n**Turn Progression:** Rotate who asks. Make sure everyone gets asked equally.\n\n**Question Ideas:**\n- 'What's the biggest lie you've told a friend?'\n- 'Which person here would you kiss?'\n- 'What's your guilty pleasure?'\n- 'Have you ever cheated?'\n- 'What's the most embarrassing thing you've done drunk?'\n\n**Boundaries:** Set comfort levels beforehand. No overly traumatic topics. Keep it fun, not cruel.\n\n**Tips:**\n- Questions naturally escalate as people get comfortable (or drunk)\n- Some people will always drink - that's fine!\n- The stories after someone answers truthfully are often the best part",
    materials: ["no prop"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-22",
    slug: "most-likely-to",
    name: "Most Likely To",
    description:
      "Most Likely To is a voting game where everyone points at who's most likely to do something. Get the most fingers pointed at you? Time to drink! It's fun for learning what your friends really think of you.",
    rules_text:
      "**Setup:** Sit where everyone can see each other. Have drinks ready.\n\n**Starting:** One person poses a 'Most likely to...' scenario:\n- 'Who's most likely to survive on a desert island?'\n- 'Most likely to forget a friend's birthday?'\n- 'Most likely to become famous?'\n\n**Count & Point:** On '1, 2, 3' everyone simultaneously points at who they think fits best. You can't point at yourself.\n\n**Majority Drinks:** Person with most fingers pointed at them takes a drink (one sip per vote, or just a big gulp).\n\n**Ties:** If tied, all tied players drink.\n\n**Rotate:** Next person poses a new scenario.\n\n**Question Ideas:**\n- 'Most likely to get arrested'\n- 'Most likely to text their ex at midnight'\n- 'Most likely to cry during a movie'\n- 'Most likely to win the lottery and lose the ticket'\n\n**Tips:**\n- Mix flattering ones ('most likely to become a millionaire') with funny ones\n- Keep it playful, not mean\n- Often sparks fun stories ('Remember when you actually did that?!')",
    materials: ["no prop"],
    min_players: 3,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 3,
    image: "/games/most-likely-to-1.png",
  },
  {
    id: "seed-23",
    slug: "would-you-rather",
    name: "Would You Rather",
    description:
      "Would You Rather presents players with two challenging scenarios to choose between. After voting, those in the minority must drink. It sparks debate and reveals how differently people think!",
    rules_text:
      "**Setup:** One person poses a 'Would you rather...?' with two options.\n\n**Example Questions:**\n- 'Would you rather only whisper or only shout for the rest of your life?'\n- 'Would you rather fight one horse-sized duck or 100 duck-sized horses?'\n- 'Would you rather have telepathy or telekinesis?'\n\n**Voting:** On count of 3, everyone holds up 1 finger (option A) or 2 fingers (option B). Reveal simultaneously!\n\n**Minority Drinks:** The group with fewer votes is the minority - they each drink!\n\n**Ties:** If perfectly split, everyone drinks.\n\n**Discussion:** Often half the fun is debating why you chose your answer!\n\n**Rotate:** Next person poses a new question.\n\n**Tips:**\n- Start mild, escalate to weird/gross/difficult\n- 'Both good things' questions are interesting too\n- Some questions reveal surprising differences\n\n**No Winners:** It's not about winning - it's about the conversations and learning how weird your friends are!",
    materials: ["no prop"],
    min_players: 3,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
  },
  {
    id: "seed-24",
    slug: "slap-cup",
    image: "/games/slap-cup-1.png",
    name: "Slap Cup",
    description:
      "Slap Cup (also called Boom) is a high-energy game where players bounce ping pong balls into cups racing around the table. If you catch up to the person on your left, you SLAP their cup away and they drink a penalty!",
    rules_text:
      "**Setup:** Fill 20-30 cups with beer in the center. One 'Death Cup' filled to the brim in the middle. Two players start with empty cups and ping pong balls.\n\n**Bounce and Pass:** Try to bounce ball into your cup. Once you sink it:\n- Pass cup and ball to your LEFT\n- If first try: you can pass to ANYONE (strategic targeting!)\n- Grab a center cup, drink it, use that empty cup to continue\n\n**Slap/Stack Rule:** If you sink your shot while the person to your LEFT is still bouncing, SLAP their cup off the table!\n\nThat player must:\n- Grab a penalty cup from center\n- Chug it immediately\n- Continue with that cup once empty\n\n**Elimination:** As center cups empty, the game shrinks. Last remaining cup is the Death Cup.\n\n**Losing:** Last player stuck drinking the Death Cup when no more center cups remain loses!\n\n**Tips:**\n- Speed is everything!\n- Watch your left - if they're struggling, sink it fast\n- Don't get tunnel vision on your own cup",
    materials: ["red solo cups", "ping pong balls", "table"],
    min_players: 4,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
  {
    id: "seed-25",
    slug: "horse-race",
    name: "Horse Race",
    description:
      "Horse Race is a fast betting game using playing cards like a horse race. The four suit Aces are horses racing down a track. Players bet on which suit wins - losers drink their bet, winners assign drinks!",
    rules_text:
      "**Setup Track:**\n1. Remove the 4 Aces - these are your 'horses' at the starting line\n2. Lay out 6-10 face-down cards vertically as the track\n\n**Place Bets:** Each player picks a suit to back. Announce your bet (e.g., 'I'm betting 3 drinks on Hearts').\n\n**Run the Race:** Flip remaining deck cards one at a time. Each card revealed = that suit's Ace moves forward one space.\n\n**Excitement:** Cheer for your horse! 'Come on Hearts!' The announcer can narrate like a real race.\n\n**Finishing:** First Ace to pass the last track card wins!\n\n**Payouts:**\n- **Winners:** Assign your bet amount to others\n- **Losers:** Drink your bet amount\n- **Last place:** Usually drinks extra (3 sips)\n\n**Example:** Hearts wins. You bet 4 on Hearts? Give out 4 drinks. You bet 3 on Clubs (last)? Drink 3.\n\n**Optional Rule:** When an Ace reaches a new track card, flip it - that suit moves back one (stumble!).\n\n**Tips:** Races go quick - play multiple rounds. Great for large groups!",
    materials: ["cards"],
    min_players: 3,
    max_players: 10,
    alcohol_type: "any",
    drunkenness_level: 3,
    image: "/games/horse-race-1.png",
  },
  {
    id: "seed-26",
    slug: "bite-the-bag",
    name: "Bite the Bag",
    description:
      "Bite the Bag is a physical dexterity game. Players take turns picking up a paper bag from the floor using only their mouth - no hands, only feet touching ground. Each round, the bag gets shorter. Fail and drink!",
    rules_text:
      "**Setup:** Place a paper grocery bag standing upright on the floor. Remove shoes for flexibility.\n\n**Round 1 (Full Bag):** Each player attempts to pick up the bag using ONLY their mouth. Rules:\n- Only feet may touch the ground\n- No hands or knees on floor\n- Bag must be free-standing (no hooking against walls)\n\n**If You Fail:** Touch the ground with something besides feet OR can't reach it = drink and you're eliminated from further rounds.\n\n**Cut the Bag:** After everyone tries, cut 1-2 inches off the top. Surviving players try again with the shorter bag.\n\n**Continue:** Each round, bag gets shorter and harder. People resort to splits, one-legged squats, etc.\n\n**Winning:** Last person able to grab the super-short bag wins! Everyone else bows to their flexibility.\n\n**Tips:**\n- Warm up your legs and back\n- Balance on one foot, extend the other behind\n- Play on soft surfaces - falling happens!\n- It's more about silliness than heavy drinking",
    materials: ["paper bag"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-27",
    slug: "chandelier",
    image: "/games/chandelier-1.png",
    name: "Chandelier",
    description:
      "Chandelier is a hybrid of Flip Cup and Beer Pong. Players bounce a ball at cups around a center 'Chandelier' cup. Hit someone's cup and everyone races to chug and flip - last to flip drinks the center cup!",
    rules_text:
      "**Setup:**\n- Each player has a cup with some beer in front of them, arranged in a circle\n- One larger cup (the 'Chandelier') in the CENTER, filled to the brim\n\n**Shooting:** Take turns bouncing a ping pong ball toward the cluster.\n\n**Miss:** Pass the ball left. Nothing happens.\n\n**Hit Someone's Cup:** That triggers a RACE!\n- Everyone (except shooter) must immediately chug their cup\n- Then flip their empty cup upside-down (Flip Cup style)\n- LAST to successfully flip loses!\n\n**Loser Penalty:** Drink the entire center Chandelier cup!\n\n**Hit the CENTER Cup:** Even worse!\n- Everyone except shooter chugs and races to flip\n- Last to flip drinks the Chandelier AND one of their own beers!\n\n**Continue:** Refill cups and Chandelier. Next player shoots.\n\n**Tips:**\n- Quick drinking and good flipping technique are crucial\n- Target the slow drinkers strategically\n- It gets chaotic fast - embrace it!",
    materials: ["red solo cups", "ping pong balls", "table"],
    min_players: 4,
    max_players: 10,
    alcohol_type: "beer",
    drunkenness_level: 5,
  },
  {
    id: "seed-28",
    slug: "irish-poker",
    name: "Irish Poker",
    description:
      "Irish Poker is a two-phase card game. First, guess your 4 cards' attributes (color, higher/lower, inside/outside, suit) - wrong guesses mean drinks. Then the unluckiest player 'rides the bus' in a brutal punishment round!",
    rules_text:
      "**Deal:** 4 cards face-down to each player. Don't peek!\n\n**Round 1 - Red or Black:** Guess color. Right = give 2 drinks. Wrong = take 2.\n\n**Round 2 - Higher or Lower:** Compare to first card. Right = give 4. Wrong = take 4.\n\n**Round 3 - Inside or Outside:** Will third card fall between first two values? Right = give 6. Wrong = take 6.\n\n**Round 4 - Suit:** Guess exact suit (1 in 4 chance!). Right = give 8. Wrong = take 8!\n\n**Pyramid Round (Optional):** Build a pyramid (5-4-3-2-1). Flip cards bottom to top - match your hand cards to assign drinks based on row.\n\n**Ride the Bus:** Player with most wrong answers 'rides the bus':\n1. Dealer lays 10 cards face-down\n2. Player flips and guesses red/black for each\n3. Wrong = drink and START OVER at card 1\n4. Only escape by guessing all 10 correctly in a row!\n\n**Tips:** This can trap someone for a LONG time. Use mercy rules if needed!",
    materials: ["cards"],
    min_players: 2,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 4,
    image: "/games/irish-poker-1.png",
  },
  {
    id: "seed-29",
    slug: "cheers-to-the-governor",
    image: "/games/cheers-to-the-governor-1.png",
    name: "Cheers to the Governor",
    description:
      "Cheers to the Governor is a counting game from 1-21 where rules stack up. Reach 21 and you make a new rule (like swapping numbers or silly actions). Mess up any rule? Drink and restart. It gets chaotic fast!",
    rules_text:
      "**Start Counting:** Go around the circle, one number per person: 1, 2, 3... up to 21.\n\n**Cheers at 21:** Person who says '21' shouts 'Cheers to the Governor!' Everyone drinks. That person makes a NEW RULE.\n\n**Rule Examples:**\n- Swap 7 and 14 (say 14 at 7, 7 at 14)\n- Say 'potato' instead of 5\n- Clap instead of saying 9\n- Spin around at 12\n- Skip number 13 entirely\n\n**Restart:** Count from 1 again with all rules active.\n\n**Mistakes:** If anyone breaks a rule or says a wrong number:\n- They drink\n- Restart at 1 (all rules still apply!)\n\n**Stacking Chaos:** Rules accumulate! By round 5, you might have:\n- Swap 7/14, say 'banana' at 3, clap at 9, reverse direction at 15...\n\nIt becomes VERY hard to reach 21!\n\n**Tips:**\n- Keep rules clear and doable\n- Recite all rules before each round if needed\n- 5-10 rules is usually enough chaos\n\n**Ending:** Stop when reaching 21 becomes impossible or everyone's too drunk to count!",
    materials: ["no prop"],
    min_players: 4,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-30",
    slug: "beeramid",
    name: "Beeramid (Pyramid)",
    description:
      "Beeramid (Pyramid) is a card game of matching and bluffing. Cards are laid in a pyramid and flipped row by row. Match a card in your hand to make others drink - but they can call your bluff! Get caught lying? Drink double!",
    rules_text:
      "**Setup:**\n1. Build a face-down pyramid: 5 cards (bottom), 4, 3, 2, 1 (top)\n2. Deal 4 cards to each player (look but keep secret)\n3. Drink values: Row 1 = 1 drink, Row 2 = 2, up to Row 5 = 5 drinks\n\n**Gameplay:** Flip pyramid cards one at a time, bottom row first.\n\n**Matching:** When a card is revealed, if you have a matching RANK in hand, you can say '[Name], drink [row value]!' and assign drinks.\n\n**Bluffing Allowed:** You can CLAIM to have a match even if you don't!\n\n**Calling Bluff:** The target can say 'Bullshit!' and challenge:\n- **Bluffer caught:** Claimer drinks DOUBLE\n- **Claimer was truthful:** Challenger drinks DOUBLE\n\n**Strategy:**\n- Bluff when you think they won't challenge\n- Call bluffs when you're confident (like if you have all 4 of that rank)\n- Later rows mean higher stakes (5 drinks or 10 if caught!)\n\n**Ending:** After the top card is revealed, game ends. Most drinks taken = 'loser'.\n\n**Tips:** Watch what cards have been revealed - count cards to know who's bluffing!",
    materials: ["cards"],
    min_players: 3,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 4,
    image: "/games/beeramid-1.png",
  },
  {
    id: "seed-31",
    slug: "ace-race",
    name: "Ace Race",
    description:
      "Ace Race (a.k.a. Horse Race) is a fast 'race track' card game where players bet on which suit will reach the finish line first as the dealer flips cards from the deck. Pick your suit and cheer it on!",
    rules_text:
      "**Setup:**\n- Pick a dealer and shuffle a standard deck\n- Remove the 4 Aces and line them up as 'racers' at the starting line\n- Deal a row of face-up cards (7-8 cards) as the 'race track' (finish line)\n\n**Betting:**\n- Everyone chooses a suit to bet on (hearts, diamonds, clubs, or spades)\n- Multiple players can bet on the same suit\n\n**Gameplay:**\n- Dealer flips cards from the deck one at a time\n- Each time a suit is flipped, move that suit's Ace one spot toward the finish\n- First Ace to reach or pass the finish line wins!\n\n**Drinking:**\n- Everyone who didn't pick the winning suit drinks\n- Optional: Bet sips (1-5) before the race - losers drink their bet amount\n\n**Optional - Stumble Rule:**\n- When an Ace reaches a new track card position, flip that track card\n- The suit shown on the track card moves BACK one space (stumbles)\n\n**Tips:**\n- Great spectator energy - cheer for your suit!\n- Fast rounds keep everyone engaged\n- Works well as a drinking tournament with multiple races\n\n**Playtime:** 5-10 min | **Difficulty:** Easy",
    materials: ["cards"],
    min_players: 4,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-32",
    slug: "around-the-world",
    name: "Around the World",
    image: "/games/around-the-world-1.png",
    description:
      "Around the World (a.k.a. 4 Guesses) is a quick guessing chain where you try to correctly predict four cards in a row: color, higher/lower, inside/outside, and suit. Each wrong guess means more drinks!",
    rules_text:
      "**Setup:**\n- Pick a dealer\n- Play clockwise around the table\n\n**The Four Guesses:**\nEach player completes four guesses in sequence:\n\n**1. Red or Black**\n- Guess the color of your first card\n- Dealer reveals the card\n- Wrong = 1 drink\n\n**2. Higher or Lower**\n- Guess if the next card is higher or lower than your first card\n- Dealer reveals second card\n- Wrong = 2 drinks\n\n**3. Inside or Outside**\n- Guess if the third card falls IN BETWEEN your first two cards or OUTSIDE them\n- Dealer reveals third card\n- Wrong = 3 drinks\n\n**4. Suit**\n- Guess the suit of the fourth card (Hearts, Diamonds, Clubs, Spades)\n- Dealer reveals fourth card\n- Wrong = 4 drinks\n\n**Completing the Journey:**\n- After all four guesses, turn passes to the next player\n- Get all 4 right? You made it 'Around the World' - assign 10 drinks!\n\n**Variation:**\n- Some groups increase drink amounts per step (1, 2, 3, 4 becomes 2, 4, 6, 8)\n\n**Playtime:** 5-15 min | **Difficulty:** Easy",
    materials: ["cards"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-33",
    slug: "chems",
    image: "/games/chems-1.png",
    name: "Chems",
    description:
      "Chems is a partner-based, high-attention card game where you try to collect four-of-a-kind and secretly signal your teammate to call 'Chems!' Watch your opponents closely - catch them signaling and make them drink!",
    rules_text:
      "**Setup:**\n- Split into teams of 2 (works best with 4 or 6 players total)\n- Each team privately agrees on a SECRET SIGNAL (wink, nose scratch, ear tug, etc.)\n- Keep your signal hidden from other teams!\n\n**Deal:**\n- Dealer gives each player 4 cards\n- Place 4 cards face-up in the middle of the table\n\n**Gameplay:**\n- Everyone plays at the SAME TIME - no turns!\n- Discard 1 card from your hand, then pick up 1 from the middle (one-for-one only)\n- Goal: Collect four cards of the same RANK (four 7s, four Kings, etc.)\n\n**Calling Chems:**\n- When you have four-of-a-kind, use your secret signal\n- Your teammate must notice and call 'CHEMS!'\n- If your teammate truly has four-of-a-kind = Other team drinks 10 sips\n- If they DON'T have four-of-a-kind = Your team drinks 10 sips\n\n**Catching Opponents:**\n- If you think an opponent has four-of-a-kind, call them out!\n- Correct = They drink 10 sips\n- Wrong = You drink 10 sips\n\n**Winning:**\n- Play multiple rounds\n- First team to an agreed score (usually 5 points) wins\n\n**Tips:**\n- Subtle signals work best - don't make it obvious!\n- Watch opponents' hands AND their faces\n- The chaos of simultaneous play makes it exciting\n\n**Playtime:** 10-30 min | **Difficulty:** Medium",
    materials: ["cards"],
    min_players: 4,
    max_players: 6,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-34",
    slug: "juggernaut",
    name: "Juggernaut",
    description:
      "Juggernaut is an endurance-style flip-and-drink game where the 'Juggernaut' must drink based on card values while another player flips rapidly. How long can you last before passing the role?",
    rules_text:
      "**Setup:**\n- Choose a starting Juggernaut (the active drinker)\n- Shuffle a standard deck and place it face-down\n- Player to the Juggernaut's left becomes the Flipper\n\n**Gameplay:**\n- The Flipper flips cards from the deck one at a time, QUICKLY\n- For each flipped card, the Juggernaut must drink:\n\n**Drink Values:**\n- Number cards (2-10): That many sips\n- Jack: 10 sips\n- Queen: 10 sips\n- King: STOP! Role passes to next player\n- Ace: 1 big drink (or 11 sips)\n\n**Passing the Role:**\n- When a KING is flipped, the Juggernaut role passes clockwise\n- New Juggernaut starts drinking immediately\n- New Flipper is the player to their left\n\n**Endurance:**\n- Keep going until the group decides to stop or the deck runs out\n- The Juggernaut can't refuse drinks while in the role!\n\n**Variations:**\n- Speed Mode: Flipper counts '3-2-1' and flips faster if Juggernaut falls behind\n- Mercy Rule: Allow Juggernaut to 'tap out' by chugging a full drink\n\n**Warning:** This game can get intense! Pace yourselves.\n\n**Playtime:** 10-20 min | **Difficulty:** Medium",
    materials: ["cards"],
    min_players: 3,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 5,
  },
  {
    id: "seed-35",
    slug: "vietnam-war",
    image: "/games/vietnam-war-1.png",
    name: "Vietnam War",
    description:
      "Vietnam War is an asymmetric team beer pong game where 'Vietnam' can place cups anywhere and 'USA' has more cups that get replaced when hit. A historically-themed twist on classic pong!",
    rules_text:
      "**Setup:**\n- Split into 2 teams: USA and Vietnam\n- Each team starts with 10 cups\n- USA: Sets cups in a traditional triangle formation\n- Vietnam: Places cups ANYWHERE on their side (scattered, hidden, etc.)\n\n**Gameplay:**\n- USA shoots first\n- Each team gets 3 shots per turn\n\n**When Cups Are Hit:**\n- **USA cup hit:** USA drinks it and REPLACES it (stays in play - unlimited resources!)\n- **Vietnam cup hit:** Vietnam drinks it and removes it (does NOT get replaced)\n\n**Victory Conditions:**\n- Game ends when all Vietnam cups are hit\n- OR when USA 'surrenders' (quits)\n- Losing side drinks remaining cups\n\n**Optional Special Attacks:**\n- **Vietnam Rapid Fire:** Timed shooting burst\n- **Vietnam Strike/Bomb:** Hit counts surrounding USA cups too\n- **Vietnam Backup/Draft:** Add a new back row to USA's formation\n- **USA Night Vision:** Handicap Vietnam with blind shots\n- **Napalm:** USA lands 2 in one round = Vietnam takes a shot\n\n**Strategy:**\n- Vietnam: Spread cups out, move them after each turn\n- USA: Focus fire, don't give up!\n\n**Playtime:** 20-45 min | **Difficulty:** Medium",
    materials: ["ping pong balls", "cups", "table"],
    min_players: 4,
    max_players: 10,
    alcohol_type: "beer",
    drunkenness_level: 5,
  },
  {
    id: "seed-36",
    slug: "baseball",
    name: "Baseball",
    description:
      "Baseball is a team drinking game that mixes beer pong-style shooting with 'running bases' via flip cup battles. Complete with outs, innings, and stealing - it's America's pastime, drunk!",
    rules_text:
      "**Setup:**\n- Split into 2 teams\n- One team is 'at bat,' the other 'in the field'\n- Set up 4 cups in a line (representing bases: Single, Double, Triple, Home Run)\n- Have flip cups ready on the side for stealing\n\n**Batting:**\n- Batting team takes turns shooting at the defense's cups\n- A made shot advances the hitter to the corresponding 'base'\n- Each batter gets up to 3 'strikes' (misses) before being OUT\n\n**Stealing Bases:**\n- To 'steal' or advance bases, a runner challenges a defender to a flip cup battle\n- Both players drink their cup and flip it\n- Winner advances; loser records an OUT\n\n**Scoring:**\n- Runners advance and score like real baseball\n- When a runner crosses home plate = 1 run\n\n**Innings:**\n- 3 outs = end of half-inning, teams switch roles\n- Play a set number of innings (usually 6-9) or until the group calls it\n\n**Tips:**\n- Home Run cup should have the most beer!\n- Keep track of runners on bases\n- Stealing adds exciting head-to-head moments\n\n**Playtime:** 30-60 min | **Difficulty:** Medium-Hard",
    materials: ["ping pong balls", "cups", "table"],
    min_players: 6,
    max_players: 10,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
  {
    id: "seed-37",
    slug: "7-11-doubles",
    name: "7-11-Doubles",
    description:
      "7-11-Doubles is a dice race where one player chugs while another tries to roll a 7, 11, or doubles to keep them drinking. Beat the roll or keep chugging!",
    rules_text:
      "**Setup:**\n- Fill a cup 3/4 full and place in the center\n- Grab two dice\n- Highest initial roll starts as the Roller\n\n**Gameplay:**\n- Roller keeps rolling dice until they hit a 7, 11, or any doubles\n- When they hit one of these, they nominate a CHUGGER\n\n**The Race:**\n- Chugger grabs the cup and starts drinking\n- IMPORTANT: Once the chugger touches the drink, the roller may roll again\n- Roller keeps rolling, trying to hit 7, 11, or doubles\n\n**Outcomes:**\n- If roller hits 7/11/doubles BEFORE chugger finishes: Chugger must refill and continue (or restart)\n- If chugger finishes FIRST: Pass the dice clockwise, refill cup, new round begins\n\n**Penalties:**\n- Roller touches dice before chugger touches cup = switch roles\n- Dice fall off table = roller chugs\n\n**Strategy:**\n- Chuggers: Don't touch the cup until you're ready to COMMIT\n- Rollers: Roll fast and accurate!\n\n**Tips:**\n- This game can trap someone for multiple rounds - be kind!\n- Keep extra beer ready for refills\n\n**Playtime:** 10-30 min | **Difficulty:** Easy",
    materials: ["dice", "cups"],
    min_players: 3,
    max_players: null,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
  {
    id: "seed-38",
    slug: "titanic",
    name: "Titanic",
    description:
      "Titanic is a tension-filled game where players carefully 'load' a floating shot glass with liquor until it sinks. Sink the ship and you drink the whole mix - beer AND shot together!",
    rules_text:
      "**Setup:**\n- Fill a pint glass (or large cup) with beer\n- Float an empty shot glass in the beer so it barely stays afloat\n- Have liquor ready for pouring\n\n**Gameplay:**\n- Players take turns pouring a small amount of liquor into the floating shot glass\n- Pour as little as you dare - even a single drop counts!\n- The shot glass will slowly sink lower as it fills\n\n**The Sink:**\n- Keep going until the shot glass SINKS\n- The player whose pour causes it to sink must drink the ENTIRE container\n- That means the beer AND whatever's in the shot glass - together!\n\n**Strategy:**\n- Pour slowly and from a low height\n- Cold beer = less foam = more predictable sinking\n- Watch the water line carefully\n- Psychological warfare: pour confidently to make the next player nervous\n\n**Tips:**\n- Use a clear glass so everyone can see the tension build\n- The anticipation is half the fun!\n- Refill and play again immediately\n\n**Variations:**\n- Use different liquors for different rounds\n- Increase stakes: loser also takes an extra shot\n\n**Playtime:** 5-15 min | **Difficulty:** Easy",
    materials: ["cups", "shot glass"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-39",
    slug: "landmines",
    name: "Landmines",
    description:
      "Landmines is a skill-heavy coin-spin challenge where you must drink and grab a spinning coin before it stops - while other players sabotage you with 'landmines' (empty cans) on the table!",
    rules_text:
      "**Setup:**\n- Clear the table\n- Everyone needs a beer (cans work best)\n- Get a quarter or coin for spinning\n- Optionally: two shot glasses per player\n\n**Your Turn:**\n- Choose a starting player, go clockwise\n- On your turn, spin the coin on the table\n- While it's spinning, you must:\n  1. Drink (finish your beer or take shots)\n  2. Pick up the spinning coin with the SAME HAND before it stops\n\n**Failure:**\n- If the coin stops spinning before you grab it\n- If you knock something over\n- If you fail to pick it up cleanly\n- YOU MUST RESTART YOUR TURN and try again!\n\n**Creating Landmines:**\n- When you finish a beer can, it becomes a 'landmine'\n- During OTHER players' turns, you can SLAM your empty can onto their spinning coin to stop it\n- The can stays on the table as a permanent obstacle!\n\n**Landmine Effects:**\n- If your spinning coin hits a landmine = restart your turn\n- As the game progresses, the table gets more cluttered and harder to navigate\n\n**Optional Rules:**\n- After repeated fails, you may 'buy out' by chugging a full drink to end your turn\n- 3 failed attempts in a row = take a penalty shot\n\n**Tips:**\n- Spin with confidence - a strong spin gives you more time\n- Position yourself strategically around existing landmines\n- Best played with 4-6 players\n\n**Playtime:** 10-25 min | **Difficulty:** Hard",
    materials: ["coins", "cups"],
    min_players: 2,
    max_players: 8,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
];

// Convert to full Game objects with timestamps
export const games: Game[] = initialGames.map((game) => ({
  ...game,
  created_at: new Date().toISOString(),
  is_user_submitted: false,
}));

// Helper to get game by slug
export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find((game) => game.slug === slug);
};

// Get all unique materials across all games
export const getAllMaterials = (): string[] => {
  const materialsSet = new Set<string>();
  games.forEach((game) => {
    game.materials.forEach((material) => {
      materialsSet.add(material);
    });
  });
  return Array.from(materialsSet).sort();
};
