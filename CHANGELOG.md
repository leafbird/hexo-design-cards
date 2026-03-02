# Changelog

## [0.1.0] - 2026-03-01

### Added
- 8 tag plugins: `banner`, `cards`, `accents`, `compare`, `alert`, `quotes`, `minicards`, `flow`
- 5 colorways: deep-sea, olive-garden, fiery-ocean, rustic-earth, sunny-beach
- Per-post colorway override via front matter
- Optional font size parameter for cards, accents, compare, alert
- CSS auto-injection via `after_render:html` filter
- Responsive layout (single-column on mobile)
- Markdown rendering inside card/accent/compare/alert/mini content

## [0.1.2] - 2026-03-02

### Fixed
- `recommended` option in compare tag had thinner border (2px) than normal options (3px) — fixed to 4px
