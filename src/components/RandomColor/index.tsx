import * as s from './styles.module.css';
import { dispatch } from '../../store';
import { randomHex } from '../../util';

export const RandomColor: FC = () => {
  const click: EventListener = () => {
    dispatch('set/hex', randomHex(6));
  };

  return (
    <fieldset>
      <legend>
        Random Color
      </legend>
      <button type="button" onclick={click} class={s.btn}>
        Generate
      </button>
    </fieldset>
  );
};
