import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { getDiff } from './helpers';
import { createHex } from '../util';

export const app: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    return {
      r: 0,
      g: 0,
      b: 0,
      radix: 16,
      hex: '000000',
    };
  });

  store.on('set/rgb', (state, [key, value]) => {
    const { r, g, b }: Readonly<State> = {
      ...state,
      [key]: value,
    };

    return {
      [key]: value,
      hex: createHex(r, g, b),
    };
  });

  store.on('set/hex', (state, hex) => {
    const i = parseInt(hex, 16);

    return getDiff(
      state,
      {
        r: i >> 16 & 255,
        g: i >> 8 & 255,
        b: i & 255,
        hex,
      },
    );
  });
};
