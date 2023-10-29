import s from './styles.css';

export const Toast: JSX.FC = () => {
  const ready = (node: HTMLDivElement) => {
    node.classList.add(s.show);

    setTimeout(() => {
      node.classList.remove(s.show);
    }, 3000);
  };

  return (
    <div ref={ready} class={s.toast} role="status">
      Copied to clipboard
    </div>
  );
};
