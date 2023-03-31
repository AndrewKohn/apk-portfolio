import classes from './SkillBanner.module.css';

const SkillBanner = props => {
  return (
    <div className={classes[`skills-banner`]}>
      {props.skill}
      <p className={classes.text}>{props.text}</p>
    </div>
  );
};

export default SkillBanner;
