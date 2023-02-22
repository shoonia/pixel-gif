import type { FC } from 'jsx-dom-runtime';

import { saveGifButton, saveGifLink } from './save';

export const Download: FC = () => {
  return typeof window.showSaveFilePicker === 'function'
    ? (
      <button type="button" onclick={saveGifButton}>
        Download
      </button>
    ) : (
      <a ref={saveGifLink} href="#" role="button">
        Download
      </a>
    );
};
