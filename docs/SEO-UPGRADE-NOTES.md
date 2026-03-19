# SipWiki SEO Upgrade Notes

## Data model updates (recommended)

The game pages now surface richer SEO and E-E-A-T signals. To keep this data accurate over time, consider storing these fields on `Game` records (some are already added as optional types):

- `updated_at` (string, ISO 8601): last content refresh date used for visible “Last updated” and JSON-LD `dateModified`.
- `difficulty` ("Easy" | "Medium" | "Hard"): displayed in Quick Facts. If omitted, SipWiki computes a fallback from `drunkenness_level`.
- `intensity` ("Low" | "Medium" | "High"): displayed in Quick Facts. If omitted, computed from `drunkenness_level`.
- `popularity` (string): a short, human-readable context sentence (e.g., “Classic party staple with broad name recognition.”). If omitted, SipWiki computes a fallback.
- `estimated_time_minutes` (`{ min: number; max?: number | null }`): used for Quick Facts game length. If omitted, SipWiki uses a default range based on `drunkenness_level`.

### Data quality guidance
- Prefer real publish/updated timestamps over build time defaults so search engines see stable dates.
- Keep `popularity` short (1 sentence) and descriptive, not numeric.
- Use `estimated_time_minutes` for seasonal or special formats that deviate from default ranges.

## Schema data

Game pages emit a combined JSON-LD graph with `Game` and `HowTo` entities, plus a dedicated FAQ schema. The schema relies on:
- `name`, `description`, `url`, `image`, `author`, `datePublished`, `dateModified`.
- HowTo `supply`, `tool`, and `step` data.

Ensure `image` values are absolute URLs in the data source when possible.
