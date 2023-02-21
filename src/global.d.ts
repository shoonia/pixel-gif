declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hex-color-picker': Partial<import('vanilla-colorful').HexColorPicker>
    }
  }
}

export {};
