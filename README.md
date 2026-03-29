# readwhitepaper-embed

[![npm](https://img.shields.io/npm/v/readwhitepaper-embed)](https://www.npmjs.com/package/readwhitepaper-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/readwhitepaper-embed)

Embed **ReadWhitepaper** widgets on any website. Display blockchain whitepaper cards, glossary terms, guides, and search on your blog, documentation, or wiki. **4 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, minimal), and live data from [readwhitepaper.com](https://readwhitepaper.com).

ReadWhitepaper is a blockchain whitepaper database featuring 30 whitepapers (Bitcoin, Ethereum, Solana, Cardano, Polkadot, and more), 163 glossary terms covering blockchain fundamentals, DeFi protocols, consensus mechanisms, and cryptographic primitives, all available in 15 languages.

Every widget includes a "Powered by ReadWhitepaper" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.readwhitepaper.com](https://widget.readwhitepaper.com)**

## Table of Contents

- [Quick Start](#quick-start)
- [Widget Types](#widget-types)
- [Widget Options](#widget-options)
- [Themes](#themes)
- [Styles](#styles)
- [Web Components](#web-components-custom-elements)
- [Examples](#examples)
- [CDN Options](#cdn-options)
- [What You Can Embed](#what-you-can-embed)
- [Technical Details](#technical-details)
- [Learn More About Blockchain Whitepapers](#learn-more-about-blockchain-whitepapers)
- [License](#license)

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-readwhitepaper="entity" data-slug="bitcoin" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the ReadWhitepaper API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-readwhitepaper="entity" data-slug="..."></div>` | Whitepaper card — title, authors, year, category, abstract excerpt |
| `glossary` | `<div data-readwhitepaper="glossary" data-slug="..."></div>` | Blockchain glossary term with cross-references |
| `guide` | `<div data-readwhitepaper="guide" data-slug="..."></div>` | Guide summary card with description |
| `search` | `<div data-readwhitepaper="search" data-slug="..."></div>` | Search box linking to the full whitepaper database |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-readwhitepaper` | entity, glossary, guide, search | required | Widget type |
| `data-slug` | e.g. "bitcoin", "proof-of-work" | -- | Entity or term slug from ReadWhitepaper |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | modern, minimal | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget max-width (280/420/720px) |
| `data-placeholder` | any string | "Search Whitepapers..." | Search box placeholder text |
| `data-no-snippet` | true | -- | Disable DefinedTerm JSON-LD injection |

## Themes

```html
<!-- Light (default) — clean white background -->
<div data-readwhitepaper="entity" data-slug="bitcoin" data-theme="light"></div>

<!-- Dark — dark background for dark-mode sites -->
<div data-readwhitepaper="entity" data-slug="bitcoin" data-theme="dark"></div>

<!-- Sepia — warm paper-like tones -->
<div data-readwhitepaper="entity" data-slug="bitcoin" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference via matchMedia -->
<div data-readwhitepaper="entity" data-slug="bitcoin" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — gradient accent header, rounded corners, spacious -->
<div data-readwhitepaper="entity" data-slug="ethereum" data-styleVariant="modern"></div>

<!-- Minimal — monospace font, thin border, flat design for dev docs -->
<div data-readwhitepaper="entity" data-slug="ethereum" data-styleVariant="minimal"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, use native HTML custom elements:

```html
<readwhitepaper-entity slug="bitcoin" theme="dark"></readwhitepaper-entity>
<readwhitepaper-glossary slug="proof-of-work"></readwhitepaper-glossary>
<readwhitepaper-search placeholder="Search whitepapers..."></readwhitepaper-search>

<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Whitepaper Card

```html
<!-- Bitcoin whitepaper card with dark theme -->
<div data-readwhitepaper="entity" data-slug="bitcoin" data-theme="dark"></div>
<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1/dist/embed.min.js"></script>
```

### Blockchain Glossary Term

```html
<!-- Proof of Work definition with DefinedTerm JSON-LD injection -->
<div data-readwhitepaper="glossary" data-slug="proof-of-work" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-readwhitepaper="search" data-placeholder="Search blockchain whitepapers..."></div>
<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended)

```html
<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/readwhitepaper-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install readwhitepaper-embed
```

```javascript
import 'readwhitepaper-embed';
```

## What You Can Embed

### Blockchain Whitepapers

ReadWhitepaper hosts the foundational documents that define the blockchain ecosystem. Each whitepaper card displays the document title, authors, publication year, category, and an abstract excerpt:

- **Bitcoin** (2008) -- Satoshi Nakamoto's original peer-to-peer electronic cash system paper
- **Ethereum** (2013) -- Vitalik Buterin's proposal for a programmable blockchain with smart contracts
- **Solana** (2017) -- Proof of History consensus for high-throughput transactions
- **Cardano** (2017) -- Peer-reviewed, evidence-based blockchain platform
- **Polkadot** (2016) -- Heterogeneous multi-chain framework for cross-chain interoperability
- **Chainlink** (2017) -- Decentralized oracle network bridging on-chain and off-chain data

### Blockchain Glossary

163 terms covering the full spectrum of blockchain technology:

- **Consensus mechanisms**: Proof of Work, Proof of Stake, Delegated PoS, BFT
- **DeFi protocols**: AMM, liquidity pools, yield farming, flash loans, impermanent loss
- **Cryptographic primitives**: hash functions, Merkle trees, digital signatures, zero-knowledge proofs
- **Network architecture**: nodes, validators, sharding, layer 2, sidechains, rollups
- **Token standards**: ERC-20, ERC-721, ERC-1155, BEP-20

### Guides

In-depth guides explaining blockchain concepts, protocol comparisons, and technical deep dives.

## Technical Details

- **Shadow DOM**: Complete style isolation -- no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Minimal (monospace, flat design)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection with matchMedia listener)
- **CORS**: ReadWhitepaper API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs, React, Vue)
- **IntersectionObserver**: Lazy loading -- widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets (opt-out via data-no-snippet)
- **sessionStorage cache**: 5-minute TTL reduces API calls on page navigation

## Learn More About Blockchain Whitepapers

Visit [readwhitepaper.com](https://readwhitepaper.com) -- ReadWhitepaper is a comprehensive blockchain whitepaper database with full-text access, glossary, and multi-language translations.

- **All whitepapers**: [readwhitepaper.com](https://readwhitepaper.com)
- **Glossary**: [readwhitepaper.com/glossary/](https://readwhitepaper.com/glossary/)
- **API docs**: [readwhitepaper.com/developers/](https://readwhitepaper.com/developers/)
- **Widget builder**: [widget.readwhitepaper.com](https://widget.readwhitepaper.com)
- **npm package**: [npmjs.com/package/readwhitepaper-embed](https://www.npmjs.com/package/readwhitepaper-embed)
- **GitHub**: [github.com/dobestan/readwhitepaper-embed](https://github.com/dobestan/readwhitepaper-embed)

## License

MIT -- see [LICENSE](./LICENSE).

Built by [dobestan](https://github.com/dobestan).
