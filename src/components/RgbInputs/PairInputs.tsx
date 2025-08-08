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

  const input: JSX.InputEventListener<HTMLInputElement> = (event) =>
    dispatch('rgb', [param, event.currentTarget.valueAsNumber]);

  connect(param, (state) => {
    const val = state[param];

    const r = param === 'r' ? val : 0;
    const g = param === 'g' ? val : 0;
    const b = param === 'b' ? val : 0;

    number.current.valueAsNumber = val;
    range.current.valueAsNumber = val;
    range.current.style.setProperty('--c', `rgb(${r} ${g} ${b})`);
  });

  return (
    <div class={s.box}>
      <span class={s.label}>
        {param}
      </span>
      <input
        ref={number}
        type="number"
        name={`${param}-number`}
        class={s.number}
        on:input={input}
        max={255}
        min={0}
        step={1}
        aria-label={label}
      />
      <input
        ref={range}
        type="range"
        name={`${param}-range`}
        class={s.range}
        on:input={input}
        max={255}
        min={0}
        step={1}
        aria-label={label}
      />
    </div>
  );
};
