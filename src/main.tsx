import './global.css';
import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { getHex, randomHex } from './util';

const color = getHex(location.hash);
const hex = color ? color : randomHex(6);

dispatch('hex', hex);
history.pushState('', '', '#' + hex);

if (process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker?.register('service-worker.js');
  });
}

document.body.append(<App ready={readyStore} />);
