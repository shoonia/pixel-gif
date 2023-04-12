import './global.css';
import { App } from './components/App';
import { Analytics } from './components/Analytics';
import { dispatch, readyStore } from './store';
import { getHex, randomHex } from './util';

const color = getHex(location.hash);
const hex = color ? color : randomHex(6);

dispatch('hex', hex);
history.pushState('', '', '#' + hex);

document.body.append(
  <App ready={readyStore} />,
  <Analytics />,
);
