import { getState } from '../../store';
import { getBytesArray, createDataUrl } from '../../util';

export const createName = (hex: string) => `1x1_#${hex.toUpperCase()}.gif`;

export const saveGifButton = async (): Promise<void> => {
  const { r, g, b, hex } = getState();

  const file = await window.showSaveFilePicker({
    suggestedName: createName(hex),
  });

  const state = await file.queryPermission();

  if (state === 'granted') {
    const writable = await file.createWritable();

    await writable.write(
      new Blob(
        [new Uint8Array(getBytesArray(r, g, b))],
        { type: 'image/gif' },
      ),
    );

    await writable.close();
  }
};

export const saveGifLink = (a: HTMLAnchorElement): void => {
  a.addEventListener('click', () => {
    const { r, g, b, hex } = getState();

    a.download = createName(hex);
    a.href = createDataUrl(r, g, b);
  });
};
