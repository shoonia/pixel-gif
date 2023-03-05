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

  type FC<T = Record<string, unknown>> = import('jsx-dom-runtime').FC<T>;
}

export {};
