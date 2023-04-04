const canvas = <canvas width={50} height={50} />;

export const createFavicon = (color: string): string | void => {
  const el = canvas.cloneNode() as HTMLCanvasElement;

  const ctx = el.getContext('2d', {
    alpha: true,
    desynchronized: true,
  });

  if (ctx) {
    ctx.fillStyle = color,
    ctx.arc(25, 25, 24, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    return el.toDataURL('image/png', 0.1);
  }
};
