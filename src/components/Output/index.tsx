import { signal } from 'jsx-dom-runtime';
import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';
import { scope as baseUrl } from '../../../static/manifest.json';

export const Output: JSX.FC = () => {
  const dataUrl = signal();
  const link = signal();
  const bytesStr = signal();
  const base64 = signal();

  connect('url', (state) =>
    dataUrl.set(state.url),
  );

  connect('color', (state) =>
    link.set(baseUrl + state.color),
  );

  connect('bytes', 'radix', ({ bytes, radix }) =>
    bytesStr.set(bytes.map((i) => i.toString(radix)).join(' ')),
  );

  connect('base64', (state) =>
    base64.set(state.base64),
  );

  return (
    <fieldset class={s.box}>
      <legend class="sr-only">
        Output formats
      </legend>
      <TextInput value={dataUrl} label="Data URL" />
      <TextInput value={base64} label="Base64" />
      <div class={s.bytes} role="group" aria-label="Output bytes">
        <TextInput value={bytesStr} label="Bytes" />
        <RadixSelect />
      </div>
      <TextInput value={link} label="Share Link" />
    </fieldset>
  );
};
