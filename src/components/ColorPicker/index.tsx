import type { FC } from 'jsx-dom-runtime';
import type { HexColorPicker } from 'vanilla-colorful';
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
    <hex-color-picker ref={mount}></hex-color-picker>
  );
};
