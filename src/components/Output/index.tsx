import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { connect, setState } from '../../store';
import { getBytesArray } from '../../util';

export const Output: FC = () => {
  const view = useRef<HTMLDivElement>();
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();
  const size = getBytesArray(0, 0, 0).length;

  let timeout: number;

  const changeRadix = (node: HTMLSelectElement) => {
    node.addEventListener('change', () => {
      setState({ radix: ~~node.value });
    });
  };

  connect('hex', 'radix', ({ hex, r, g, b, radix }) => {
    const hex6 = '#' + hex;
    const bytes = getBytesArray(r, g, b);
    const base64 = btoa(String.fromCharCode.apply(null, bytes));
    const data = 'data:image/gif;base64,' + base64;
    const url = `url(${data})`;

    view.current.style.backgroundImage = url;
    dataUrl.current.value = data;
    dataBase64.current.value = base64;
    dataBytes.current.value = bytes.map((i) => i.toString(radix)).join(' ');
    dataLink.current.value = 'https://shoonia.github.io/pixel-gif/' + hex6;

    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + url;

      document.title = '1x1 Pixel GIF | ' + hex6;
      location.hash = hex6;
      console.log('%c  ', css, hex6);
    }, 300);
  });

  return (
    <>
      <div ref={view} class={s.view}>
        <span class={s.size}>
          {`1x1 (${size} bytes)`}
        </span>
      </div>
      <fieldset class={s.box}>
        <TextInput ref={dataUrl} label="Data URL:" />
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
    </>
  );
};
