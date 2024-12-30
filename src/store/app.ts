import type { StoreonModule } from 'storeon-velo';

import type { Events, Rgb, State } from './types';
import { getDiff } from './helpers';
import { createHex, getBase64, getBytesArray, getDataUrl } from '../util';
import { getHistory, HISTORY_LENGTH, saveHistory } from './storage';

const calc = (hex: string, rgb: Rgb): Partial<State> => {
  const bytes = getBytesArray(rgb);
  const base64 = getBase64(bytes);

  return {
    hex,
    bytes,
    base64,
    url: getDataUrl(base64),
  };
};

export const app: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    const rgb: Rgb = { r: 0, g: 0, b: 0 };

    return {
      radix: 16,
      toast: false,
      history: getHistory(),
      ...rgb,
      ...calc('', rgb),
    };
  });

  store.on('history', ({ history }, hex) => {
    if (history.every((i) => i !== hex)) {
      const newHistory = [hex].concat(history.slice(0, HISTORY_LENGTH - 1));

      saveHistory(newHistory);

      return { history: newHistory };
    }
  });

  store.on('rgb', ({ r, g, b }, [key, value]) => {
    const v = value | 0;
    const i = v < 0 ? 0 : v > 255 ? 255 : v;
    const rgb: Rgb = { r, g, b, [key]: i };
    const hex = createHex([rgb.r, rgb.g, rgb.b]);

    store.dispatch('history', hex);

    return {
      [key]: i,
      ...calc(hex, rgb),
    };
  });

  store.on('hex', (state, hex) => {
    const i = parseInt(hex, 16);
    const rgb: Rgb = {
      r: i >> 16 & 255,
      g: i >> 8 & 255,
      b: i & 255,
    };

    store.dispatch('history', hex);

    return getDiff(
      state,
      rgb,
      calc(hex, rgb),
    );
  });
};
