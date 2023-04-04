import s from './App.css';
import { HexInput } from './HexInput';
import { RGBInputs } from './RgbInputs';
import { PixelPNG } from './PixelPNG';
import { Stars } from './Stars';
import { SupportUkraine } from './SupportUkraine';

export const App: FC = () => (
  <div class={s.page}>
    <header class={s.header}>
      <a href="./" class={s.left} aria-current="page">
        1x1 Pixel GIF
      </a>
      <div class={s.right}>
        <SupportUkraine />
      </div>
    </header>
    <aside class={s.toolbar}>
      <HexInput />
      <RGBInputs />
    </aside>
    <main class={s.main}>
      <div class={s.content}>
        <h1 class={s.title}>
          One pixel Base64 encoded GIF generator
        </h1>
      </div>
    </main>
    <footer class={s.footer}>
      <div class={s.left}>
      </div>
      <div class={s.right}>
        <Stars />
        <PixelPNG />
      </div>
    </footer>
  </div>
);
