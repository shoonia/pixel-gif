import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { getDiff } from './helpers';
import { createHex, getBytesArray } from '../util';

export const app: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    return {
      r: 0,
      g: 0,
      b: 0,
      radix: 16,
      hex: '000000',
      bytes: getBytesArray(0, 0, 0),
      toast: false,
    };
  });

  store.on('rgb', (state, [key, value]) => {
    const v = ~~value;
    const i = v < 0 ? 0 : v > 255 ? 255 : v;

    const { r, g, b }: Readonly<State> = {
      ...state,
      [key]: i,
    };

    return {
      [key]: i,
      hex: createHex([r, g, b]),
      bytes: getBytesArray(r, g, b),
    };
  });

  store.on('hex', (state, hex) => {
    const i = parseInt(hex, 16);

    const r = i >> 16 & 255;
    const g = i >> 8 & 255;
    const b = i & 255;

    return getDiff(
      state,
      { r, g, b },
      { hex, bytes: getBytesArray(r, g, b) },
    );
  });
};
