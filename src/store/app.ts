import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';

export const app: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    return {
      r: 0,
      g: 0,
      b: 0,
      radix: 10
    };
  });
}
