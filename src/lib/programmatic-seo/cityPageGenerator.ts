import { City } from "@/data/cities";
import { Game } from "@/types";

/**
 * Programmatic SEO Page Generator for City-Specific Game Pages
 *
 * Generates pages like:
 * - "/guides/beer-pong-in-austin-tx"
 * - "/guides/kings-cup-in-new-york-ny"
 * - "/guides/flip-cup-in-madison-wi"
 */

export interface CityPageData {
  game: Game;
  city: City;
  url: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  whereToPlay: string;
  localTips: string;
  conclusion: string;
}

/**
 * Generate city-specific content for a drinking game
 */
export function generateCityPageContent(game: Game, city: City): CityPageData {
  const gameName = game.name;
  const cityName = city.name;
  const stateAbbr = city.stateAbbr;

  // SEO-optimized title
  const title = `${gameName} in ${cityName}, ${stateAbbr}: Where to Play & Local Rules (2025)`;

  // Meta description (155-160 chars)
  const description = `Play ${gameName} in ${cityName}! Find the best bars, house party tips, local variations, and everything you need to know about ${gameName} in ${city.description}.`;

  // H1 heading
  const h1 = `${gameName} in ${cityName}, ${stateAbbr}: The Complete Local Guide`;

  // Introduction paragraph
  const intro = generateIntro(game, city);

  // Where to play section
  const whereToPlay = generateWhereToPlay(game, city);

  // Local tips
  const localTips = generateLocalTips(game, city);

  // Conclusion
  const conclusion = generateConclusion(game, city);

  return {
    game,
    city,
    url: `/guides/${game.slug}-in-${city.slug}`,
    title,
    description,
    h1,
    intro,
    whereToPlay,
    localTips,
    conclusion
  };
}

function generateIntro(game: Game, city: City): string {
  const isCollegeCity = city.collegeCity;
  const gameName = game.name;
  const cityName = city.name;
  const stateAbbr = city.stateAbbr;

  if (isCollegeCity) {
    return `Looking to play ${gameName} in ${cityName}? You're in one of the best party cities in ${stateAbbr}! ${city.description} has a thriving party scene where ${gameName} is a staple at college parties, bars, and house gatherings. Whether you're a student, recent grad, or just visiting, this guide covers everything you need to know about playing ${gameName} in ${cityName} - from the best venues to local rule variations that make the game uniquely ${cityName}.`;
  }

  return `${cityName}, ${stateAbbr} - ${city.description} - is home to an incredible party scene, and ${gameName} is one of the most popular drinking games played here. Whether you're at a downtown bar, a house party, or a rooftop gathering, you'll find ${gameName} tables and enthusiastic players throughout ${cityName}. This comprehensive guide covers where to play ${gameName} in ${cityName}, local variations, and tips from seasoned ${cityName} players.`;
}

function generateWhereToPlay(game: Game, city: City): string {
  const gameName = game.name;
  const cityName = city.name;
  const isCollegeCity = city.collegeCity;

  let venues = '';

  if (isCollegeCity) {
    venues = `### College Bars & Hangouts\n${cityName}'s college bar scene is legendary. Popular spots near campus often have ${gameName} nights with:
- Dedicated ${gameName} tables and equipment provided
- Student drink specials during game nights
- Tournament brackets with prizes
- Theme nights (80s music ${gameName}, costume ${gameName}, etc.)

### House Parties\nHouse parties are where ${gameName} really shines in ${cityName}. Most college houses have:
- Basement or garage ${gameName} setups
- Weekend tournaments
- Custom house rules that have evolved over years
- Legendary ${gameName} stories passed down through generations of students

### Campus Events\nDuring tailgates, spring fests, and other campus events, you'll find ${gameName} tables everywhere. These are great opportunities to:
- Meet new people who love the game
- Learn different rule variations
- Join impromptu tournaments
- Experience the community atmosphere`;
  } else {
    venues = `### Popular Bars & Venues\n${cityName} has numerous bars where ${gameName} is a regular feature:
- Sports bars with multiple ${gameName} tables
- Rooftop bars with outdoor ${gameName} setups
- Gastropubs with weekly ${gameName} leagues
- Dive bars with authentic, competitive atmospheres

### Private Parties & Events\nMany ${cityName} residents host ${gameName} parties at:
- Apartment complexes with common areas
- Private homes with dedicated game rooms
- Rooftop terraces (especially popular in summer)
- Warehouse party spaces

### Organized Leagues\nCheck out ${cityName}'s competitive ${gameName} scene:
- Bar leagues with season championships
- Corporate team-building events
- Charity tournament fundraisers
- Monthly meetups for enthusiasts`;
  }

  return venues;
}

function generateLocalTips(game: Game, city: City): string {
  const gameName = game.name;
  const cityName = city.name;
  const stateAbbr = city.stateAbbr;

  return `### ${cityName}-Specific Tips

**Weather Considerations:**
${getWeatherTip(city)}

**Transportation:**
${cityName} offers multiple options for safe travel after playing ${gameName}:
- Rideshare apps (Uber/Lyft are widely available)
- Public transportation (check ${cityName} transit schedules)
- Designated driver programs at many venues
- Walking distance options in dense neighborhoods

**Best Times to Play:**
- **Weekends:** Bars fill up 8pm-2am, arrive early for tables
- **Weekdays:** Happy hour specials often include ${gameName} deals
${city.collegeCity ? '- **College events:** Tailgates, spring fest, start of semester' : '- **Special events:** Check local event calendars for tournaments'}

**Local Etiquette:**
- Respect house rules - they vary by venue
- Clean up after yourself (${cityName} players take pride in their setups)
- Be friendly - ${cityName} has a welcoming ${gameName} community
- Tip your bartenders if playing at bars`;
}

function getWeatherTip(city: City): string {
  const cityName = city.name;

  // Climate-based tips
  if (['Phoenix', 'Tucson', 'Las Vegas', 'San Diego', 'Los Angeles', 'Miami', 'Tampa'].includes(city.name)) {
    return `${cityName}'s warm climate means year-round outdoor ${game.name} is possible. Bring sunscreen for daytime games and take advantage of rooftop venues.`;
  }

  if (['Seattle', 'Portland'].includes(city.name)) {
    return `${cityName}'s rainy weather means most ${game.name} happens indoors. Covered patios are popular during summer months.`;
  }

  if (['Chicago', 'Detroit', 'Minneapolis', 'Boston', 'Madison'].includes(city.name)) {
    return `${cityName}'s harsh winters push ${game.name} indoors Oct-April. Summer brings amazing outdoor beer garden setups.`;
  }

  return `${cityName} has seasonal variations - outdoor ${game.name} is popular in warm months, while bars and basements host games year-round.`;
}

function generateConclusion(game: Game, city: City): string {
  const gameName = game.name;
  const cityName = city.name;

  return `${cityName} offers an incredible ${gameName} scene whether you're a casual player or serious competitor. From ${city.collegeCity ? 'legendary college parties' : 'vibrant bar leagues'} to friendly house games, you'll find your people here. Remember to play responsibly, respect local customs, and most importantly - have fun! The ${cityName} ${gameName} community is welcoming, competitive, and always ready for another round.

Ready to master the game? Check out our complete [${gameName} rules guide](/guides/${game.slug}-rules) for detailed instructions, pro tips, and strategy guides.`;
}

/**
 * Generate metadata for city page
 */
export function generateCityPageMetadata(game: Game, city: City) {
  const data = generateCityPageContent(game, city);

  return {
    title: data.title,
    description: data.description,
    keywords: [
      `${game.name} ${city.name}`,
      `${game.name} in ${city.name}`,
      `where to play ${game.name} ${city.name}`,
      `${city.name} ${game.name} bars`,
      `${game.name} ${city.stateAbbr}`,
      `drinking games ${city.name}`,
      ...(city.collegeCity ? [`college ${game.name} ${city.name}`, `${city.name} party scene`] : [])
    ],
    openGraph: {
      title: `${game.name} in ${city.name}: Local Guide`,
      description: data.description,
      type: "article" as const,
      url: `https://sipwiki.app${data.url}`,
    },
    alternates: {
      canonical: `https://sipwiki.app${data.url}`,
    },
  };
}
