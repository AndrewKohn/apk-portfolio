import Card from '../UI/Card';
import EyeFillIcon from '../../assets/svg/EyeFillIcon';
import EyeSlashFillIcon from '../../assets/svg/EyeSlashFillIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import classes from './ProjectGridItem.module.css';
import TagContainer from './TagContainer/TagContainer';

const ProjectGridItem = props => {
  return (
    <Card>
      <div className={classes[`grid-item-wrapper`]}>
        {/* IMAGE */}
        {props.liveSitePath && props.tags.length !== 0 ? (
          <img src={props.image} alt={props.altText} title={props.altText} />
        ) : (
          <div className={classes[`blurred-img-container`]}>
            <img
              src={props.image}
              alt={props.altText}
              title={props.altText}
              className={classes[`img-blur`]}
            />
          </div>
        )}

        <div className={classes[`text-container`]}>
          {/* TITLE */}
          {props.tags.length !== 0 ? (
            <h3 className={classes[`sub-heading`]}>{props.title}</h3>
          ) : (
            <h3 className={classes[`sub-heading`]}>Coming Soon</h3>
          )}

          {/* DESCRIPTION */}
          {props.tags.length !== 0 ? (
            <p className={classes.text}>{props.description}</p>
          ) : (
            <p className={`${classes.text} ${classes[`text-blur`]}`}>
              {props.description}
            </p>
          )}
        </div>

        {/* LINKS */}
        <div className={classes[`links-wrapper`]}>
          {props.liveSitePath ? (
            <a href={props.liveSitePath} className={classes[`project-link`]}>
              <EyeFillIcon class={classes.icon} />
            </a>
          ) : (
            <div className={classes.disabled}>
              <EyeSlashFillIcon class={classes.icon} />
            </div>
          )}

          {props.gitHubPath ? (
            <a href={props.gitHubPath} className={classes[`project-link`]}>
              <GitHubIcon class={classes.icon} />
            </a>
          ) : (
            <div className={classes.disabled}>
              <GitHubIcon class={`${classes.icon} ${classes.blur}`} />
            </div>
          )}
        </div>

        {/* TAGS */}
        <TagContainer tags={props.tags} />
      </div>
    </Card>
  );
};

export default ProjectGridItem;
