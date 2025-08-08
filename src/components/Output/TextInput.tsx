import s from './TextInput.css';
import { dispatch } from '../../store';

interface Props {
  label: string;
  name: string;
  ref: JSX.Ref<HTMLInputElement>;
}

const copy: JSX.EventListener<HTMLInputElement> = ({ currentTarget: el }) => {
  el.select();
  navigator.clipboard.writeText(el.value);
  dispatch('copy');
};

export const TextInput: JSX.FC<Props> = ({ label, name, ref }) =>
  <label>
    {label}
    <input
      ref={ref}
      name={name}
      on:click={copy}
      class={s.inp}
      type="text"
      spellcheck="false"
      readOnly
    />
  </label>;
