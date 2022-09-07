export const getBytesArray = (r, g, b) => [71, 73, 70, 56, 57, 97, 1, 0, 1, 0, 128, 0, 0, r, g, b, 0, 0, 0, 33, 249, 4, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 2, 68, 1, 0, 59];

export const createDataUrl = (r, g, b) =>
  'data:image/gif;base64,' + btoa(
    String.fromCharCode.apply(null, getBytesArray(r, g, b)),
  );

export const createBytesString = (r, g, b, radix) =>
  getBytesArray(r, g, b).map((i) => i.toString(radix)).join(' ');

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

export const randomHex = (size) => {
  let hex = '';

  while (size--) {
    hex += (16 * Math.random() | 0).toString(16);
  }

  return hex;
};

export const createHex = (...rgb) =>
  rgb.map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');

export const rgbToHex = (color) => {
  const [r, g, b] = color.match(/(0?\.?\d{1,3})%?\b/g) || [];
  const rgb = [r, g, b].map(Number);

  if (rgb.every((i) => typeof i === 'number' && i >= 0 && i <= 255)) {
    return createHex(r, g, b);
  }

  return '';
};
