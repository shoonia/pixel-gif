import s from './App.css';
import { HexInput } from './HexInput';
import { RGBInputs } from './RgbInputs';
import { PixelPNG } from './PixelPNG';
import { Stars } from './Stars';
import { SupportUkraine } from './SupportUkraine';
import { ColorPicker } from './ColorPicker';
import { Preview } from './Preview';
import { Output } from './Output';
import { Download } from './Download';
import { RandomColor } from './RandomColor';
import { HotKeys } from './HotKeys';
import { Toast } from './Toast';
import { History } from './History';
import { readyStore } from '../store';

export const App: JSX.FC = () =>
  <div ref={readyStore} class={s.page}>
    <header class={s.header}>
      <a href="./" class={s.left} aria-current="page" aria-label="Reload page">
        1x1 Pixel GIF
      </a>
      <div class={s.right}>
        <SupportUkraine />
        <RandomColor />
      </div>
    </header>
    <aside class={s.toolbar} aria-label="Color input controls">
      <HexInput />
      <RGBInputs />
      <ColorPicker />
    </aside>
    <main class={s.main}>
      <div class={s.content}>
        <h1 class={s.title}>
          One pixel Base64 encoded GIF generator
        </h1>
        <Preview />
        <Output />
        <Download />
      </div>
    </main>
    <aside class={s.history} aria-label="Color history">
      <History />
    </aside>
    <footer class={s.footer}>
      <section class={s.left} aria-label="Keyboard shortcuts">
        <HotKeys />
      </section>
      <section class={s.right} aria-label="External links">
        <Stars />
        <PixelPNG />
      </section>
    </footer>
    <Toast />
  </div>;
