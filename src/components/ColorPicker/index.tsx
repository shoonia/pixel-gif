import type { FC } from 'jsx-dom-runtime';
import type { HexColorPicker } from 'vanilla-colorful';

import * as s from './styles.module.css';
import { connect, dispatch } from '../../store';

export const ColorPicker: FC = () => {
  const mount = (picker: HexColorPicker) => {
    connect('hex', (state) => {
      picker.color = '#' + state.hex;
    });

    picker.addEventListener('color-changed', () => {
      dispatch('set/hex', picker.color.slice(1));
    });
  };

  return (
    <hex-color-picker ref={mount} class={s.picker}></hex-color-picker>
  );
};
