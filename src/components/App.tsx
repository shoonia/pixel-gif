import s from './App.css';
import { HexInput } from './HexInput';
import { RGBInputs } from './RgbInputs';
import { PixelPNG } from './PixelPNG';
import { Stars } from './Stars';
import { SupportUkraine } from './SupportUkraine';
import { ColorPicker } from './ColorPicker';
import { Output } from './Output';
import { Download } from './Download';
import { RandomColor } from './RandomColor';
import { HotKeys } from './HotKeys';
import { Toast } from './Toast';
import { Analytics } from './Analytics';
import { readyStore } from '../store';

export const App: JSX.FC = () =>
  <>
    <div ref={readyStore} class={s.page}>
      <header class={s.header}>
        <a href="./" class={s.left} aria-current="page">
         1x1 Pixel GIF
        </a>
        <div class={s.right}>
          <SupportUkraine />
          <RandomColor />
        </div>
      </header>
      <aside class={s.toolbar}>
        <HexInput />
        <RGBInputs />
        <ColorPicker />
      </aside>
      <main class={s.main}>
        <div class={s.content}>
          <h1 class={s.title}>
           One pixel Base64 encoded GIF generator
          </h1>
          <Output />
          <Download />
        </div>
      </main>
      <Toast />
      <footer class={s.footer}>
        <div class={s.left}>
          <HotKeys />
        </div>
        <div class={s.right}>
          <Stars />
          <PixelPNG />
        </div>
      </footer>
    </div>
    <Analytics />
  </>;
