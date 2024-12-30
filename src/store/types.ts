export interface Rgb {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface State extends Rgb {
  readonly radix: number;
  readonly hex: string;
  readonly bytes: readonly number[];
  readonly base64: string;
  readonly url: string;
  readonly toast: boolean;
  readonly history: string[];
}

export type TParam = keyof Rgb;

export interface Events {
  rgb: readonly [param: TParam, value: number];
  hex: string;
  history: string;
}
