import './Card.scss';

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

const Card = ({ children, classes }: Props) => {
  return <div className={`card ${classes}`}>{children}</div>;
};

export default Card;
