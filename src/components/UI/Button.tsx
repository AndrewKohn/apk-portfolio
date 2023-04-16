import { ReactNode } from 'react';
import './Button.scss';

interface Props {
  ariaLabel: string;
  children: ReactNode;
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
  clickHandler?: () => {};
}

const Button = ({
  ariaLabel,
  children,
  classes,
  type,
  clickHandler,
}: Props) => {
  return (
    <button aria-label={ariaLabel} className={`button ${classes}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
