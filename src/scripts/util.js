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

export const parseDecimal = (n) => {
  const i = Math.abs(~~n);

  return i > 255 ? 255 : i;
};

export const hexToRgb = (hex) => {
  const i = parseInt(hex, 16);

  return {
    r: i >> 16 & 255,
    g: i >> 8 & 255,
    b: i & 255,
  };
};

export const decimalToHex = (i) => {
  const hex = i.toString(16);

  return hex.length < 2 ? '0' + hex : hex;
};

export const randomHex = (size) => {
  let id = '';

  while (size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};

export const rgbToHex = (color) => {
  const [r, g, b] = color.match(/(0?\.?\d{1,3})%?\b/g) || [];
  const rgb = [r, g, b].map(Number);

  if (rgb.every((i) => typeof i === 'number' && i >= 0 && i <= 255)) {
    return rgb.map(decimalToHex).join('');
  }

  return '';
};
