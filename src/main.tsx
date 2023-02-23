import './index.css';
import { App } from './components/App';
import { dispatch, getState, readyStore } from './store';
import { parseHex, randomHex } from './util';

const [isValid, color] = parseHex(location.hash);
const hex = isValid ? color : randomHex(6);

history.pushState('', '', '#' + hex);
window.addEventListener('popstate', () => {
  const { hex } = getState();
  const hash = location.hash.slice(1);

  if (hash !== hex) {
    const [isValid, color] = parseHex(hash);

    if (isValid) {
      dispatch('set/hex', color);
    }
  }
});

dispatch('set/hex', hex);
document.body.append(<App />);
readyStore();
