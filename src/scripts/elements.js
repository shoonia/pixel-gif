export const $ = (i) => document.querySelector(i);
export const $$ = (i) => document.querySelectorAll(i);

export const createOptionList = (colors) => {
  const list = new DocumentFragment();
  const option = document.createElement('option');

  for (let key in colors) {
    const item = option.cloneNode();

    item.value = colors[key];
    item.textContent = key;
    list.append(item);
  }

  return list;
};

export const createFavicon = (color) => {
  /** @type {HTMLCanvasElement} */
  const el = document.createElement('canvas');

  const ctx = el.getContext('2d', {
    alpha: true,
    desynchronized: true,
  });

  el.width = 50;
  el.height = 50;

  ctx.fillStyle = color,
  ctx.arc(25, 25, 24, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  return el.toDataURL('image/png', 0.1);
};
