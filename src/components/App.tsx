import type { FC } from 'jsx-dom-runtime';

import { RgbRange } from "./RgbRange";

export const App: FC = () => (
  <main>
    <h1>One pixel Base64 encoded GIF generator</h1>
    <RgbRange />
  </main>
);
