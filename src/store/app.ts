import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { getDiff } from './helpers';
import { createHex, getBytesArray } from '../util';
import { getHistory, saveHistory } from './storage';

export const app: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    return {
      r: 0,
      g: 0,
      b: 0,
      radix: 16,
      hex: '',
      bytes: [],
      toast: false,
      history: getHistory(),
    };
  });

  store.on('history', ({ history }, hex) => {
    if (history.every((i) => i !== hex)) {
      const newHistory = [hex].concat(history.slice(0, 50));

      saveHistory(newHistory);

      return { history: newHistory };
    }
  });

  store.on('rgb', ({ r, g, b }, [key, value]) => {
    const v = value | 0;
    const i = v < 0 ? 0 : v > 255 ? 255 : v;
    const n = { r, g, b, [key]: i };
    const hex = createHex([n.r, n.g, n.b]);

    store.dispatch('history', hex);

    return {
      [key]: i,
      hex,
      bytes: getBytesArray(n.r, n.g, n.b),
    };
  });

  store.on('hex', (state, hex) => {
    const i = parseInt(hex, 16);

    const r = i >> 16 & 255;
    const g = i >> 8 & 255;
    const b = i & 255;

    store.dispatch('history', hex);

    return getDiff(
      state,
      { r, g, b },
      { hex, bytes: getBytesArray(r, g, b) },
    );
  });
};
