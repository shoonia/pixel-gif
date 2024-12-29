export interface State {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly radix: number;
  readonly hex: string;
  readonly bytes: readonly number[];
  readonly base64: string;
  readonly data: string;
  readonly toast: boolean;
  readonly history: string[]
}

export type TParam = keyof Pick<State, 'r' | 'g' | 'b'>;

export interface Events {
  rgb: readonly [param: TParam, value: number];
  hex: string;
  history: string;
}
