import classes from './TagContainer.module.css';
import TagIcon from './TagIcon';

const TagContainer = props => {
  const tags = props.tags.map(tag => <TagIcon tags={tag} />);

  return <div className={classes[`tag-container`]}>{tags}</div>;
};

export default TagContainer;
