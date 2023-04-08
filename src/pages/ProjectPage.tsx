import { BsArrowLeftCircleFill } from 'react-icons/bs';
import EyeFillIcon from '../assets/svg/EyeFillIcon';
import EyeSlashFillIcon from '../assets/svg/EyeSlashFillIcon';
import GitHubIcon from '../assets/svg/GitHubIcon';
import Tags from '../components/ProjectGridItem/Tags';
import Background from '../components/UI/Background';
import './ProjectPage.scss';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';

interface Props {
  project: any;
}

const ProjectPage = ({ project }: Props) => {
  console.log(project);

  return (
    <div className="container project-page-container">
      <Link to={`/projects`} className="return-button">
        <BsArrowLeftCircleFill className="return-button-icon" />
      </Link>
      <Background className="project-page-bg" />
      <h2>{project.title}</h2>

      <div className="links-container">
        <div className="links-wrapper">
          {project.liveSitePath ? (
            <a
              href={project.liveSitePath}
              className={`project-link live-demo`}
              target="_blank"
            >
              <EyeFillIcon className="link-icon" />
            </a>
          ) : (
            <EyeSlashFillIcon className={`link-icon blurred--light`} />
          )}

          {project.gitHubPath ? (
            <a
              href={project.gitHubPath}
              className={`project-link github-url`}
              target="_blank"
            >
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
        <Tags projectTags={project.tags} />
      </div>

      <Card>{project.description}</Card>
    </div>
  );
};

export default ProjectPage;
