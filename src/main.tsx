import './global.css';
import { App } from './components/App';
import { dispatch } from './store';
import { getHex, randomHex } from './util';

const color = getHex(location.hash);
const hex = color ? color : randomHex(6);

dispatch('hex', hex);
history.replaceState('', '', '#' + hex);
document.body.append(<App />);

if (process.env.NODE_ENV === 'production') {
  addEventListener('load', () => navigator.serviceWorker?.register('sw.js'));
}
