const KEY = 'one-pixel-gif-history';

let timeout: ReturnType<typeof setTimeout>;

export const HISTORY_LENGTH = 50;

export const getHistory = () => localStorage.getItem(KEY)?.split(',') ?? [];

export const saveHistory = (history: string[]): void => {
  clearTimeout(timeout);
  timeout = setTimeout(() => localStorage.setItem(KEY, history.join()), 100);
};
