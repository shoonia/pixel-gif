import s from './styles.css';
import { connect } from '../../store';
import { Item } from './Item';

export const History: JSX.FC = () => {
  const ready: JSX.Ref<Element> = (node) =>
    connect('history', ({ history }) =>
      node.replaceChildren(
        <>
          {history.map((i) => <Item hex={`#${i}`} />)}
        </>,
      ),
    );

  return (
    <ul ref={ready} class={s.list} />
  );
};
