import './global.css';
import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { parseHex, randomHex } from './util';

const color = parseHex(location.hash);
const hex = color ? color : randomHex(6);

history.pushState('', '', '#' + hex);
document.body.append(<App />);

dispatch('hex', hex);
readyStore();
