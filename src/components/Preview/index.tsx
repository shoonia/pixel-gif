import { useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { createFavicon } from './createFavicon';
import { connect } from '../../store';

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')!;
const [color, setColor] = useText('');

let timeout: ReturnType<typeof setTimeout>;

export const Preview: JSX.FC = () => {
  const ready: JSX.Ref<HTMLElement> = (node) =>
    connect('color', ({ color }) => {
      setColor(color);
      node.style.backgroundColor = color;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-color:' + color;

        favicon.href = createFavicon(color);
        location.hash = color;
        console.log('%c  ', css, color);
      }, 300);
    });

  return (
    <div ref={ready} class={s.view} role="img" aria-label="Color preview">
      <output class={s.color} aria-label="Current color code">
        {color}
      </output>
      <output class={s.size} aria-label="GIF file size">
        1x1 (35 bytes)
      </output>
    </div>
  );
};
