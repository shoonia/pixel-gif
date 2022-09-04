import colors from './colors.json';
import { connect, setRgb, setHex } from './store';
import { createPixel, decimalToHex, random16, rgbToHex } from './util';
import { $, $$, createOptionList, createFavicon } from './elements';
import { debounce } from './helpers';

const SYMBOL_HASH = /^#/;
const NOT_HEXADECIMAL = /[^\da-f]/ig;

const hex = $('#hex');
const rNumber = $('#r-number');
const rRange = $('#r-range');
const gNumber = $('#g-number');
const gRange = $('#g-range');
const bNumber = $('#b-number');
const bRange = $('#b-range');
const outputData = $('#output-data');
const outputCss = $('#output-css');
const outputLink = $('#output-link');
const picker = $('hex-color-picker');
const favicon = $('link[rel="icon"]');

const parseHex = (value) => {
  let color = value
    .trim()
    .toLowerCase()
    .replace(SYMBOL_HASH, '');

  if (color in colors) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    color = rgbToHex(color);
  }

  if (color.length === 3) {
    color += color;
  }

  if (color.length !== 6) {
    return [false];
  }

  return [true, color];
};

function changeRgb() {
  setRgb(this.dataset.rgb, this.valueAsNumber);
}

const changeHex = () => {
  const [isValid, color] = parseHex(hex.value);

  if (isValid) {
    setHex(color);
  } else {
    hex.focus();
  }
};

$$('[data-rgb]').forEach((input) =>
  input.addEventListener('input', changeRgb),
);

$('#colorList').append(createOptionList(colors));

$('#random').addEventListener('click', () => {
  setHex(random16(6));
});

hex.addEventListener('change', changeHex);

hex.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    changeHex();
  }
});

picker.addEventListener('color-changed', (event) => {
  setHex(event.detail.value.slice(1));
});

const updateHead = debounce((hex) => {
  document.title = '1x1 Pixel GIF | ' + hex;
  location.hash = hex;
  favicon.href = createFavicon(hex);
}, 500);

connect('r', 'g', 'b', ({ r, g, b }) => {
  const color = [r, g, b].map(decimalToHex).join('');
  const dataURL = createPixel(r, g, b);

  const withHash = '#' + color;
  const url = `url(${dataURL})`;
  const background = `background-image: ${url};`;
  const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;' + background;

  console.log('%c  ', css, withHash);
  hex.value = color;
  outputData.value = dataURL;
  outputCss.value = background;
  outputLink.value = new URL(withHash, location.href).href;
  document.body.style.backgroundImage = url;
  picker.color = color;
  updateHead(withHash);
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

{
  const [isValid, color] = parseHex(location.hash);
  const hexColor = isValid ? color : random16(6);

  history.pushState(1, null, '#' + hexColor);
  setHex(hexColor);
}
