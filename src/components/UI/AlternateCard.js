import classes from './AlternateCard.module.css';

const AlternateCard = props => {
  return <div className={classes.card}>{props.children}</div>;
};

export default AlternateCard;
