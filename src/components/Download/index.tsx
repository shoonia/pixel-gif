import * as s from './styles.module.css';
import { saveGifButton, saveGifLink } from './save';

export const Download: FC = () => {
  const button = typeof window.showSaveFilePicker === 'function'
    ? (
      <button type="button" class={s.btn} onclick={saveGifButton}>
        Download
      </button>
    ) : (
      <a role="button" class={s.btn} ref={saveGifLink} href="#">
        Download
      </a>
    );

  return (
    <fieldset>
      {button}
    </fieldset>
  );
};
