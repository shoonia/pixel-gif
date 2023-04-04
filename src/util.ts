import { colors, isColorsKey } from './utils';

export const createHex = (r: number, g: number, b: number): string => {
  return [r, g, b].map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');
};

export const rgbToHex = (color: string): string => {
  const [r, g, b] = color.match(/(0?\.?\d+)%?\b/g) || [];
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

  if (isColorsKey(color)) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    color = rgbToHex(color);
  }

  switch (color.length) {
    case 6: {
      return color;
    }
    case 3: {
      return color.split('').map((i) => i + i).join('');
    }
  }
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
];

export const getBase64 = (bytes: number[]) => btoa(String.fromCharCode.apply(null, bytes));

export const getDataUrl = (base64: string) => 'data:image/gif;base64,' + base64;
