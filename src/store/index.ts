import { createStoreon } from 'storeon-velo';

import type { State, Events } from './types';
import { app } from './app';

export { HISTORY_LENGTH } from './storage';

export const { readyStore, connect, dispatch, getState, setState } = createStoreon<State, Events>([
  app,
]);
