import classes from './TagIcon.module.css';

const TagIcon = props => {
  let TagIcon = props.tag;

  return <TagIcon class={classes.icon} />;
};

export default TagIcon;
