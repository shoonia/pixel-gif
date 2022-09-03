const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (a, b, c) =>
  keys.charAt(a >> 2) +
  keys.charAt(((a & 3) << 4) | (b >> 4)) +
  keys.charAt(((b & 15) << 2) | (c >> 6)) +
  keys.charAt(c & 63);

export const createPixel = (r, g, b) =>
  'data:image/gif;base64,R0lGODlhAQABAPAA' +
  triplet(0, r, g) +
  triplet(b, 0, 0) +
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

  while (size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};
