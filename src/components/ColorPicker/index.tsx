import { HexBase } from 'vanilla-colorful/lib/entrypoints/hex';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';

customElements.define('color-picker', HexBase);

export const ColorPicker: JSX.FC = () => {
  const isBigScreen = /*#__PURE__*/ window.matchMedia('(min-width:700px)').matches;

  const ready = (node: HexBase) => {
    connect('hex', (state) => {
      node.color = '#' + state.hex;
    });

    node.addEventListener('color-changed', (event) =>
      dispatch('hex', event.detail.value.slice(1)),
    );
  };

  return (
    <Group open={isBigScreen} title="Picker">
      <color-picker
        ref={ready}
        class={s.picker}
      />
    </Group>
  );
};
