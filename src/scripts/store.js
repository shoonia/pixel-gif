import { createStoreon } from 'storeon';
import { storeonConnect } from 'storeon-connect';

const app = (store) => {
  store.on('@init', () => {
    return {
      r: 255,
      g: 255,
      b: 255,
    };
  });

  store.on('hex', (_, color) => {
    const i = parseInt(color, 16);

    return {
      r: i >> 16 & 255,
      g: i >> 8 & 255,
      b: i & 255,
    };
  });
};

const store = createStoreon([app]);

export const { setState, dispatch, connect } = storeonConnect(store);
