import s from './styles.css';

interface Props {
  hex: `#${string}`;
}

export const Item: JSX.FC<Props> = ({ hex }) =>
  <li class={s.item} title={hex}>
    <a
      class={s.link}
      href={hex}
      style={{ backgroundColor: hex }}
      aria-label={`color ${hex}`}
    />
  </li>;
