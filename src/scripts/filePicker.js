export const isSupportFilePicker = typeof window.showSaveFilePicker === 'function';

export const saveFile = async (suggestedName, blob) => {
  const file = await window.showSaveFilePicker({
    suggestedName,
  });

  const state = await file.queryPermission();

  if (state === 'granted') {
    const writable = await file.createWritable();

    await writable.write(blob);
    await writable.close();
  }
};
