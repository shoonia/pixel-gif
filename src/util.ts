import type { TParam } from './store/types';

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
