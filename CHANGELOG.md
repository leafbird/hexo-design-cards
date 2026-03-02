# Changelog

## [0.1.5] - 2026-03-02

### Fixed
- Banner: added `id` attribute to `<h2>` for TOC anchor navigation (NExT theme TOC click-to-scroll now works)

## [0.1.4] - 2026-03-02

### Fixed
- Compare: recommended option background color was identical to first normal option (both used c3). Reordered normal option color sequence from [c3,c2,c1,c4] to [c4,c2,c1,c3] so they are visually distinct.

## [0.1.3] - 2026-03-02

### Fixed
- `recommended` option in compare tag had thinner border (2px) than normal options (3px) — fixed to 4px

## [0.1.0] - 2026-03-01

### Added
- 8 tag plugins: `banner`, `cards`, `accents`, `compare`, `alert`, `quotes`, `minicards`, `flow`
- 5 colorways: deep-sea, olive-garden, fiery-ocean, rustic-earth, sunny-beach
- Per-post colorway override via front matter
- Optional font size parameter for cards, accents, compare, alert
- CSS auto-injection via `after_render:html` filter
- Responsive layout (single-column on mobile)
- Markdown rendering inside card/accent/compare/alert/mini content
