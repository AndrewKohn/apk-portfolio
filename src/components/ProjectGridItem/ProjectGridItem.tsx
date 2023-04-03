import EyeFillIcon from '../../assets/svg/EyeFillIcon';
import EyeSlashFillIcon from '../../assets/svg/EyeSlashFillIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import Card from '../UI/Card';
import './ProjectGridItem.scss';
import Tags from './Tags';

interface Props {
  image: any;
  altText: string;
  title: string;
  description: string;
  tags?: any;
  githubPath?: string;
  liveSitePath?: string;
}

const ProjectGridItem = ({
  image,
  altText,
  title,
  description,
  tags,
  githubPath,
  liveSitePath,
}: Props) => {
  return (
    <Card classes="project-card">
      {/* IMAGE */}
      {tags.length !== 0 ? (
        <img
          className="project-image"
          src={image}
          alt={altText}
          title={title}
        />
      ) : (
        <div className="blurred-container">
          <img
            className="project-image blurred--heavy"
            src={image}
            alt={altText}
            title={title}
          />
        </div>
      )}

      <div className="project-info-container">
        {/* TITLE */}
        {tags.length !== 0 ? <h4>{title}</h4> : <h4>Coming Soon!</h4>}

        {/* DESCRIPTION */}
        {tags.length !== 0 ? (
          <p className="description">{description}</p>
        ) : (
          <p className="description blurred--heavy disabled-text">
            {description}
          </p>
        )}

        <div className="bottom-row">
          {/* LINKS */}
          <div className="links-wrapper">
            {liveSitePath ? (
              <a href={liveSitePath} className="project-link" target="_blank">
                <EyeFillIcon className="link-icon" />
              </a>
            ) : (
              <EyeSlashFillIcon className={`link-icon blurred--light`} />
            )}

            {githubPath ? (
              <a href={githubPath} className="project-link" target="_blank">
                <GitHubIcon className="link-icon" />
              </a>
            ) : (
              <GitHubIcon
                className={`link-icon blurred--light`}
                isDisabled={true}
              />
            )}
          </div>

          {/* TAGS */}
          <Tags projectTags={tags} />
        </div>
      </div>
    </Card>
  );
};

export default ProjectGridItem;
