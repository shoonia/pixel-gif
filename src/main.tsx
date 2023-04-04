import './global.css';
import { App } from './components/App';
import { dispatch, getState, readyStore } from './store';
import { parseHex, randomHex } from './util';

const color = parseHex(location.hash);
const hex = color ? color : randomHex(6);

history.pushState('', '', '#' + hex);

window.addEventListener('popstate', () => {
  const state = getState();
  const hash = location.hash.slice(1);

  if (hash !== state.hex) {
    const i = parseHex(hash);

    if (i) {
      dispatch('hex', i);
    }
  }
});

document.body.append(<App />);

dispatch('hex', hex);
readyStore();
