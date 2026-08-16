import { signal } from 'jsx-dom-runtime';
import s from './styles.css';
import { connect } from '../../store';

export const PixelPNG: JSX.FC = () => {
  const hash = signal();

  connect('hex', (state) =>
    hash.set(state.hex + 'ff'),
  );

  return (
    <a
      href="https://shoonia.github.io/1x1/"
      prop:hash={hash}
      class={s.link}
      aria-label="Generate 1x1 pixel PNG image"
    >
      1x1 Pixel PNG
    </a>
  );
};
