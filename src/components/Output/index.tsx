import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';

export const Output: JSX.FC = () => {
  const dataUrlRef: JSX.Ref<HTMLInputElement> = (node) =>
    connect('url', (state) => {
      node.value = state.url;
    });

  const linkRef: JSX.Ref<HTMLInputElement> = (node) =>
    connect('color', (state) => {
      node.value = process.env.HOMEPAGE + state.color;
    });

  const bytesRef: JSX.Ref<HTMLInputElement> = (node) =>
    connect('bytes', 'radix', ({ bytes, radix }) => {
      node.value = bytes.map((i) => i.toString(radix)).join(' ');
    });

  const base64Ref: JSX.Ref<HTMLInputElement> = (node) =>
    connect('base64', (state) => {
      node.value = state.base64;
    });

  return (
    <fieldset class={s.box}>
      <legend class="sr-only">
        Output formats
      </legend>
      <TextInput ref={dataUrlRef} label="Data URL" />
      <TextInput ref={base64Ref} label="Base64" />
      <div class={s.bytes} role="group" aria-label="Output bytes">
        <TextInput ref={bytesRef} label="Bytes" />
        <RadixSelect />
      </div>
      <TextInput ref={linkRef} label="Share Link" />
    </fieldset>
  );
};
