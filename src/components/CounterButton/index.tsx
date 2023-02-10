import { FC } from 'react';

interface Props {
  className?: string;
  text: string;
  onChange: () => void;
}

const Button: FC<Props> = (props) => {
  const { text, onChange, className } = props;
  return (
    <button className={className} onClick={onChange}>{text}</button>
  );
}

export default Button;