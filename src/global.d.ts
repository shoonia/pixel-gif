import type { HexBase } from 'vanilla-colorful/lib/entrypoints/hex';
import type { HTMLAttributes } from 'jsx-dom-runtime';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-picker': HTMLAttributes<HexBase>;
    }
  }

  interface Window {
    dataLayer: unknown[];
  }
}

export {};
