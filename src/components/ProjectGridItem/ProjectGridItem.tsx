import Card from '../UI/Card';
import './ProjectGridItem.scss';

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
            className="project-image blurred-img"
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
          <p className="description disabled-text">{description}</p>
        )}
      </div>
    </Card>
  );
};

export default ProjectGridItem;
