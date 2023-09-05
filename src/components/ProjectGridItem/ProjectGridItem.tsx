import { Link } from 'react-router-dom';
import EyeFillIcon from '../../assets/svg/EyeFillIcon';
import EyeSlashFillIcon from '../../assets/svg/EyeSlashFillIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import Card from '../UI/Card';
import './ProjectGridItem.scss';
import Tags from './Tags';
import { HiInformationCircle } from 'react-icons/hi';
import { Fragment, useEffect, useState } from 'react';

interface Props {
  projectId: number;
  image: any;
  altText: string;
  title: string;
  description: string;
  tags?: any;
  githubPath?: string;
  liveSitePath?: string;
  status?: boolean;
}

const ProjectGridItem = ({
  projectId,
  image,
  altText,
  title,
  description,
  tags,
  githubPath,
  liveSitePath,
  status,
}: Props) => {
  useEffect(() => console.log(title, projectId, status), []);
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
        {/* STATUS */}
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
              <a
                href={liveSitePath}
                className={`project-link live-demo`}
                target="_blank"
              >
                <EyeFillIcon className="link-icon" />
              </a>
            ) : (
              <EyeSlashFillIcon className={`link-icon blurred--light`} />
            )}

            {githubPath ? (
              <a
                href={githubPath}
                className={`project-link github-url`}
                target="_blank"
              >
                <GitHubIcon className="link-icon" />
              </a>
            ) : (
              <GitHubIcon
                isDisabled={true}
                className={`link-icon blurred--light`}
              />
            )}

            {githubPath ? (
              <Link
                to={`/projects/${projectId}`}
                className={`project-link nav-link`}
              >
                <HiInformationCircle className="link-icon " />
              </Link>
            ) : (
              <HiInformationCircle className={`link-icon blurred--light`} />
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
