import rgbHex from 'rgb-hex';

import { connect, setState, dispatch } from './store';
import { createPixel, decimalToHex, parseNumber, random16 } from './util';
import colors from './colors.json';

const SYMBOL_HASH = /^#/;
const NOT_HEXADECIMAL = /[^\da-f]/ig;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hex = $('#hex');
const rNumber = $('#r-number');
const rRange = $('#r-range');
const gNumber = $('#g-number');
const gRange = $('#g-range');
const bNumber = $('#b-number');
const bRange = $('#b-range');

const parseHex = (value) => {
  let color = value
    .trim()
    .toLowerCase()
    .replace(SYMBOL_HASH, '');

  if (color in colors) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    try {
      color = rgbHex(value);
    } catch {
      return [false];
    }
  }

  if (color.length === 3) {
    color += color;
  }

  return [true, color];
};

function changeRgb() {
  setState({
    [this.dataset.rgb]: parseNumber(this.valueAsNumber),
  });
}

const createOptionList = () => {
  const list = new DocumentFragment();
  const option = document.createElement('option');

  for (let key in colors) {
    const item = option.cloneNode();

    item.value = colors[key];
    item.textContent = key;
    list.append(item);
  }

  return list;
};

$$('[data-rgb]').forEach((input) =>
  input.addEventListener('input', changeRgb),
);

$('#colorList').append(createOptionList(colors));

hex.addEventListener('change', () => {
  const [isValid, color] = parseHex(hex.value);

  if (isValid) {
    dispatch('hex', color);
  } else {
    hex.focus();
  }
});

{
  const [isValid, color] = parseHex(location.hash);
  const hexColor = isValid ? color : random16(6);

  history.pushState(1, null, `#${hexColor}`);
  dispatch('hex', hexColor);
}

connect('r', 'g', 'b', ({ r, g, b }) => {
  const color = [r, g, b].map(decimalToHex).join('');
  const dataURL = createPixel(r, g, b);

  const url = `url(${dataURL})`;
  const css = `display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:${url}`;

  console.log('%c  ', css, `#${color}`);
  hex.value = color;
  document.location.hash = color;
  document.body.style.backgroundImage = url;
  document.title = `1x1 Pixel GIF | ${color}`;
});

connect('r', ({ r }) => {
  rNumber.value = r;
  rRange.value = r;
});

connect('g', ({ g }) => {
  gNumber.value = g;
  gRange.value = g;
});

connect('b', ({ b }) => {
  bNumber.value = b;
  bRange.value = b;
});
