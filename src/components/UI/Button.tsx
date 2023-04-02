import { ReactNode } from 'react';
import './Button.scss';

interface Props {
  children: ReactNode;
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
  clickHandler?: () => {};
}

const Button = ({ children, classes, type, clickHandler }: Props) => {
  return (
    <button className={`button ${classes}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
