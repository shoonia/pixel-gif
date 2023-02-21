import { createStoreon } from 'storeon-velo';

import type { State, Events } from './types'
import { app } from './app';

export const { readyStore, connect, dispatch, getState, setState } = createStoreon<State, Events>([
  app,
]);
