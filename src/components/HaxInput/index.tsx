import { useRef } from 'jsx-dom-runtime';

import * as s from './styles.module.css';
import { Group } from '../Group';
import { DataList } from './DataList';
import { connect, dispatch } from '../../store';
import { parseHex, randomHex } from '../../util';

export const HaxInput: FC = () => {
  const ref = useRef<HTMLInputElement>();
  const id = 'i' + randomHex(4);

  const change = () => {
    const color = parseHex(ref.current.value);

    if (color) {
      dispatch('set/hex', color);
    }
  };

  const keyup = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      change();
    }
  };

  connect('hex', (state) => {
    ref.current.value = state.hex;
  });

  return (
    <Group title="HEX">
      <input
        ref={ref}
        list={id}
        onchange={change}
        onkeyup={keyup}
        class={s.text}
        type="text"
        value="ffffff"
        spellcheck="false"
        autoComplete="on"
        placeholder="ffffff"
      />
      <DataList id={id} />
    </Group>
  );
};
