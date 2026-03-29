/**
 * readwhitepaper-embed -- TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for ReadWhitepaper */
      'readwhitepaper'?: 'entity' | 'glossary' | 'guide' | 'search';
      /** Entity slug (e.g. "bitcoin", "proof-of-work") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      styleVariant?: 'modern' | 'minimal';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
      /** Disable rich snippet injection */
      noSnippet?: string;
    };
  }
}
