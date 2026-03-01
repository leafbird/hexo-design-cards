# hexo-design-cards

Beautiful design card tags for [Hexo](https://hexo.io) — replace verbose inline HTML with clean tag syntax.

> Flow diagrams, header cards, accent cards, comparison cards, quotes, alerts, mini cards, and section banners with customizable colorways.

## Install

### From GitHub Packages

```bash
# Add to .npmrc in your Hexo project
echo "@leafbird:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> .npmrc

npm install @leafbird/hexo-design-cards
```

### From npm (coming soon)

```bash
npm install hexo-design-cards
```

## Quick Start

After installing, use tag syntax in your Hexo markdown files. No additional configuration needed — the plugin auto-injects CSS and uses the **Deep Sea** colorway by default.

## Tags

### Banner

Section divider with a bold colored bar.

```markdown
{% banner "Section 1: Getting Started" %}
```

### Cards

Grid of cards with colored headers. Great for comparing concepts side by side.

```markdown
{% cards 2 %}
{% card "Title A" %}
Description with **markdown** support.
`code snippets` work too.
{% endcard %}
{% card "Title B" %}
Another card's content.
{% endcard %}
{% endcards %}
```

- First argument: number of columns (1–4)
- Optional last argument: font size in px (e.g. `{% cards 2 15 %}`)

### Accent Cards

Cards with a colored left border. Perfect for highlighting key points.

```markdown
{% accents 2 %}
{% accent "Point 1" %}Description of the first point{% endaccent %}
{% accent "Point 2" %}Description of the second point{% endaccent %}
{% accent "Point 3" %}Third point here{% endaccent %}
{% accent "Point 4" %}Fourth point here{% endaccent %}
{% endaccents %}
```

- First argument: number of columns (1–4)
- Optional last argument: font size in px

### Compare

Side-by-side comparison of two options.

```markdown
{% compare %}
{% option "Option A" "🔧" %}
Description of option A.
{% endoption %}
{% option "Option B" "🚀" recommended %}
Description of option B.
This one is **recommended**.
{% endoption %}
{% endcompare %}
```

- Second argument (optional): emoji
- `recommended` flag: thicker border for emphasis
- Optional font size: `{% compare 15 %}`

### Alert

Info, warning, or tip box.

```markdown
{% alert info %}Title|Body text with **markdown**{% endalert %}
{% alert warning %}Warning title|Warning body{% endalert %}
{% alert tip %}Tip title|Tip body{% endalert %}
```

- Types: `info` (ℹ️), `warning` (⚠️), `tip` (💡)
- Use `|` to separate title and body (optional — omit for no title)
- Optional font size: `{% alert warning 17 %}`

### Quotes

A collection of styled quotes with colored left borders.

```markdown
{% quotes "Section Title" %}
{% dcquote "Source 1" %}Quote text here{% enddcquote %}
{% dcquote "Source 2" %}Another quote{% enddcquote %}
{% endquotes %}
```

### Mini Cards

Compact cards in a 3-column grid. Good for listing short items.

```markdown
{% minicards %}
{% mini "Item A" %}Short description{% endmini %}
{% mini "Item B" %}Short description{% endmini %}
{% mini "Item C" %}Short description{% endmini %}
{% endminicards %}
```

### Flow

Simple horizontal flow diagram with arrow connectors.

```markdown
{% flow "Step A|description" "*Step B|description" "Step C|description" %}
```

- `*` prefix: highlighted step (bold border)
- `|` inside quotes: separates title and description
- Trailing `|` after all steps: caption text

```markdown
{% flow "Request" "*Process" "Response" | Data flow overview %}
```

## Font Size Parameter

Most container tags accept an optional font size (in px) as the last numeric argument:

```markdown
{% cards 2 15 %}...{% endcards %}       → 2 columns, 15px body text
{% accents 2 14 %}...{% endaccents %}   → 2 columns, 14px body text
{% compare 16 %}...{% endcompare %}     → 16px body text
{% alert warning 17 %}...{% endalert %} → 17px body text
```

When omitted, the plugin's CSS defaults apply.

## Colorways

Five built-in color palettes. Each has 5 colors (C1–C5) from darkest to lightest.

| Colorway | Vibe |
|----------|------|
| `deep-sea` (default) | Calm blue-grey |
| `olive-garden` | Warm olive-gold |
| `fiery-ocean` | Bold red-blue contrast |
| `rustic-earth` | Natural earth tones |
| `sunny-beach` | Vivid orange-teal |

Color palettes from [Coolors.co](https://coolors.co).

### Global Setting

In your Hexo `_config.yml`:

```yaml
design_cards:
  colorway: deep-sea
```

### Per-Post Override

In a post's front matter:

```yaml
---
colorway: fiery-ocean
---
```

## Responsive

All grid layouts collapse to single-column on screens narrower than 768px. Flow diagrams switch to vertical layout.

## Screenshots

<!-- TODO: Add rendered screenshots here -->

## License

[MIT](LICENSE)
