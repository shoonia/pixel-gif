import { Group } from '../Group';
import { PairInputs } from './PairInputs';

export const RGBInputs: FC = () => (
  <Group open title="RGB">
    <PairInputs param="r" />
    <PairInputs param="g" />
    <PairInputs param="b" />
  </Group>
);
