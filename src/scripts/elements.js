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
