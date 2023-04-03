import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';
import { parseHex, randomHex } from '../../util';
import { DataList } from './DataList';

export const HexInput: FC = () => {
  const inp = useRef<HTMLInputElement>();
  const listId = 'e' + randomHex(4);

  const changeColor: EventListener = () => {
    const hex = parseHex(inp.current.value);

    if (hex) {
      dispatch('hex', hex);
    }
  };

  connect('hex', (state) => {
    inp.current.value = state.hex;
  });

  return (
    <Group open title="HEX">
      <label aria-label="color">
        <input
          ref={inp}
          list={listId}
          onchange={changeColor}
          class={s.inp}
          type="text"
          autoComplete="on"
          placeholder="ffffff"
          spellcheck="false"
        />
      </label>
      <DataList id={listId} />
    </Group>
  );
};
