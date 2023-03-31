import classes from './TagContainer.module.css';
import TagIcon from './TagIcon';

const TagContainer = props => {
  const tags = props.tags.map((tag, index) => (
    <TagIcon key={index} tag={tag} />
  ));

  return <div className={classes[`tag-container`]}>{tags}</div>;
};

export default TagContainer;
