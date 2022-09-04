import { hexToRgb, parseDecimal } from './util';

let state = {
  r: 0,
  g: 0,
  b: 0,
};

const subs = [];

const setState = (data) => {
  state = { ...state, ...data };

  subs.forEach((s) => {
    const changesInKeys = s.keys.some((i) => i in data);

    if (changesInKeys) {
      s.cb(state);
    }
  });
};

export const setRgb = (key, value) => setState({
  [key]: parseDecimal(value),
});

export const setHex = (color) => setState(hexToRgb(color));

export const connect = (...keys) => {
  const cb = keys.pop();

  subs.push({ keys, cb });
};
