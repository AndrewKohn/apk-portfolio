import {
  BsArrowLeftCircleFill,
  BsClipboard2CheckFill,
  BsFillExclamationCircleFill,
  BsFillStarFill,
} from 'react-icons/bs';
import EyeFillIcon from '../assets/svg/EyeFillIcon';
import EyeSlashFillIcon from '../assets/svg/EyeSlashFillIcon';
import GitHubIcon from '../assets/svg/GitHubIcon';
import Tags from '../components/ProjectGridItem/Tags';
import Background from '../components/UI/Background';
import './ProjectPage.scss';
import './Style.scss';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import { Fragment, useEffect, useState } from 'react';

interface Props {
  project: any;
  projectStatus: boolean[];
}

const ProjectPage = ({ project, projectStatus }: Props) => {
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (project.id === 0) setStatus(projectStatus[0]); // MGH daily sched
    // if (project.id === 0 && projectStatus[0]) status = projectStatus[1]; // O-Notes
    if (project.id === 2) setStatus(projectStatus[2]); // gpt chatbot
    if (project.id === 3) setStatus(projectStatus[3]); // mh weakener bot
  }, []);

  const projectPurpose = project.moreInfo.purpose.map(
    (purpose: string, index: number) => (
      <p key={index} className="project-info-text">
        {purpose}
      </p>
    )
  );

  const projectFunctionality = project.moreInfo.functionality.map(
    (functionality: string, index: number) => (
      <p key={index} className="project-info-text">
        {functionality}
      </p>
    )
  );

  const projectChallenge = project.moreInfo.challenge.map(
    (challenge: string, index: number) => (
      <p key={index} className="project-info-text">
        {challenge}
      </p>
    )
  );

  return (
    <div className="container project-page-container">
      <Background className="project-page-bg" />

      <h2>{project.title}</h2>

      <div className="content">
        <Link to={`/projects`} className="return-button">
          <BsArrowLeftCircleFill className="return-button-icon" />
        </Link>

        <Card classes="project-info-img">
          <img src={project.image} className="project-info-image" />

          {status !== undefined ? (
            <div className="status">
              {status ? (
                <Fragment>
                  <p>ONLINE</p>
                  <div className="status-icon--online" />
                </Fragment>
              ) : (
                <Fragment>
                  <p>OFFLINE</p>
                  <div className="status-icon--offline" />
                </Fragment>
              )}
            </div>
          ) : (
            ''
          )}

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
        </Card>

        <Card classes="project-info-card">
          <div className="project-info-heading heading--purpose">
            <BsFillStarFill className="project-info-icon" />
            <h4>Purpose</h4>
          </div>
          {projectPurpose}
        </Card>
        <Card classes="project-info-card">
          <div className="project-info-heading heading--functionality">
            <BsClipboard2CheckFill className="project-info-icon" />
            <h4>Functionality</h4>
          </div>
          {projectFunctionality}
        </Card>
        <Card classes="project-info-card">
          <div className="project-info-heading heading--challenge">
            <BsFillExclamationCircleFill className="project-info-icon" />
            <h4>Challenge</h4>
          </div>
          {projectChallenge}
        </Card>
      </div>
    </div>
  );
};

export default ProjectPage;
