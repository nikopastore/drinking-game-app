/**
 * Top US cities for programmatic SEO
 * Source: US Census data + college town rankings
 */

export interface City {
  name: string;
  state: string;
  stateAbbr: string;
  population: number;
  slug: string;
  collegeCity: boolean;
  timezone: string;
  description: string;
}

export const cities: City[] = [
  // Top 50 US cities by population + top college towns
  { name: "New York", state: "New York", stateAbbr: "NY", population: 8336817, slug: "new-york-ny", collegeCity: false, timezone: "EST", description: "The city that never sleeps" },
  { name: "Los Angeles", state: "California", stateAbbr: "CA", population: 3979576, slug: "los-angeles-ca", collegeCity: false, timezone: "PST", description: "City of Angels" },
  { name: "Chicago", state: "Illinois", stateAbbr: "IL", population: 2693976, slug: "chicago-il", collegeCity: false, timezone: "CST", description: "The Windy City" },
  { name: "Houston", state: "Texas", stateAbbr: "TX", population: 2320268, slug: "houston-tx", collegeCity: false, timezone: "CST", description: "Space City" },
  { name: "Phoenix", state: "Arizona", stateAbbr: "AZ", population: 1680992, slug: "phoenix-az", collegeCity: false, timezone: "MST", description: "Valley of the Sun" },
  { name: "Philadelphia", state: "Pennsylvania", stateAbbr: "PA", population: 1584064, slug: "philadelphia-pa", collegeCity: false, timezone: "EST", description: "City of Brotherly Love" },
  { name: "San Antonio", state: "Texas", stateAbbr: "TX", population: 1547253, slug: "san-antonio-tx", collegeCity: false, timezone: "CST", description: "Alamo City" },
  { name: "San Diego", state: "California", stateAbbr: "CA", population: 1423851, slug: "san-diego-ca", collegeCity: false, timezone: "PST", description: "America's Finest City" },
  { name: "Dallas", state: "Texas", stateAbbr: "TX", population: 1343573, slug: "dallas-tx", collegeCity: false, timezone: "CST", description: "Big D" },
  { name: "San Jose", state: "California", stateAbbr: "CA", population: 1021795, slug: "san-jose-ca", collegeCity: false, timezone: "PST", description: "Capital of Silicon Valley" },
  { name: "Austin", state: "Texas", stateAbbr: "TX", population: 978908, slug: "austin-tx", collegeCity: true, timezone: "CST", description: "Live Music Capital" },
  { name: "Jacksonville", state: "Florida", stateAbbr: "FL", population: 949611, slug: "jacksonville-fl", collegeCity: false, timezone: "EST", description: "River City" },
  { name: "Fort Worth", state: "Texas", stateAbbr: "TX", population: 918915, slug: "fort-worth-tx", collegeCity: false, timezone: "CST", description: "Cowtown" },
  { name: "Columbus", state: "Ohio", stateAbbr: "OH", population: 905748, slug: "columbus-oh", collegeCity: true, timezone: "EST", description: "The Discovery City" },
  { name: "Charlotte", state: "North Carolina", stateAbbr: "NC", population: 885708, slug: "charlotte-nc", collegeCity: false, timezone: "EST", description: "Queen City" },
  { name: "San Francisco", state: "California", stateAbbr: "CA", population: 873965, slug: "san-francisco-ca", collegeCity: false, timezone: "PST", description: "The Golden City" },
  { name: "Indianapolis", state: "Indiana", stateAbbr: "IN", population: 876384, slug: "indianapolis-in", collegeCity: false, timezone: "EST", description: "Circle City" },
  { name: "Seattle", state: "Washington", stateAbbr: "WA", population: 753675, slug: "seattle-wa", collegeCity: true, timezone: "PST", description: "Emerald City" },
  { name: "Denver", state: "Colorado", stateAbbr: "CO", population: 727211, slug: "denver-co", collegeCity: false, timezone: "MST", description: "Mile High City" },
  { name: "Boston", state: "Massachusetts", stateAbbr: "MA", population: 692600, slug: "boston-ma", collegeCity: true, timezone: "EST", description: "Beantown" },

  // Top college towns (high drinking game search volume)
  { name: "Madison", state: "Wisconsin", stateAbbr: "WI", population: 269840, slug: "madison-wi", collegeCity: true, timezone: "CST", description: "Home of UW-Madison" },
  { name: "Ann Arbor", state: "Michigan", stateAbbr: "MI", population: 123851, slug: "ann-arbor-mi", collegeCity: true, timezone: "EST", description: "Home of University of Michigan" },
  { name: "Boulder", state: "Colorado", stateAbbr: "CO", population: 108090, slug: "boulder-co", collegeCity: true, timezone: "MST", description: "Home of CU Boulder" },
  { name: "Gainesville", state: "Florida", stateAbbr: "FL", population: 141085, slug: "gainesville-fl", collegeCity: true, timezone: "EST", description: "Home of University of Florida" },
  { name: "Athens", state: "Georgia", stateAbbr: "GA", population: 127315, slug: "athens-ga", collegeCity: true, timezone: "EST", description: "Home of UGA" },
  { name: "Tuscaloosa", state: "Alabama", stateAbbr: "AL", population: 99600, slug: "tuscaloosa-al", collegeCity: true, timezone: "CST", description: "Home of University of Alabama" },
  { name: "State College", state: "Pennsylvania", stateAbbr: "PA", population: 42378, slug: "state-college-pa", collegeCity: true, timezone: "EST", description: "Home of Penn State" },
  { name: "Charlottesville", state: "Virginia", stateAbbr: "VA", population: 47217, slug: "charlottesville-va", collegeCity: true, timezone: "EST", description: "Home of UVA" },
  { name: "Eugene", state: "Oregon", stateAbbr: "OR", population: 176654, slug: "eugene-or", collegeCity: true, timezone: "PST", description: "Home of University of Oregon" },
  { name: "Iowa City", state: "Iowa", stateAbbr: "IA", population: 74828, slug: "iowa-city-ia", collegeCity: true, timezone: "CST", description: "Home of University of Iowa" },

  // More major cities
  { name: "Nashville", state: "Tennessee", stateAbbr: "TN", population: 689447, slug: "nashville-tn", collegeCity: false, timezone: "CST", description: "Music City" },
  { name: "Portland", state: "Oregon", stateAbbr: "OR", population: 652503, slug: "portland-or", collegeCity: false, timezone: "PST", description: "City of Roses" },
  { name: "Las Vegas", state: "Nevada", stateAbbr: "NV", population: 641903, slug: "las-vegas-nv", collegeCity: false, timezone: "PST", description: "Sin City" },
  { name: "Miami", state: "Florida", stateAbbr: "FL", population: 442241, slug: "miami-fl", collegeCity: false, timezone: "EST", description: "Magic City" },
  { name: "Atlanta", state: "Georgia", stateAbbr: "GA", population: 498715, slug: "atlanta-ga", collegeCity: false, timezone: "EST", description: "The A" },
  { name: "New Orleans", state: "Louisiana", stateAbbr: "LA", population: 383997, slug: "new-orleans-la", collegeCity: false, timezone: "CST", description: "The Big Easy" },
  { name: "Raleigh", state: "North Carolina", stateAbbr: "NC", population: 474069, slug: "raleigh-nc", collegeCity: false, timezone: "EST", description: "City of Oaks" },
  { name: "Tampa", state: "Florida", stateAbbr: "FL", population: 384959, slug: "tampa-fl", collegeCity: false, timezone: "EST", description: "Cigar City" },
  { name: "Minneapolis", state: "Minnesota", stateAbbr: "MN", population: 429954, slug: "minneapolis-mn", collegeCity: false, timezone: "CST", description: "City of Lakes" },
  { name: "Detroit", state: "Michigan", stateAbbr: "MI", population: 639111, slug: "detroit-mi", collegeCity: false, timezone: "EST", description: "Motor City" },

  // Additional college towns (party reputation)
  { name: "Tempe", state: "Arizona", stateAbbr: "AZ", population: 195805, slug: "tempe-az", collegeCity: true, timezone: "MST", description: "Home of ASU" },
  { name: "Tallahassee", state: "Florida", stateAbbr: "FL", population: 196169, slug: "tallahassee-fl", collegeCity: true, timezone: "EST", description: "Home of FSU" },
  { name: "Chapel Hill", state: "North Carolina", stateAbbr: "NC", population: 61960, slug: "chapel-hill-nc", collegeCity: true, timezone: "EST", description: "Home of UNC" },
  { name: "Bloomington", state: "Indiana", stateAbbr: "IN", population: 85755, slug: "bloomington-in", collegeCity: true, timezone: "EST", description: "Home of IU" },
  { name: "College Station", state: "Texas", stateAbbr: "TX", population: 120511, slug: "college-station-tx", collegeCity: true, timezone: "CST", description: "Home of Texas A&M" },
  { name: "Urbana", state: "Illinois", stateAbbr: "IL", population: 42461, slug: "urbana-il", collegeCity: true, timezone: "CST", description: "Home of UIUC" },
  { name: "Columbia", state: "Missouri", stateAbbr: "MO", population: 126254, slug: "columbia-mo", collegeCity: true, timezone: "CST", description: "Home of Mizzou" },
  { name: "Berkeley", state: "California", stateAbbr: "CA", population: 124321, slug: "berkeley-ca", collegeCity: true, timezone: "PST", description: "Home of UC Berkeley" },
  { name: "Tucson", state: "Arizona", stateAbbr: "AZ", population: 542629, slug: "tucson-az", collegeCity: true, timezone: "MST", description: "Home of University of Arizona" },
  { name: "Lawrence", state: "Kansas", stateAbbr: "KS", population: 98193, slug: "lawrence-ks", collegeCity: true, timezone: "CST", description: "Home of KU" },
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getCitiesByState(stateAbbr: string): City[] {
  return cities.filter(city => city.stateAbbr === stateAbbr);
}

export function getCollegeCities(): City[] {
  return cities.filter(city => city.collegeCity);
}

export function getTopCitiesByPopulation(limit: number = 10): City[] {
  return [...cities].sort((a, b) => b.population - a.population).slice(0, limit);
}
