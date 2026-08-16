import { signal } from 'jsx-dom-runtime';
import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';
import { getHex } from '../../util';
import { DataList } from './DataList';

export const HexInput: JSX.FC = () => {
  const value = signal();
  const changed: JSX.EventListener<HTMLInputElement> = (event) => {
    const hex = getHex(event.currentTarget.value);

    if (hex) {
      dispatch('hex', hex);
    }
  };

  connect('hex', (state) =>
    value.set(state.hex),
  );

  return (
    <Group open title="HEX">
      <input
        name="hex-color"
        list="color-list"
        class={s.inp}
        on:change={changed}
        prop:value={value}
        type="search"
        autocomplete="on"
        placeholder="ffffff"
        spellcheck="false"
        aria-label="Hex color code"
        minLength={3}
        maxLength={25}
      />
      <DataList />
    </Group>
  );
};
