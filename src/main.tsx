import './global.css';
import { App } from './components/App';
import { Analytics } from './components/Analytics';
import { dispatch, readyStore } from './store';
import { parseHex, randomHex } from './util';

const color = parseHex(location.hash);
const hex = color ? color : randomHex(6);

dispatch('hex', hex);

history.pushState('', '', '#' + hex);
document.body.append(<App ready={readyStore} />);
document.head.append(<Analytics />);
