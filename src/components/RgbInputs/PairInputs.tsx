import { useRef } from 'jsx-dom-runtime';

import s from './PairInputs.css';
import type { TParam } from '../../store/types';
import { connect, dispatch } from '../../store';

interface Props {
  param: TParam;
}

export const PairInputs: JSX.FC<Props> = ({ param }) => {
  const number = useRef<HTMLInputElement>();
  const range = useRef<HTMLInputElement>();
  const label = `color channel "${param}"`;

  const input: EventListener = (event) => {
    const el = event.target as HTMLInputElement;
    const val = ~~el.valueAsNumber;

    dispatch('rgb', [param, val > 255 ? 255 : val]);
  };

  connect(param, (state) => {
    const val = state[param];

    number.current.valueAsNumber = val;
    range.current.valueAsNumber = val;
  });

  return (
    <div class={s.box}>
      <span class={s.label}>
        {param}
      </span>
      <input
        ref={number}
        type="number"
        class={s.number}
        oninput={input}
        max={255}
        min={0}
        step={1}
        aria-label={label}
      />
      <input
        ref={range}
        type="range"
        class={s.range}
        oninput={input}
        max={255}
        min={0}
        step={1}
        aria-label={label}
      />
    </div>
  );
};
