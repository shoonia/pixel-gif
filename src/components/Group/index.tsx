interface Props {
  title: string;
}

export const Group: FC<Props> = ({ title, children }) => (
  <fieldset>
    <legend>
      {title}
    </legend>
    {children}
  </fieldset>
);
