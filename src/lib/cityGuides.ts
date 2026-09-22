/** Thin "game in {city}" doorway URLs. */
const CITY_GUIDE = /^\/guides\/[a-z0-9-]+-in-[a-z0-9-]+$/;

export function isThinCityGuidePath(pathname: string): boolean {
  return CITY_GUIDE.test(pathname);
}

export function isThinCityGuideSlug(slug: string): boolean {
  return isThinCityGuidePath(`/guides/${slug}`);
}
