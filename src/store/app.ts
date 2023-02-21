import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { createHex, hexToRgb } from '../util';

export const app: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    return {
      r: 0,
      g: 0,
      b: 0,
      radix: 10,
      hex: '000000',
    };
  });

  store.on('set/rgb', (state, [param, value]) => {
    return {
      [param]: value,
      hex: createHex({ ...state, [param]: value }),
    };
  });

  store.on('set/hex', (_, hex) => {
    return {
      ...hexToRgb(hex),
      hex,
    };
  });
};
