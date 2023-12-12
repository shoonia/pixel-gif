import type { GenericEventHandler, RefObject } from 'jsx-dom-runtime';

import s from './TextInput.css';
import { setState } from '../../store';

interface Props {
  label: string;
  ref: RefObject<HTMLInputElement>;
}

const copy: GenericEventHandler<HTMLInputElement> = ({ currentTarget: el }) => {
  el.select();
  navigator.clipboard.writeText(el.value);
  setState({ toast: true });
};

export const TextInput: JSX.FC<Props> = ({ label, ref }) =>  (
  <label>
    {label}
    <input
      ref={ref}
      onclick={copy}
      class={s.inp}
      type="text"
      spellcheck="false"
      readOnly
    />
  </label>
);
