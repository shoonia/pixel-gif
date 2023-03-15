import * as s from './styles.module.css';
import { Group } from '../Group';
import { Inputs } from './Inputs';

export const RgbRange: FC = () => (
  <Group title="RGB">
    <div class={s.rgb}>
      <Inputs param="r" />
      <Inputs param="g" />
      <Inputs param="b" />
    </div>
  </Group>
);
