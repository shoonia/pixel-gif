import type T from './colors.json';

export type TColors = Readonly<typeof T>;

export const colors = JSON.parse(
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  document.getElementById('colors').textContent,
) as TColors;

export const isColorsKey = (key: string): key is keyof TColors => {
  return key in colors;
};
