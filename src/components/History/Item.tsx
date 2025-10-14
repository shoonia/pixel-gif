import s from './styles.css';

interface Props {
  hex: `#${string}`;
}

export const Item: JSX.FC<Props> = ({ hex }) =>
  <li class={s.item}>
    <a
      class={s.link}
      href={hex}
      aria-label={`Select ${hex} color`}
    >
      <span
        role="img"
        class={s.preview}
        style={{ backgroundColor: hex }}
        aria-label="Color preview"
      />
    </a>
  </li>;
