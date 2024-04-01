import s from './styles.css';
import { connect } from '../../store';

const url = 'https://shoonia.github.io/1x1/#';

export const PixelPNG: JSX.FC = () => {
  const ready: JSX.Ref<HTMLAnchorElement> = (a) =>
    connect('hex', (state) => {
      a.href = url + state.hex + 'ff';
    });

  return (
    <a
      ref={ready}
      href={url}
      class={s.link}
      aria-label="One pixel Base64 encoded transparent PNG generator"
    >
      1x1 Pixel PNG
    </a>
  );
};
