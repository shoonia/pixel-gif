import colors from './colors.json';
import { connect, getState, setRgb, setHex, setRadix } from './store';
import { createDataUrl, randomHex, rgbToHex, createHex, createBytesString } from './util';
import { $, $$, createOptionList, createFavicon } from './elements';
import { createName, isSupportFilePicker, saveGif } from './filePicker';
import { debounce } from './helpers';

const SYMBOL_HASH = /^#/;
const NOT_HEXADECIMAL = /[^\da-f]/g;

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
const outputBytes = $('#output-bytes');
const selectRadix = $('#radix');
const picker = $('hex-color-picker');
const favicon = $('link[rel="icon"]');
const download = $('#download');

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

$('#random').addEventListener('click',
  () => setHex(randomHex(6)),
);

hex.addEventListener('change', changeHex);

hex.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    changeHex();
  }
});

picker.addEventListener('color-changed',
  (event) => setHex(event.detail.value.slice(1)),
);

selectRadix.addEventListener('change',
  () => setRadix(selectRadix.value),
);

if (isSupportFilePicker) {
  download.addEventListener('click', async (event) => {
    event.preventDefault();
    await saveGif(getState());
  });
}

const updateHead = debounce((hex) => {
  document.title = '1x1 Pixel GIF | ' + hex;
  location.hash = hex;
  favicon.href = createFavicon(hex);
}, 500);

connect(({ r, g, b, radix }) => {
  const color = createHex(r, g, b);
  const dataURL = createDataUrl(r, g, b);

  const withHash = '#' + color;
  const url = `url(${dataURL})`;
  const background = `background-image: ${url};`;
  const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;' + background;

  if (!isSupportFilePicker) {
    download.download = createName(color);
    download.href = dataURL;
  }

  console.log('%c  ', css, withHash);
  hex.value = color;
  outputData.value = dataURL;
  outputCss.value = background;
  outputLink.value = 'https://shoonia.github.io/pixel-gif/' + withHash;
  outputBytes.value = createBytesString(r, g, b, radix);
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

connect('radix', ({ radix }) => {
  selectRadix.value = radix;
});

{
  const [isValid, color] = parseHex(location.hash);
  const hexColor = isValid ? color : randomHex(6);

  history.pushState(1, null, '#' + hexColor);
  setHex(hexColor);
}
