/* readwhitepaper-embed v1.0.0 | MIT | https://widget.readwhitepaper.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.readwhitepaper-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.readwhitepaper-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.readwhitepaper-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Image/preview area \u2014 for document icons, logos */
.readwhitepaper-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.readwhitepaper-img svg {
  width: 28px;
  height: 28px;
  color: rgba(255, 255, 255, 0.9);
}

/* Body area */
.readwhitepaper-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.readwhitepaper-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.readwhitepaper-row:last-child {
  border-bottom: none;
}

.readwhitepaper-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.readwhitepaper-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.readwhitepaper-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.readwhitepaper-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.readwhitepaper-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.readwhitepaper-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.readwhitepaper-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.readwhitepaper-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: key-value dotted rows
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.readwhitepaper-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.readwhitepaper-kv-row:last-child { border-bottom:none; }
.readwhitepaper-kv-label { font-size:11px; color:var(--muted); }
.readwhitepaper-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.readwhitepaper-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.readwhitepaper-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); text-decoration:none; }
.readwhitepaper-pill:hover { opacity:0.8; }

/* Card shared: section label */
.readwhitepaper-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.readwhitepaper-desc { padding:10px 18px; font-size:11px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.readwhitepaper-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.readwhitepaper-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.readwhitepaper-view-link a:hover { text-decoration:underline; }
.readwhitepaper-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card domain: whitepaper abstract
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-abstract {
  padding: 10px 18px;
  font-size: 12px;
  color: var(--text);
  line-height: 1.55;
  border-bottom: 1px solid var(--border);
}

/* Card domain: authors row */
.readwhitepaper-authors {
  padding: 8px 18px;
  font-size: 11px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}

.readwhitepaper-authors strong {
  color: var(--text);
  font-weight: 600;
}

/* Card domain: glossary summary block */
.readwhitepaper-summary {
  padding: 12px 18px;
  font-size: 12px;
  color: var(--text);
  line-height: 1.55;
  border-bottom: 1px solid var(--border);
}

/* Card domain: related terms in pills row */
.readwhitepaper-pills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px 18px;
  border-bottom: 1px solid var(--border);
}

/* Card domain: actions links */
.readwhitepaper-actions {
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid var(--border);
}
  `;
}

// src/styles/minimal.ts
function getMinimalCSS() {
  return `
/* Minimal: thin accent border, no gradient */
.readwhitepaper-widget {
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
}

/* Header \u2014 surface bg with thin accent top border */
.readwhitepaper-header {
  background: var(--surface);
  border-top: 2px solid var(--accent);
  padding: 8px 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.readwhitepaper-header-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 2px 0;
  line-height: 1.3;
  font-family: inherit;
}

.readwhitepaper-header-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* Image/preview area \u2014 compact */
.readwhitepaper-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: var(--badge-bg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--border);
}

.readwhitepaper-img svg {
  width: 18px;
  height: 18px;
  color: var(--muted);
}

/* Body area */
.readwhitepaper-body {
  padding: 8px 10px;
}

/* Key-value rows \u2014 compact */
.readwhitepaper-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px solid var(--border);
}

.readwhitepaper-row:last-child {
  border-bottom: none;
}

.readwhitepaper-label {
  font-size: 10px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.readwhitepaper-value {
  font-size: 11px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
  font-family: inherit;
}

/* Section title */
.readwhitepaper-section-title {
  font-size: 9px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px 0;
}

/* Tags \u2014 muted, minimal */
.readwhitepaper-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  margin: 1px 2px 1px 0;
}

/* Link */
.readwhitepaper-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.readwhitepaper-link:hover {
  text-decoration: underline;
}

.readwhitepaper-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

/* Footer link row */
.readwhitepaper-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-top: 1px solid var(--border);
  gap: 6px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal overrides for card shared components
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* KV rows: all monospace */
.readwhitepaper-kv-rows { padding:6px 10px; border-bottom:1px solid var(--border); }
.readwhitepaper-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px dotted var(--border); }
.readwhitepaper-kv-row:last-child { border-bottom:none; }
.readwhitepaper-kv-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }
.readwhitepaper-kv-value { font-size:10px; font-weight:600; color:var(--text); font-family:inherit; }

/* Pills: border outline only */
.readwhitepaper-pills { display:flex; flex-wrap:wrap; gap:3px; padding:6px 10px; border-bottom:1px solid var(--border); }
.readwhitepaper-pill { padding:1px 6px; border-radius:3px; font-size:10px; font-weight:500; background:transparent; border:1px solid var(--border); color:var(--muted); text-decoration:none; }
.readwhitepaper-pill:hover { color:var(--text); border-color:var(--accent); }

/* Section label */
.readwhitepaper-section-label { font-size:9px; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); font-weight:600; margin-bottom:3px; }

/* Description: compact */
.readwhitepaper-desc { padding:6px 10px; font-size:10px; color:var(--muted); line-height:1.4; border-bottom:1px solid var(--border); }

/* View link */
.readwhitepaper-view-link { display:block; text-align:left; padding:6px 10px; border-bottom:1px solid var(--border); }
.readwhitepaper-view-link a { color:var(--link); text-decoration:none; font-size:11px; font-weight:500; display:inline-flex; align-items:center; gap:3px; }
.readwhitepaper-view-link a:hover { text-decoration:underline; }
.readwhitepaper-view-link svg { width:10px; height:10px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal: domain-specific overrides
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Abstract */
.readwhitepaper-abstract {
  padding: 6px 10px;
  font-size: 10px;
  color: var(--text);
  line-height: 1.4;
  border-bottom: 1px solid var(--border);
}

/* Authors row */
.readwhitepaper-authors {
  padding: 4px 10px;
  font-size: 10px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}

.readwhitepaper-authors strong {
  color: var(--text);
  font-weight: 600;
  font-family: inherit;
}

/* Glossary summary */
.readwhitepaper-summary {
  padding: 6px 10px;
  font-size: 10px;
  color: var(--text);
  line-height: 1.4;
  border-bottom: 1px solid var(--border);
}

/* Related pills row */
.readwhitepaper-pills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 4px 10px;
  border-bottom: 1px solid var(--border);
}

/* Actions links */
.readwhitepaper-actions {
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-bottom: 1px solid var(--border);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal: copy button \u2014 inline symbol style
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-copy-btn {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  transition: color 0.1s, border-color 0.1s;
  font-family: inherit;
}

.readwhitepaper-copy-btn:hover {
  color: var(--text);
  border-color: var(--accent);
}

.readwhitepaper-copy-btn svg {
  width: 10px;
  height: 10px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "minimal":
      return getMinimalCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.readwhitepaper-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.readwhitepaper-widget[data-size="default"] {
  max-width: 420px;
}

.readwhitepaper-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.readwhitepaper-widget *, .readwhitepaper-widget *::before, .readwhitepaper-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.readwhitepaper-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: readwhitepaper-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes readwhitepaper-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.readwhitepaper-error p {
  margin: 0 0 8px 0;
}

.readwhitepaper-error a {
  color: var(--link);
  text-decoration: none;
}

.readwhitepaper-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-search-wrap {
  padding: 12px 16px;
}

.readwhitepaper-search-form {
  display: flex;
  gap: 8px;
}

.readwhitepaper-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.readwhitepaper-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.readwhitepaper-search-input::placeholder {
  color: var(--muted);
}

.readwhitepaper-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.readwhitepaper-search-btn:hover {
  opacity: 0.9;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.readwhitepaper-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.readwhitepaper-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button (base)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.readwhitepaper-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.readwhitepaper-copy-btn:hover {
  background: var(--copy-hover);
}

.readwhitepaper-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["readwhitepaper-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="readwhitepaper-loading">
      <span class="readwhitepaper-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="readwhitepaper-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var documentIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
function poweredByHTML(config) {
  return `<span class="readwhitepaper-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `readwhitepaper_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/widgets/entity.ts
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "readwhitepaper-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "readwhitepaper-entity-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `whitepapers/${slug}/`).then((data) => {
    renderEntity(container, data, config);
  }).catch(() => {
    renderError(
      container,
      `Unable to load whitepaper "${escapeHTML(slug)}". Please try again later.`,
      config
    );
  });
}
function renderEntity(container, data, config) {
  const paperUrl = data.url || `https://${config.domain}/whitepapers/${escapeHTML(data.slug)}/`;
  const category = data.category ? escapeHTML(data.category) : "";
  const authors = data.authors ? escapeHTML(data.authors) : "";
  const year = data.year ? String(data.year) : "";
  const subtitle = [category, year].filter(Boolean).join(" \xB7 ");
  let abstractExcerpt = "";
  if (data.abstract) {
    const raw = data.abstract;
    abstractExcerpt = raw.length > 150 ? escapeHTML(raw.slice(0, 147)) + "..." : escapeHTML(raw);
  }
  container.innerHTML = `
    <div class="readwhitepaper-header">
      <div class="readwhitepaper-img">${documentIcon}</div>
      <div>
        <p class="readwhitepaper-header-title">${escapeHTML(data.title)}</p>
        <p class="readwhitepaper-header-subtitle">${subtitle || "Whitepaper"}</p>
      </div>
    </div>

    ${authors ? `<div class="readwhitepaper-authors"><strong>Authors:</strong> ${authors}</div>` : ""}

    ${abstractExcerpt ? `<div class="readwhitepaper-abstract">${abstractExcerpt}</div>` : ""}

    ${category ? `<div class="readwhitepaper-pills"><span class="readwhitepaper-tag">${category}</span></div>` : ""}

    <div class="readwhitepaper-view-link">
      <a href="${escapeHTML(paperUrl)}" target="_blank" rel="noopener">
        Read full whitepaper on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-readwhitepaper-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-readwhitepaper-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function initGlossaryWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "readwhitepaper-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "readwhitepaper-glossary-widget");
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  fetchAPI(config.apiBase, `glossary/${slug}/`, params).then((data) => {
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectDefinedTerm(
        { name: data.name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML(slug)}". Please try again later.`,
      config
    );
  });
}
function renderGlossary(container, data, config) {
  const termUrl = `https://${config.domain}/glossary/${escapeHTML(data.slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const category = data.category ? escapeHTML(data.category) : "";
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="readwhitepaper-pill" href="https://${config.domain}/glossary/${escapeHTML(rt.slug)}/" target="_blank" rel="noopener">${escapeHTML(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="readwhitepaper-header">
      <div>
        <p class="readwhitepaper-header-title">${escapeHTML(data.name)}</p>
        <p class="readwhitepaper-header-subtitle">Glossary term${category ? ` \xB7 ${category}` : ""}</p>
      </div>
      ${category ? `<span class="readwhitepaper-badge">${category}</span>` : ""}
    </div>

    <div class="readwhitepaper-summary">
      ${escapeHTML(data.definition)}
    </div>

    ${relatedPills ? `<div class="readwhitepaper-pills-row">${relatedPills}</div>` : ""}

    <div class="readwhitepaper-actions">
      <a class="readwhitepaper-link" href="${termUrl}" target="_blank" rel="noopener">
        ${escapeHTML(data.name)} ${externalLinkIcon}
      </a>
      <a class="readwhitepaper-link" href="${glossaryUrl}" target="_blank" rel="noopener">
        Full glossary on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/guide.ts
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "readwhitepaper-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "readwhitepaper-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((data) => {
    renderGuide(container, data, config);
  }).catch(() => {
    renderError(
      container,
      `Unable to load guide "${escapeHTML(slug)}". Please try again later.`,
      config
    );
  });
}
function renderGuide(container, data, config) {
  const guideUrl = data.url || `https://${config.domain}/guides/${escapeHTML(data.slug)}/`;
  const guidesUrl = `https://${config.domain}/guides/`;
  const description = data.description ? escapeHTML(data.description) : "";
  container.innerHTML = `
    <div class="readwhitepaper-header">
      <div>
        <p class="readwhitepaper-header-title">${escapeHTML(data.title)}</p>
        <p class="readwhitepaper-header-subtitle">Guide</p>
      </div>
    </div>

    ${description ? `<div class="readwhitepaper-desc">${description}</div>` : ""}

    <div class="readwhitepaper-actions">
      <a class="readwhitepaper-link" href="${escapeHTML(guideUrl)}" target="_blank" rel="noopener">
        Read guide ${externalLinkIcon}
      </a>
      <a class="readwhitepaper-link" href="${escapeHTML(guidesUrl)}" target="_blank" rel="noopener">
        All guides on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/search.ts
function initSearchWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "readwhitepaper-search-widget");
  const placeholder = el.dataset.placeholder || `Search ${config.entityName}...`;
  container.innerHTML = `
    <div class="readwhitepaper-search-wrap">
      <form class="readwhitepaper-search-form" action="https://${escapeHTML(config.domain)}${escapeHTML(config.searchPath)}" method="get" target="_blank" rel="noopener">
        <input
          class="readwhitepaper-search-input"
          type="text"
          name="q"
          placeholder="${escapeHTML(placeholder)}"
          autocomplete="off"
          aria-label="Search ${escapeHTML(config.entityName)}"
        />
        <button class="readwhitepaper-search-btn" type="submit">Search</button>
      </form>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/_entry_readwhitepaper.ts
function initWidget(el, type, config) {
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const widgetType = el.dataset["readwhitepaper"];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"readwhitepaper","name":"ReadWhitepaper","domain":"readwhitepaper.com","accent":"#6366F1","attribute":"data-readwhitepaper","apiBase":"https://readwhitepaper.com/api/v1/","searchPath":"/search/","entityName":"Whitepapers","entitySlug":"whitepapers"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"readwhitepaper","name":"ReadWhitepaper","domain":"readwhitepaper.com","accent":"#6366F1","attribute":"data-readwhitepaper","apiBase":"https://readwhitepaper.com/api/v1/","searchPath":"/search/","entityName":"Whitepapers","entitySlug":"whitepapers"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"readwhitepaper","name":"ReadWhitepaper","domain":"readwhitepaper.com","accent":"#6366F1","attribute":"data-readwhitepaper","apiBase":"https://readwhitepaper.com/api/v1/","searchPath":"/search/","entityName":"Whitepapers","entitySlug":"whitepapers"}');
    }
    _syncDataAttrs() {
      this.dataset["readwhitepaper"] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.styleVariant = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const defs = [
    ["readwhitepaper-entity", initEntityWidget, ["slug"]],
    ["readwhitepaper-glossary", initGlossaryWidget, ["slug"]],
    ["readwhitepaper-guide", initGuideWidget, ["slug"]],
    ["readwhitepaper-search", initSearchWidget, ["placeholder"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.replace("readwhitepaper-", "");
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
