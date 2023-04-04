import { getState } from '../../store';
import { getBase64, getDataUrl } from '../../util';

export const createName = (hex: string) => `1x1_#${hex.toUpperCase()}.gif`;

export const saveGifLink = (link: HTMLAnchorElement): void => {
  link.addEventListener('click', () => {
    const { hex, bytes } = getState();

    link.download = createName(hex);
    link.href = getDataUrl(getBase64(bytes));
  });
};

export const saveGifButton = (button: HTMLButtonElement): void => {
  button.addEventListener('click', async () => {
    const { hex, bytes } = getState();

    const file = await window.showSaveFilePicker({
      suggestedName: createName(hex),
    });

    const state = await file.queryPermission();

    if (state === 'granted') {
      const writable = await file.createWritable();

      await writable.write(
        new Blob(
          [new Uint8Array(bytes)],
          { type: 'image/gif' },
        ),
      );

      await writable.close();
    }
  });
};
