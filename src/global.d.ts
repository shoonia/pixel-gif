declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hex-color-picker': {
        ref?: (node: import('vanilla-colorful').HexColorPicker) => void;
        class?: string;
      }
    }
  }
}

export {};
