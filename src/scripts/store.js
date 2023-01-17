import { hexToRgb, parseDecimal } from './util';

let state = {
  r: 0,
  g: 0,
  b: 0,
  radix: 16,
};

const subs = [];

const setState = (data) => {
  state = { ...state, ...data };

  subs.forEach((s) => {
    if (s.keys.length < 1 || s.keys.some((i) => i in data)) {
      s.cb(state);
    }
  });
};

export const getState = () => state;

export const setRgb = (key, value) =>
  setState({
    [key]: parseDecimal(value),
  });

export const setHex = (color) => setState(hexToRgb(color));

export const setRadix = (radix) => setState({ radix: ~~radix });

export const connect = (...keys) => {
  const cb = keys.pop();

  subs.push({ keys, cb });
};
