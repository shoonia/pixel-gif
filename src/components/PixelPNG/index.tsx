import s from './styles.css';
import { connect } from '../../store';

const url = new URL('https://shoonia.github.io/1x1/');

export const PixelPNG: JSX.FC = () => {
  const ready = (a: HTMLAnchorElement) => {
    connect('hex', (state) => {
      url.hash = state.hex + 'ff';
      a.href = url.href;
    });
  };

  return (
    <a
      ref={ready}
      href={url.href}
      class={s.link}
      aria-label="One pixel Base64 encoded transparent PNG generator"
    >
      1x1 Pixel PNG
    </a>
  );
};
