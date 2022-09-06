const getBytesArray = (r, g, b) => [71, 73, 70, 56, 57, 97, 1, 0, 1, 0, 128, 0, 0, r, g, b, 0, 0, 0, 33, 249, 4, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 2, 68, 1, 0, 59];

export const createDataUrl = (r, g, b) => {
  const arr = getBytesArray(r, g, b);
  const str = String.fromCharCode.apply(null, arr);

  return 'data:image/gif;base64,' + btoa(str);
};

export const createBlob = (r, g, b) => {
  const arr = getBytesArray(r, g, b);
  const bytes = new Uint8Array(arr);

  return new Blob([bytes], { type: 'image/gif' });
};

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
  let id = '';

  while (size--) {
    id += (16 * Math.random() | 0).toString(16);
  }

  return id;
};

export const createHex = (...rgb) => {
  return rgb.map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');
};

export const rgbToHex = (color) => {
  const [r, g, b] = color.match(/(0?\.?\d{1,3})%?\b/g) || [];
  const rgb = [r, g, b].map(Number);

  if (rgb.every((i) => typeof i === 'number' && i >= 0 && i <= 255)) {
    return createHex(r, g, b);
  }

  return '';
};
