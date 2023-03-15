import * as s from './styles.module.css';
import { Group } from '../Group';
import { dispatch } from '../../store';
import { randomHex } from '../../util';

export const RandomColor: FC = () => {
  const click: EventListener = () => {
    dispatch('set/hex', randomHex(6));
  };

  return (
    <Group title="Random Color">
      <button type="button" onclick={click} class={s.btn}>
        Generate
      </button>
    </Group>
  );
};
