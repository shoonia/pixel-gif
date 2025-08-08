import s from './styles.css';
import { connect } from '../../store';

export const PixelPNG: JSX.FC = () => {
  const ready: JSX.Ref<HTMLAnchorElement> = (a) =>
    connect('hex', (state) => {
      a.hash = state.hex + 'ff';
    });

  return (
    <a
      ref={ready}
      href="https://shoonia.github.io/1x1/"
      class={s.link}
      aria-label="Generate 1x1 pixel PNG image"
    >
      1x1 Pixel PNG
    </a>
  );
};
