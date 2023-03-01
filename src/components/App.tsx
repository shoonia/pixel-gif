import type { FC } from 'jsx-dom-runtime';

import * as s from './App.module.css';
import { ColorPicker } from './ColorPicker';
import { HaxInput } from './HaxInput';
import { RgbRange } from './RgbRange';
import { RandomColor } from './RandomColor';
import { Output } from './Output';
import { Download } from './Download';

export const App: FC = () => (
  <main>
    <div class={s.top}>
      <h1>One pixel Base64 encoded GIF generator</h1>
      <ColorPicker />
    </div>
    <div class={s.middel}>
      <HaxInput />
      <RgbRange />
      <RandomColor />
    </div>
    <Output />
    <Download />
  </main>
);
