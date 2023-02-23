import  { type FC, useRef } from 'jsx-dom-runtime';

import * as s from './styles.module.css';
import { connect, setState } from '../../store';
import { createBytesString, createDataUrl, createHex } from '../../util';
import { createFavicon } from './createFavicon';

export const Output: FC = () => {
  const dataUrl = useRef<HTMLInputElement>();
  const dataCss = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

  const changeRadix = (node: HTMLSelectElement) => {
    node.addEventListener('change', () => {
      setState({ radix: ~~node.value });
    });
  };

  let timeout: number;

  connect('r', 'g', 'b', 'radix', ({ r, g, b, radix }) => {
    const dataURL = createDataUrl(r, g, b);
    const hex = '#' + createHex(r, g, b);

    const url = `url(${dataURL})`;
    const background = `background-image: ${url};`;
    const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;' + background;

    dataUrl.current.value = dataURL;
    dataCss.current.value = background;
    dataLink.current.value = 'https://shoonia.github.io/pixel-gif/' + hex;
    dataBytes.current.value = createBytesString(r, g, b, radix);
    document.body.style.backgroundImage = url;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.title = '1x1 Pixel GIF | ' + hex;
      history.pushState('', '', hex);
      favicon.href = createFavicon(hex) ||'';
      console.log('%c  ', css, hex);
    }, 300);
  });

  return (
    <fieldset>
      <legend>
        Output
      </legend>
      <label>
        <input ref={dataUrl} type="text" class={s.output} readOnly spellcheck="false" />
      </label>
      <label>
        <input ref={dataCss} type="text" class={s.output} readOnly spellcheck="false" />
      </label>
      <div class={s.bytes}>
        <select ref={changeRadix} class={s.radix}>
          <option value="16">16</option>
          <option value="10">10</option>
          <option value="8">8</option>
          <option value="2">2</option>
        </select>
        <label>
          <input ref={dataBytes} type="text" class={s.output} readOnly spellcheck="false" />
        </label>
      </div>
      <label>
        <input ref={dataLink} type="text" class={s.output} readOnly spellcheck="false" />
      </label>
    </fieldset>
  );
};
