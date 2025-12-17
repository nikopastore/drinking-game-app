import { Game } from "@/types";

export const initialGames: Omit<Game, "created_at" | "is_user_submitted">[] = [
  {
    id: "seed-1",
    slug: "kings-cup",
    name: "King's Cup",
    image: "/games/kings-cup-1.png",
    description:
      "The quintessential card drinking game. Pull a card, follow the rule, and pray you don't draw the 4th King.",
    rules_text:
      "1. Place a large cup (the King's Cup) in the center. Spread a deck of cards face down around it in a circle.\n2. Players take turns drawing a card.\n3. Each card has a specific rule (e.g., Ace: Everyone drinks, 2: You, 3: Me, 4: Whores (ladies), 5: Never have I ever, etc.).\n4. If you draw a King, pour some of your drink into the center cup.\n5. The person who draws the 4th King must chug the gross center cup mixture to end the game.",
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
      "The sport of kings. Throw ping pong balls into cups across a table. If you sink it, they drink it.",
    rules_text:
      "1. Set up 10 cups in a pyramid on each side of a table.\n2. Fill cups about 1/4 full with beer (or water if sanitary).\n3. Teams take turns throwing ping pong balls into the opponent's cups.\n4. If a ball lands in a cup, the opponent must drink that cup and remove it from the table.\n5. First team to eliminate all opposing cups wins.\n6. **Bounce Rule:** If you bounce the ball in, it counts as 2 cups, but the opponent can swat it away.",
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
      "A card game of pure luck and pyramid schemes. Great for getting one person incredibly drunk.",
    rules_text:
      "1. **Round 1:** Guess Red or Black. (Wrong? Drink).\n2. **Round 2:** Higher or Lower than first card. (Wrong? Drink).\n3. **Round 3:** Inside or Outside the spread of first two cards. (Wrong? Drink).\n4. **Round 4:** Guess the Suit. (Wrong? Drink).\n5. **The Pyramid:** Build a pyramid of cards face down. Reveal them row by row. If a player holds a matching card, they can assign drinks. \n6. The player with the most cards left 'Rides the Bus'—a brutal final round of flipping cards until they win.",
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
    name: "Flip Cup",
    image: "/games/flip-cup-1.png",
    description:
      "Fast-paced team relay race. Chug your beer, flip your cup, next person goes.",
    rules_text:
      "1. Teams stand on opposite sides of a table.\n2. Everyone has a cup with a set amount of beer.\n3. The first players chug their drink, place the cup on the edge of the table, and attempt to flip it upside down using their finger.\n4. Once the cup lands upside down, the next teammate can start chugging.\n5. First team to finish wins.",
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
      "An intense, high-energy bouncing game involving stacking cups and chasing your neighbors.",
    rules_text:
      "1. A cluster of cups is in the center, filled with beer. One 'Bitch Cup' in the middle is full.\n2. Two players on opposite sides start with an empty cup and a ping pong ball.\n3. They try to bounce the ball into their cup. \n4. If they make it on the 1st try, they pass the cup to any player. If >1 try, pass to the right.\n5. If you bounce your ball into your cup while the person to your LEFT is still trying, you stack your cup onto theirs. \n6. They must now pass the stack and grab a new cup from the center to drink and bounce.\n7. Last cup (Bitch Cup) requires a chug.",
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
      "Commitment is key. You can't use your hands until you finish your drinks.",
    rules_text:
      "1. Duct tape a 40oz beer (or cider/malt liquor) to each of a player's hands.\n2. The player cannot have the tape removed (meaning they can't pee, check their phone, etc.) until both bottles are empty.\n3. Good luck.",
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
      "The classic icebreaker. Reveal your secrets and find out who your friends really are.",
    rules_text:
      "1. Players hold up 5 fingers (or just have a drink ready).\n2. One person says 'Never have I ever...' followed by something they haven't done.\n3. Anyone who HAS done that thing must drink (or put a finger down).\n4. The goal is to expose funny or embarrassing stories.",
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
    name: "Three Man",
    description: "A dice game where rolling a 3 makes you the target.",
    rules_text:
      "1. One player is designated the 'Three Man'.\n2. Players take turns rolling two dice.\n3. **3:** Three Man drinks.\n4. **7:** Person to right of roller drinks.\n5. **11:** Person to left of roller drinks.\n6. **Doubles:** Roller gives out dice amount in drinks.\n7. If you roll a 3 or a combination adding to 3, you become the new Three Man.",
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
      "A listening game set to the AC/DC song 'Thunderstruck'. Simple but deadly.",
    rules_text:
      "1. Stand in a circle with drinks ready.\n2. Play 'Thunderstruck' by AC/DC.\n3. The first person starts drinking when the word 'Thunder' is heard.\n4. They continue drinking until 'Thunder' is heard again, at which point the next person starts drinking.\n5. This continues around the circle. \n6. Watch out for the long guitar solos!",
    materials: ["music speaker"],
    min_players: 4,
    max_players: 10,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-10",
    slug: "quarters",
    name: "Quarters",
    description:
      "A game of skill. Bounce a quarter into a shot glass to make someone drink.",
    rules_text:
      "1. Players sit around a table with a shot glass in the middle.\n2. A player tries to bounce a quarter off the table and into the shot glass.\n3. If successful, they choose someone to drink and get to go again.\n4. If they miss, the quarter passes to the left.\n5. **Speed Rules:** Can be played with multiple quarters going around the circle.",
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
    description: "Don't make eye contact. A quick game for shots.",
    rules_text:
      "1. Everyone sits around a table looking down at their lap.\n2. On the count of 3, everyone looks up and stares at another player.\n3. If you are looking at someone who isn't looking at you, you're safe.\n4. If you make eye contact with someone, you both yell 'Medusa!' and take a shot.",
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
      "A test of endurance. One shot of beer every minute for an hour.",
    rules_text:
      "1. Create a music playlist where the song changes every 60 seconds.\n2. Every time the song changes, everyone takes a shot of beer.\n3. It sounds easy, but it equals about 7.5 beers in one hour.\n4. **Centurion:** Try to go for 100 minutes (100 shots).",
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
      "Level up your wizardry by consuming cans. The drunker you get, the more powerful you become.",
    rules_text:
      "1. Drink a can of beer.\n2. Tape your next can on top of the old one.\n3. As the night goes on, your 'staff' gets longer.\n4. The person with the longest staff is the 'Wisest Wizard' and can make rules.\n5. You must defeat bosses (liquor shots) to level up.",
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
    description: "Beer Pong on steroids. Rapid fire, no turns.",
    rules_text:
      "1. Two teams of 3. Each player has 3 cups in front of them (9 cups per side).\n2. Everyone has a ping pong ball.\n3. Unlike Beer Pong, there are no turns. You shoot as soon as you get a ball.\n4. If your cup is hit, you must drink it and flip it before you can shoot again.\n5. Last team with cups remaining wins.",
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
      "A physics game. Blow cards off a deck without blowing the last one.",
    rules_text:
      "1. Place a full deck of cards on top of an empty bottle or cup.\n2. Players take turns trying to blow cards off the deck.\n3. You must blow at least one card off.\n4. If you blow the LAST card off (the King), you lose and must finish your drink.",
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
      "Classic Jenga, but every block has a rule written on it.",
    rules_text:
      "1. Write rules on Jenga blocks before playing (e.g., 'Take 2 sips', 'Give 2 sips', 'Remove an article of clothing').\n2. Play normal Jenga rules.\n3. When you pull a block, you must do what it says.\n4. Whoever knocks the tower over finishes their drink.",
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
      "A lifestyle game played throughout the entire party (or life).",
    rules_text:
      "1. This rule is always in effect once agreed upon.\n2. You must always drink with your NON-DOMINANT hand.\n3. If someone catches you drinking with your dominant hand and yells 'Buffalo!', you must chug your entire drink on the spot.\n4. Once you finish the chug, you can return to the game.",
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
      "A card guessing game where the dealer usually gets screwed.",
    rules_text:
      "1. One person is the Dealer with the deck.\n2. They ask the first player to guess the top card's value (2-Ace).\n3. Player guesses. Dealer says 'Higher' or 'Lower'.\n4. Player guesses again. \n5. If correct on 1st try: Dealer drinks 4. If correct on 2nd try: Dealer drinks 2.\n6. If wrong: Player drinks the difference between their guess and the actual card.\n7. Discard cards face up so odds change. After 3 wrong players in a row, pass the deck.",
    materials: ["cards"],
    min_players: 3,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 4,
    image: "/games/f-the-dealer-1.png",
  },
  {
    id: "seed-19",
    slug: "roxanne",
    name: "Roxanne",
    description:
      "Similar to Thunderstruck but with The Police's 'Roxanne'.",
    rules_text:
      "1. Divide group into two teams.\n2. Play 'Roxanne' by The Police.\n3. Team 1 drinks on 'Roxanne'.\n4. Team 2 drinks on 'Put on the red light'.\n5. The song is short but repetitive. Good luck.",
    materials: ["music speaker"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-20",
    slug: "movie-drinking-game",
    name: "Movie Drinking Game (Generic)",
    description: "Apply these rules to any movie you are watching.",
    rules_text:
      "1. Drink when a main character says their catchphrase.\n2. Drink when someone dies.\n3. Drink when there is a montage.\n4. Drink when a character drinks alcohol.\n5. Finish your drink if the villain reveals their evil plan.",
    materials: ["tv"],
    min_players: 1,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
  },
  {
    id: "seed-21",
    slug: "truth-or-drink",
    name: "Truth or Drink",
    description:
      "Answer the question honestly or take a drink. Secrets will be revealed.",
    rules_text:
      "1. Players take turns asking each other questions.\n2. The person asked must either answer truthfully or take a drink.\n3. Questions can range from mild to spicy depending on the group.\n4. **Pro tip:** Write questions on cards beforehand or use a question app.\n5. Popular categories: embarrassing moments, relationships, secrets, hypotheticals.",
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
      "Point at who's most likely to do something. Get pointed at? Drink up.",
    rules_text:
      "1. One person asks a 'Most Likely To' question (e.g., 'Who is most likely to get arrested?').\n2. On the count of 3, everyone points at whoever they think fits best.\n3. You drink once for each finger pointed at you.\n4. If it's a tie, both people drink.\n5. Rotate who asks the question.",
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
      "Choose between two terrible options. The minority drinks.",
    rules_text:
      "1. One person asks a 'Would You Rather' question with two options.\n2. Everyone votes by holding up 1 finger or 2 fingers.\n3. The group in the minority must drink.\n4. If it's a tie, everyone drinks.\n5. Make questions progressively more difficult or absurd.",
    materials: ["no prop"],
    min_players: 3,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 2,
  },
  {
    id: "seed-24",
    slug: "slap-cup",
    name: "Slap Cup",
    description:
      "Like Rage Cage but you can slap cups away. Fast, furious, and messy.",
    rules_text:
      "1. Fill cups with beer and place them in the center of the table.\n2. Two players start on opposite sides with empty cups and ping pong balls.\n3. Bounce the ball into your cup. If you make it on the first try, pass to anyone. Otherwise, pass right.\n4. If you make it while the person to your LEFT is still bouncing, SLAP their cup away.\n5. They grab a new cup from the center, drink it, and try again.\n6. Game ends when all center cups are gone.",
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
      "Bet on a suit and cheer your horse to victory. A drinking game with gambling vibes.",
    rules_text:
      "1. Remove the 4 Aces and line them up as 'horses'.\n2. Players bet drinks on which suit will win (e.g., 'I bet 3 drinks on Hearts').\n3. Lay out 8-10 cards face down as the 'track'.\n4. Flip track cards one at a time. The matching suit's Ace moves forward one space.\n5. First Ace to the end wins. Losers drink their bet. Winners assign their bet amount to others.\n6. **Side rule:** If a suit appears twice in a row, that horse moves back one.",
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
      "Pick up a paper bag with your teeth. No hands. Gets harder every round.",
    rules_text:
      "1. Place a paper bag on the floor.\n2. Players take turns trying to pick up the bag using ONLY their mouth. No hands or knees touching the ground.\n3. If you fail, take a drink.\n4. After each round, tear or fold an inch off the top of the bag.\n5. As the bag gets shorter, it becomes nearly impossible.\n6. Last person standing wins.",
    materials: ["paper bag"],
    min_players: 2,
    max_players: null,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-27",
    slug: "chandelier",
    name: "Chandelier",
    description:
      "Beer pong meets flip cup. Sink the center cup and chaos ensues.",
    rules_text:
      "1. Each player has a cup with a little beer in front of them around a table.\n2. One cup in the CENTER is filled completely (the Chandelier).\n3. Players take turns bouncing a ping pong ball. If you hit someone's cup, they drink and refill.\n4. If you hit the CENTER cup, everyone chugs their drink and races to flip their cup.\n5. Last person to flip drinks the center Chandelier cup.\n6. Refill and repeat.",
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
      "Four guesses, four chances to drink. Then build a pyramid of pain.",
    rules_text:
      "1. Deal 4 cards face down to each player.\n2. **Card 1:** Guess Red or Black. Wrong = 2 drinks.\n3. **Card 2:** Guess Higher or Lower than Card 1. Wrong = 4 drinks.\n4. **Card 3:** Guess Inside or Outside the first two. Wrong = 6 drinks.\n5. **Card 4:** Guess the Suit. Wrong = 8 drinks.\n6. **Pyramid Round:** Build a pyramid of cards. Flip one at a time. If you have a matching card, give out drinks based on the row (bottom = 1, top = 5).",
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
    name: "Cheers to the Governor",
    description:
      "Count to 21 as a group. Mess up and drink. Rules stack up fast.",
    rules_text:
      "1. Players count from 1 to 21 around the circle, one number per person.\n2. When someone says '21', everyone cheers 'To the Governor!' and drinks.\n3. That person makes a NEW RULE (e.g., '7 and 14 are swapped' or 'Say potato instead of 5').\n4. Restart counting. If anyone messes up a rule, they drink and you restart.\n5. Rules stack, making it increasingly chaotic.\n6. Common rules: swap numbers, say something silly, skip a person.",
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
      "Bluff your way through a pyramid of cards. Get caught lying? Drink double.",
    rules_text:
      "1. Build a pyramid of face-down cards: 5 on bottom, then 4, 3, 2, 1 on top.\n2. Deal remaining cards evenly to players.\n3. Flip pyramid cards one at a time, starting from the bottom row.\n4. If you HAVE a matching card (or bluff that you do), you can assign drinks: Row 1 = 1 drink, Row 2 = 2 drinks, etc.\n5. Anyone can call your bluff. If you were bluffing, YOU drink double. If you weren't, THEY drink double.\n6. Top of pyramid = 5 drinks (or 10 if caught bluffing).",
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
      "Bet on a suit and watch the aces race to the finish. Also known as Horse Race.",
    rules_text:
      "1. Remove the 4 Aces and line them up as 'horses' at the starting line.\n2. Lay out 7-8 cards face down in a line as the 'race track'.\n3. Players bet drinks (1-5) on which suit will win.\n4. Flip cards from the deck one at a time. The Ace matching that suit moves forward one space.\n5. First Ace to cross the finish line wins!\n6. Winners assign their bet amount to others. Losers drink their bet.\n7. **Stumble Rule:** When an Ace reaches a new track card, flip it. That suit's Ace moves back one space.",
    materials: ["cards"],
    min_players: 3,
    max_players: 10,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-32",
    slug: "around-the-world",
    name: "Around the World",
    description:
      "Four guesses, four cards. Make it around the world or drink trying.",
    rules_text:
      "1. **Card 1:** Guess Red or Black. Wrong = 1 drink.\n2. **Card 2:** Guess Higher or Lower than Card 1. Wrong = 2 drinks.\n3. **Card 3:** Guess In Between or Outside the first two cards. Wrong = 3 drinks.\n4. **Card 4:** Guess the Suit. Wrong = 4 drinks.\n5. Get all 4 right? You made it 'Around the World' and can assign 10 drinks!\n6. **Pyramid Round (optional):** Build a pyramid and match cards to give/take drinks based on row.",
    materials: ["cards"],
    min_players: 2,
    max_players: 10,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-33",
    slug: "chems",
    name: "Chems",
    description:
      "Collect four of a kind and signal your partner. A team-based card game of deception.",
    rules_text:
      "1. Split into teams of 2. Each team secretly decides on a signal (wink, scratch, tap, etc.).\n2. Deal 4 cards to each player. Place 4 cards face-up in the center.\n3. Players swap cards from their hand with center cards (discard first, then pick up).\n4. Goal: Collect 4 of the same rank (e.g., four 7s).\n5. When you have 4 of a kind, signal your partner.\n6. Partner calls 'CHEMS!' - if correct, opponents drink 10. If wrong, your team drinks 10.\n7. **Gotcha:** Call out an opponent you think has 4 of a kind. Correct = they drink 10. Wrong = you drink 10.",
    materials: ["cards"],
    min_players: 4,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 3,
  },
  {
    id: "seed-34",
    slug: "juggernaut",
    name: "Juggernaut",
    description:
      "An endurance card game. Keep flipping until you can't take anymore.",
    rules_text:
      "1. Place a full deck face down in the center.\n2. Players take turns flipping cards one at a time.\n3. Number cards (2-10): Drink that many sips.\n4. Face cards: Jack = 11 sips, Queen = 12 sips, King = 13 sips.\n5. Ace: You become the Juggernaut! Choose any player to drink 14 sips OR split among multiple players.\n6. **Survival Rule:** At any point, you can tap out and pass to the next player, but you must finish your current drink first.\n7. Last person standing wins.",
    materials: ["cards"],
    min_players: 2,
    max_players: 8,
    alcohol_type: "any",
    drunkenness_level: 5,
  },
  {
    id: "seed-35",
    slug: "vietnam-war",
    name: "Vietnam War",
    description:
      "Asymmetric beer pong warfare. America vs Vietnam in an unwinnable war.",
    rules_text:
      "1. **Setup:** USA arranges 10 cups in a triangle (normal beer pong, cups 1/4 full). Vietnam scatters 10 FULL cups anywhere on their half.\n2. Teams take turns throwing ping pong balls.\n3. **USA hits:** Vietnam drinks that full cup and removes it.\n4. **Vietnam hits:** USA drinks, refills, and puts the cup back (unlimited resources).\n5. Vietnam can reposition cups after every turn.\n6. **Game ends:** When USA 'pulls out' (quits) OR sinks all of Vietnam's cups.\n7. **Napalm (optional):** USA lands 2 in one round = Vietnam takes a shot.",
    materials: ["ping pong balls", "red solo cups", "table"],
    min_players: 4,
    max_players: 8,
    alcohol_type: "beer",
    drunkenness_level: 5,
  },
  {
    id: "seed-36",
    slug: "baseball",
    name: "Baseball",
    description:
      "Beer pong meets flip cup in this full-contact drinking sport.",
    rules_text:
      "1. **Setup:** 4 cups in a line per team (Single, Double, Triple, Home Run). 3 flip cups on the side for stealing.\n2. **Batting:** Throw the ball at the cups. Hit = that base hit. Miss 3 times = strikeout (out).\n3. When you hit a cup, defenders drink all cups from that one down.\n4. **Stealing:** Challenge the defender to flip cup. Win = advance a base. Lose = out.\n5. **Scoring:** Runners advance and score like real baseball.\n6. 3 outs = switch sides. Play 6-9 innings.\n7. **Home Run Cup:** Should have the most beer!",
    materials: ["ping pong balls", "red solo cups", "table"],
    min_players: 8,
    max_players: 16,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
  {
    id: "seed-37",
    slug: "7-11-doubles",
    name: "7-11-Doubles",
    description:
      "Roll dice while someone chugs. Race against the roll.",
    rules_text:
      "1. Fill a cup 3/4 full and place it in the center.\n2. First player rolls two dice. Roll a 7, 11, or doubles = choose someone to drink.\n3. The chosen player grabs the cup and starts chugging.\n4. Roller can't touch dice until drinker touches the cup!\n5. Roller keeps rolling. If they hit 7, 11, or doubles before you finish = refill and drink again.\n6. Finish before they roll? Pass the dice left and refill the cup.\n7. **Penalty:** Touch dice before drinker touches cup = switch roles. Dice off table = you chug.",
    materials: ["dice", "cups"],
    min_players: 3,
    max_players: 10,
    alcohol_type: "beer",
    drunkenness_level: 4,
  },
  {
    id: "seed-38",
    slug: "titanic",
    name: "Titanic",
    description:
      "Float a shot glass in beer. Pour carefully or sink the ship and chug everything.",
    rules_text:
      "1. Fill a pint glass with beer until a shot glass floats in it.\n2. Players take turns pouring a small amount of liquor into the floating shot glass.\n3. Pour as little as you dare - even a single drop counts!\n4. The shot glass will slowly sink as it fills with liquor.\n5. The player who sinks the shot glass (the Titanic) must chug the entire pint - beer AND shot together.\n6. Refill and play again!\n7. **Pro tip:** Pour slowly and from a low height. Cold beer = less foam = more predictable sinking.",
    materials: ["shot glass", "pint glass", "beer", "liquor"],
    min_players: 2,
    max_players: 10,
    alcohol_type: "any",
    drunkenness_level: 4,
  },
  {
    id: "seed-39",
    slug: "landmines",
    name: "Landmines",
    description:
      "Spin a quarter, chug your beer, catch it. Empty cans become obstacles.",
    rules_text:
      "1. Clear the table. Everyone needs a beer.\n2. Spin a quarter with one hand. While it spins, chug beer with the SAME hand.\n3. Catch the quarter before it stops. If it falls or stops spinning = drink more and spin again.\n4. **Creating Landmines:** Finish a beer? Slam the empty can onto someone's spinning quarter. That can stays on the table forever.\n5. If your quarter hits a landmine (empty can), drink and spin again.\n6. You get 3 attempts per turn. Fail all 3 = eliminated.\n7. Table gets more cluttered as the game goes on. Last player standing wins!",
    materials: ["quarters", "beer cans"],
    min_players: 4,
    max_players: 10,
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
