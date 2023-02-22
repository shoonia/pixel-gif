export const colors: Record<string, string> = JSON.parse(
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  document.getElementById('colors').textContent,
);

export const createHex = (r: number, g: number, b: number): string => {
  return [r, g, b].map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');
};

export const hexToRgb = (hex: string) => {
  const i = parseInt(hex, 16);

  return {
    r: i >> 16 & 255,
    g: i >> 8 & 255,
    b: i & 255,
  } as const;
};

export const rgbToHex = (color: string): string => {
  const [r, g, b] = color.match(/(0?\.?\d{1,3})%?\b/g) || [];
  const rgb = [Number(r), Number(g), Number(b)] as const;

  if (rgb.every((i) => i >= 0 && i <= 255)) {
    return createHex(...rgb);
  }

  return '';
};

const SYMBOL_HASH = /^#/;
const NOT_HEXADECIMAL = /[^\da-f]/g;

export const parseHex = (value: string) => {
  let color = value
    .trim()
    .toLowerCase()
    .replace(SYMBOL_HASH, '');

  if (color in colors) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    color = rgbToHex(color);
  }

  if (color.length === 3) {
    color += color;
  }

  if (color.length !== 6) {
    return [false] as const;
  }

  return [true, color] as const;
};

export const randomHex = (size: number): string => {
  let hex = '';

  while (size--) {
    hex += (16 * Math.random() | 0).toString(16);
  }

  return hex;
};

export const getBytesArray = (r: number, g: number, b: number) => [
  71, 73, 70, 56, 57, 97, 1, 0, 1, 0, 128, 0, 0,
  r, g, b,
  0, 0, 0, 33, 249, 4, 0, 0, 0, 0, 0, 44, 0, 0,
  0,0, 1,0, 1, 0, 0, 2, 2, 68, 1, 0, 59,
] as const;

export const createDataUrl = (r: number, g: number, b: number): string => {
  return 'data:image/gif;base64,' + btoa(
    String.fromCharCode(...getBytesArray(r, g, b)),
  );
};

export const createBytesString = (r: number, g: number, b: number, radix: number): string => {
  return getBytesArray(r, g, b).map((i) => i.toString(radix)).join(' ');
};
