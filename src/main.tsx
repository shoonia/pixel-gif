import './global.css';
import { App } from './components/App';
import { dispatch } from './store';
import { getHex, randomHex } from './util';

const color = getHex(location.hash);
const hex = color ? color : randomHex();

dispatch('hex', hex);
history.replaceState('', '', '#' + hex);
document.body.append(<App />);
