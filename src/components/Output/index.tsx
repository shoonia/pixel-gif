import  { type FC, useRef } from 'jsx-dom-runtime';

import * as s from './styles.module.css';
import { TextInput } from './TextInput';
import { connect, setState } from '../../store';
import { createBytesString, createDataUrl, createHex } from '../../util';
import { createFavicon } from './createFavicon';

export const Output: FC = () => {
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();
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
    const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + url;

    dataUrl.current.value = dataURL;
    dataBase64.current.value = dataURL.slice(22);
    dataLink.current.value = 'https://shoonia.github.io/pixel-gif/' + hex;
    dataBytes.current.value = createBytesString(r, g, b, radix);
    document.body.style.backgroundImage = url;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.title = '1x1 Pixel GIF | ' + hex;
      location.hash = hex;
      favicon.href = createFavicon(hex) ||'';
      console.log('%c  ', css, hex);
    }, 300);
  });

  return (
    <fieldset>
      <legend>
        Output
      </legend>
      <TextInput ref={dataUrl} label="Data: URL" />
      <TextInput ref={dataBase64} label="Base64:" />
      <div class={s.bytes}>
        <TextInput ref={dataBytes} label="Bytes:" />
        <select ref={changeRadix} class={s.radix}>
          <option value="16">16</option>
          <option value="10">10</option>
          <option value="8">8</option>
          <option value="2">2</option>
        </select>
      </div>
      <TextInput ref={dataLink} label="Share Link:" />
    </fieldset>
  );
};
