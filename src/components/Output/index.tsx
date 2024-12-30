import { useRef, useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';
import { createFavicon } from './createFavicon';

export const Output: JSX.FC = () => {
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')!;
  const [color, setColor] = useText('');

  let timeout: ReturnType<typeof setTimeout>;

  const viewRef: JSX.Ref<HTMLElement> = (view) =>
    connect('color', ({ color, url }) => {
      const cssUrl = `url(${url})`;

      setColor(color);
      view.style.backgroundImage = cssUrl;
      dataUrl.current.value = url;
      dataLink.current.value = process.env.HOMEPAGE + color;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + cssUrl;

        favicon.href = createFavicon(color);
        location.hash = color;
        console.log('%c  ', css, color);
      }, 300);
    });

  const bytesRef: JSX.Ref<HTMLInputElement> = (node) =>
    connect('bytes', 'radix', ({ bytes, radix }) => {
      node.value = bytes.map((i) => i.toString(radix)).join(' ');
    });

  const base64Ref: JSX.Ref<HTMLInputElement> = (node) =>
    connect('base64', ({ base64 }) => {
      node.value = base64;
    });

  return (
    <>
      <div ref={viewRef} class={s.view}>
        <code class={s.color}>
          {color}
        </code>
        <code class={s.size}>
          1x1 (35 bytes)
        </code>
      </div>
      <fieldset class={s.box}>
        <TextInput ref={dataUrl} label="Data URL:" />
        <TextInput ref={base64Ref} label="Base64:" />
        <div class={s.bytes}>
          <TextInput ref={bytesRef} label="Bytes:" />
          <RadixSelect />
        </div>
        <TextInput ref={dataLink} label="Share Link:" />
      </fieldset>
    </>
  );
};
