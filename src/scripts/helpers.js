export const debounce = (cb, ms) => {
  let t;

  return (arg) => {
    clearTimeout(t);
    t = setTimeout(cb, ms, arg);
  };
};
