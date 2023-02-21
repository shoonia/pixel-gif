import { FC, useRef } from 'jsx-dom-runtime';

import { DataList } from './DataList';
import { connect, dispatch } from '../../store';
import { parseHex } from '../../util';

export const HaxInput: FC = () => {
  const ref = useRef<HTMLInputElement>();
  const id = 'i' + Date.now().toString(36);

  const change = () => {
    const [isValid, color] = parseHex(ref.current.value);

    if (isValid) {
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
    <fieldset>
      <legend>
        HEX
      </legend>
      <input
        ref={ref}
        list={id}
        onchange={change}
        onkeyup={keyup}
        type="text"
        value="ffffff"
        spellcheck="false"
        autoComplete="on"
        placeholder="ffffff"
      />
      <DataList id={id} />
    </fieldset>
  );
};
