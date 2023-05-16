import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';
import { getHex } from '../../util';
import { DataList } from './DataList';

export const HexInput: FC = () => {
  const ready = (input: HTMLInputElement) => {
    input.addEventListener('change', () => {
      const hex = getHex(input.value);

      if (hex) {
        dispatch('hex', hex);
      }
    });

    connect('hex', (state) => {
      input.value = state.hex;
    });
  };

  return (
    <Group open title="HEX">
      <input
        ref={ready}
        list="color-list"
        class={s.inp}
        type="text"
        autocomplete="on"
        placeholder="ffffff"
        spellcheck="false"
        aria-label="color"
      />
      <DataList />
    </Group>
  );
};
