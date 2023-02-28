import type { FC } from 'jsx-dom-runtime';

import { ColorPicker } from './ColorPicker';
import { HaxInput } from './HaxInput';
import { RgbRange } from './RgbRange';
import { RandomColor } from './RandomColor';
import { Output } from './Output';
import { Download } from './Download';

export const App: FC = () => (
  <main>
    <h1>One pixel Base64 encoded GIF generator</h1>
    <ColorPicker />
    <HaxInput />
    <RgbRange />
    <RandomColor />
    <Output />
    <Download />
  </main>
);
