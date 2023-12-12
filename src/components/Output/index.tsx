import { useRef, useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';
import { getBase64, getDataUrl } from '../../util';
import { createFavicon } from './createFavicon';

export const Output: JSX.FC = () => {
  const view = useRef<HTMLDivElement>();
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')!;
  const [color, setColor] = useText('#000000');

  let timeout: ReturnType<typeof setTimeout>;

  connect('hex', ({ hex, bytes }) => {
    const hex6 = '#' + hex;
    const base64 = getBase64(bytes);
    const data = getDataUrl(base64);
    const url = `url(${data})`;

    setColor(hex6);
    view.current.style.backgroundImage = url;
    dataUrl.current.value = data;
    dataBase64.current.value = base64;
    dataLink.current.value = process.env.HOMEPAGE + hex6;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + url;

      favicon.href = createFavicon(hex6);
      location.hash = hex6;
      console.log('%c  ', css, hex6);
    }, 300);
  });

  connect('bytes', 'radix', ({ bytes, radix }) => {
    dataBytes.current.value = bytes.map((i) => i.toString(radix)).join(' ');
  });

  return (
    <>
      <div ref={view} class={s.view}>
        <code class={s.color}>
          {color}
        </code>
        <code class={s.size}>
          1x1 (43 bytes)
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
