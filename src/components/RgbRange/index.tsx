import type { FC } from 'jsx-dom-runtime';
import { Inputs } from './Inputs';

export const RgbRange: FC = () => (
  <fieldset>
    <legend>
      RGB
    </legend>
    <Inputs param="r" />
    <Inputs param="g" />
    <Inputs param="b" />
  </fieldset>
);
