import  { type FC, useRef } from 'jsx-dom-runtime';

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

  const updateHead = (withHash: string): void => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.title = '1x1 Pixel GIF | ' + withHash;
      location.hash = withHash;
      favicon.href = createFavicon(withHash) ||'';
    }, 300);
  };

  connect('r', 'g', 'b', 'radix', ({ r, g, b, radix }) => {
    const color = createHex({r, g, b});
    const dataURL = createDataUrl(r, g, b);

    const withHash = '#' + color;
    const url = `url(${dataURL})`;
    const background = `background-image:${url};`;
    const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;' + background;

    console.log('%c  ', css, withHash);
    dataUrl.current.value = dataURL;
    dataCss.current.value = background;
    dataLink.current.value = 'https://shoonia.github.io/pixel-gif/' + withHash;
    dataBytes.current.value = createBytesString(r, g, b, radix);
    document.body.style.backgroundImage = url;
    updateHead(withHash);
  });

  return (
    <fieldset>
      <legend>
        Output
      </legend>
      <label>
        <input ref={dataUrl} type="text" readOnly spellcheck="false" />
      </label>
      <label>
        <input ref={dataCss} type="text" readOnly spellcheck="false" />
      </label>
      <div>
        <select ref={changeRadix}>
          <option value="16">16</option>
          <option value="10">10</option>
          <option value="8">8</option>
          <option value="2">2</option>
        </select>
        <label>
          <input ref={dataBytes} type="text" readOnly spellcheck="false" />
        </label>
      </div>
      <label>
        <input ref={dataLink} type="text" readOnly spellcheck="false" />
      </label>
    </fieldset>
  );
};
