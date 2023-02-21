declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hex-color-picker': import('vanilla-colorful').HexBase & {
        ref?: import('vanilla-colorful').HexColorPicker;
      }
    }
  }
}

export {};
