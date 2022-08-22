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
  [key]: parseFloat(value),
});

export const setHex = (color) => {
  const i = parseInt(color, 16);

  setState({
    r: i >> 16 & 255,
    g: i >> 8 & 255,
    b: i & 255,
  });
};

export const connect = (...keys) => {
  const cb = keys.pop();

  subs.push({ keys, cb });
};
