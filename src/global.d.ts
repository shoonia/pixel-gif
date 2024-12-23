import type { HexBase } from 'vanilla-colorful/lib/entrypoints/hex';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-picker': JSX.HTMLAttributes<HexBase>;
    }
  }
}

export {};
