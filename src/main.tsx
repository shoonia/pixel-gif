import { App } from './components/App';
import { dispatch, readyStore } from './store';
import { parseHex, randomHex } from './util';

const [isValid, color] = parseHex(location.hash);
const hex = isValid ? color : randomHex(6);

history.pushState('', '', '#' + hex);
dispatch('set/hex', hex);

document.body.append(<App />);

readyStore();
