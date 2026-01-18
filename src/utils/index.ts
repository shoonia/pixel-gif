import colors from './colors.json';

export type TColors = Readonly<typeof colors>;

export const isColorsKey = (key: string): key is keyof TColors => {
  return key in colors;
};

export { colors };
