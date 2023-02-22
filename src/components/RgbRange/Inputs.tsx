import { type FC, useRef } from 'jsx-dom-runtime';

import type { TParam } from '../../store/types';
import { connect, dispatch } from '../../store';

interface Props {
  param: TParam
}

export const Inputs: FC<Props> = ({ param }) => {
  const number = useRef<HTMLInputElement>();
  const range = useRef<HTMLInputElement>();

  const input: EventListener = (event) => {
    const el = event.target as HTMLInputElement;
    const val = el.valueAsNumber;

    dispatch('set/rgb', [param, val > 255 ? 255 : val]);
  };

  connect(param, (state) => {
    const val = `${state[param]}`;

    number.current.value = val;
    range.current.value = val;
  });

  return (
    <div>
      <label>
        <input
          type="number"
          max={255}
          min={0}
          step={1}
          ref={number}
          oninput={input}
        />
      </label>
      <label>
        <input
          type="range"
          max={255}
          min={0}
          step={1}
          ref={range}
          oninput={input}
        />
      </label>
    </div>
  );
};
