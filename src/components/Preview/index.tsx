import { signal, type CSSProperties } from 'jsx-dom-runtime';
import { connect } from '../../store';
import { createFavicon } from './createFavicon';
import s from './styles.css';

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')!;
const colorText = signal();
const bgColor = signal<CSSProperties>();

let timeout: NodeJS.Timeout;

export const Preview: JSX.FC = () => {
  connect('color', ({ color }) => {
    colorText.set(color);
    bgColor.set({ backgroundColor: color });

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-color:' + color;

      favicon.href = createFavicon(color);
      location.hash = color;
      console.log('%c  ', css, color);
    }, 300);
  });

  return (
    <div style={bgColor} class={s.view} role="img" aria-label="Color preview">
      <output class={s.color} aria-label="Current color code">
        {colorText}
      </output>
      <output class={s.size} aria-label="GIF file size">
        1x1 (35 bytes)
      </output>
    </div>
  );
};
