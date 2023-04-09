import { useRef, useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';
import { getBase64, getBytesArray, getDataUrl } from '../../util';
import { createFavicon } from './createFavicon';

export const Output: FC = () => {
  const view = useRef<HTMLDivElement>();
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  const size = getBytesArray(0, 0, 0).length;
  const [color, setColor] = useText('#000000');

  let timeout: number;

  connect('hex', 'radix', ({ hex, bytes, radix }) => {
    const hex6 = '#' + hex;
    const base64 = getBase64(bytes);
    const data = getDataUrl(base64);
    const url = `url(${data})`;

    setColor(hex6);
    view.current.style.backgroundImage = url;
    dataUrl.current.value = data;
    dataBase64.current.value = base64;
    dataBytes.current.value = bytes.map((i) => i.toString(radix)).join(' ');
    dataLink.current.value = process.env.HOMEPAGE + hex6;

    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + url;

      favicon.href = createFavicon(hex6);
      document.title = '1x1 Pixel GIF | ' + hex6;
      location.hash = hex6;
      console.log('%c  ', css, hex6);
    }, 300);
  });

  return (
    <>
      <div ref={view} class={s.view}>
        <code class={s.color}>
          {color}
        </code>
        <code class={s.size}>
          {`1x1 (${size} bytes)`}
        </code>
      </div>
      <fieldset class={s.box}>
        <TextInput ref={dataUrl} label="Data URL:" />
        <TextInput ref={dataBase64} label="Base64:" />
        <div class={s.bytes}>
          <TextInput ref={dataBytes} label="Bytes:" />
          <RadixSelect />
        </div>
        <TextInput ref={dataLink} label="Share Link:" />
      </fieldset>
    </>
  );
};
