import type { Rgb } from './store/types';
import { colors, isColorsKey } from './utils';

type TRGB = readonly [r: number, g: number, b: number];

export const createHex = (rgb: TRGB): string => {
  return rgb.map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');
};

export const rgbToHex = (color: string): string => {
  const [r, g, b] = color.match(/(0?\.?\d+)%?\b/g) || [];
  const rgb: TRGB = [Number(r), Number(g), Number(b)];

  if (rgb.every((i) => i >= 0 && i < 256)) {
    return createHex(rgb);
  }

  return '';
};

const SYMBOL_HASH = /^#/;
const NOT_HEXADECIMAL = /[^\da-f]/g;

export const getHex = (value: string) => {
  let color = value
    .trim()
    .replace(SYMBOL_HASH, '')
    .toLowerCase();

  if (isColorsKey(color)) {
    color = colors[color];
  } else if (NOT_HEXADECIMAL.test(color)) {
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

export const randomHex = () => crypto.randomUUID().slice(-6);

export const getBytesArray = (i: Rgb) => <const>[
  71, 73, 70, 56, 55, 97, 1, 0, 1, 0, 128, 1, 0, 0, 0, 0,
  i.r, i.g, i.b,
  44, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 2, 76, 1, 0, 59,
];
