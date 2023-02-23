export type TParam = 'r' | 'g' | 'b';

export interface State {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly radix: number;
  readonly hex: string;
}

export interface Events {
  'set/rgb': [param: TParam, value: number];
  'set/hex': string;
}
