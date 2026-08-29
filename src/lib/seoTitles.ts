/**
 * Child metadata titles must omit the brand because the root layout appends
 * "| SipWiki" through its title template.
 */
export function getGameMetadataTitle(gameName: string): string {
  return `${gameName} Rules - How to Play`;
}