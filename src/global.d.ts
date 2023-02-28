declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hex-color-picker': {
        ref?: (node: import('vanilla-colorful').HexColorPicker) => void;
        class?: string;
      }
    }
  }

  const process: {
    readonly env: {
      readonly NODE_ENV: string;
    };
  };
}

export {};
