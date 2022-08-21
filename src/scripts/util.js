const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1, e2, e3) =>
  keys.charAt(e1 >> 2) +
  keys.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keys.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keys.charAt(e3 & 63);

export const createPixel = (r, g, b) =>
  'data:image/gif;base64,R0lGODlhAQABAPAA' +
  triplet(0, r, g) +
  triplet(b, 255, 255) +
  '/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

export const parseNumber = (n) => {
  const i = Math.abs(~~n);

  return i > 255 ? 255 : i;
};

export const decimalToHex = (i) => {
  const hex = i.toString(16);

  return hex.length < 2 ? '0' + hex : hex;
};

export const random16 = (size) => {
  let id = '';

  while (0 < size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};
