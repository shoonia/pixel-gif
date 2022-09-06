import { createHex, getBytesArray } from './util';

export const isSupportFilePicker = typeof window.showSaveFilePicker === 'function';

export const createName = (hex) => `1x1-${hex}.gif`;

export const saveGif = async ({ r, g, b }) => {
  const file = await window.showSaveFilePicker({
    suggestedName: createName(createHex(r, g, b)),
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
