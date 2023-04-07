export interface State {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly radix: number;
  readonly hex: string;
  readonly bytes: number[];
}

export type TParam = keyof Pick<State, 'r' | 'g' | 'b'>;

export interface Events {
  'rgb': [param: TParam, value: number];
  'hex': string;
}
