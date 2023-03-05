import * as s from './styles.module.css';
import { Inputs } from './Inputs';

export const RgbRange: FC = () => (
  <fieldset>
    <legend>
      RGB
    </legend>
    <div class={s.rgb}>
      <Inputs param="r" />
      <Inputs param="g" />
      <Inputs param="b" />
    </div>
  </fieldset>
);
