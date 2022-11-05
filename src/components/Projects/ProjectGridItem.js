import AlternateCard from '../UI/AlternateCard';
import EyeFillIcon from '../../assets/svg/EyeFillIcon';
import EyeSlashFillIcon from '../../assets/svg/EyeSlashFillIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import classes from './ProjectGridItem.module.css';
import TagContainer from './TagContainer/TagContainer';

const ProjectGridItem = props => {
  return (
    <AlternateCard>
      <div className={classes[`grid-item-wrapper`]}>
        {props.liveSitePath ? (
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
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className={classes[`links-wrapper`]}>
          {props.gitHubPath ? (
            <a href={props.gitHubPath} className={classes[`project-link`]}>
              <EyeFillIcon class={classes.icon} />
            </a>
          ) : (
            <div className={classes.disabled}>
              <EyeSlashFillIcon class={classes.icon} />
            </div>
          )}

          {props.liveSitePath ? (
            <a href={props.liveSitePath} className={classes[`project-link`]}>
              <GitHubIcon class={classes.icon} />
            </a>
          ) : (
            <div className={classes.disabled}>
              <GitHubIcon class={`${classes.icon} ${classes.blur}`} />
            </div>
          )}
        </div>

        <TagContainer tags={props.tags} />
      </div>
    </AlternateCard>
  );
};

export default ProjectGridItem;
