import './Card.scss';

interface Props {
  children?: React.ReactNode;
  classes?: string;
  idSelector?: string;
}

const Card = ({ children, classes, idSelector }: Props) => {
  return (
    <div className={`card ${classes}`} id={idSelector ? `${idSelector}` : ''}>
      {children}
    </div>
  );
};

export default Card;
