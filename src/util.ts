import type { TParam } from './store/types';

export const colors: Record<string, string> = JSON.parse(
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  document.getElementById('colors').textContent,
);

export const createHex = ({ r, g, b }: Record<TParam, number>): string =>
  [r, g, b].map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');

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
  const rgb = [r, g, b].map((i) => Number(i));

  if (rgb.every((i) => i >= 0 && i <= 255)) {
    return createHex({ r: rgb[0], g: rgb[1], b: rgb[2] });
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
