import classes from './SecondaryHeading.module.css';

const SecondaryHeading = props => {
  return <h2 className={classes[`secondary-heading`]}>{props.children}</h2>;
};

export default SecondaryHeading;
