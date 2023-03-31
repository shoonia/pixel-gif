import s from './App.css';

export const App: FC = () =>  (
  <div class={s.page}>
    <header class={s.header}>
      <a href="./" class={s.left}>
        1x1 Pixel GIF
      </a>
      <div class={s.right}>
      </div>
    </header>
    <aside class={s.toolbar}>
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
      </div>
    </footer>
  </div>
);
