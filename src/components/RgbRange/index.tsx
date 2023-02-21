import type { FC } from 'jsx-dom-runtime';
import { Inputs } from './Inputs';

export const RgbRange: FC = () => (
  <fieldset>
    <legend>
      RGB
    </legend>
    <Inputs name="r" />
    <Inputs name="g" />
    <Inputs name="b" />
  </fieldset>
)
