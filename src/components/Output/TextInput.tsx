import type { FC } from 'jsx-dom-runtime';

import * as s from './TextInput.module.css';

interface Props {
  ref: {
    readonly current: HTMLInputElement
  }
}

const copy: EventListener = (event) => {
  const el = event.target as HTMLInputElement;

  el.select();
  navigator.clipboard.writeText(el.value);
};

export const TextInput: FC<Props> = ({ ref }) =>  (
  <input
    ref={ref}
    onclick={copy}
    class={s.textInput}
    type="text"
    spellcheck="false"
    readOnly
  />
);
