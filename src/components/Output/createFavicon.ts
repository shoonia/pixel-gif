import { jsx } from 'jsx-dom-runtime';

const canvas = jsx('canvas', { width: 50, height: 50 });

const ctx = canvas.getContext('2d', {
  alpha: true,
  desynchronized: true,
  colorSpace: 'srgb',
})!;

ctx.arc(25, 25, 24, 0, 2 * Math.PI);

export const createFavicon = (color: string): string => {
  ctx.fillStyle = color,
  ctx.fill();
  ctx.stroke();

  return canvas.toDataURL('image/png', 0.1);
};
