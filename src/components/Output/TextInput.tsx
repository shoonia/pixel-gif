import s from './TextInput.css';
import { setState } from '../../store';

interface Props {
  label: string;
  ref: JSX.Ref<HTMLInputElement>;
}

const copy: JSX.EventListener<HTMLInputElement> = ({ currentTarget: el }) => {
  el.select();
  navigator.clipboard.writeText(el.value);
  setState({ toast: true });
};

export const TextInput: JSX.FC<Props> = ({ label, ref }) =>
  <label>
    {label}
    <input
      ref={ref}
      on:click={copy}
      class={s.inp}
      type="text"
      spellcheck="false"
      readOnly
    />
  </label>;
