import { FC, useRef } from 'jsx-dom-runtime/jsx-runtime';

import type { State } from '../../store/types';
import { connect, setState } from '../../store';

interface Props {
  name: keyof State
}

export const Inputs: FC<Props> = ({ name }) => {
  const number = useRef<HTMLInputElement>();
  const range = useRef<HTMLInputElement>();

  const input: EventListener = (event) => {
    const el = event.target as HTMLInputElement;
    const value = el.valueAsNumber;

    setState({
      [name]: value > 255 ? 255 : value,
    });
  }

  connect(name, (state) => {
    const val = `${state[name]}`;

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
}
