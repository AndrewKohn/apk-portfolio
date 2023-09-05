import './Style.scss';
import PROJECTS_DATA from '../data/ProjectsData';
import ProjectGridItem from '../components/ProjectGridItem/ProjectGridItem';
import Background from '../components/UI/Background';
import ProjectGridItemSkeleton from '../components/ProjectGridItem/ProjectGridItemSkeleton';
import { useEffect, useState } from 'react';

const Projects = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projectStatus, setProjectStatus] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const projectGridItems = PROJECTS_DATA.map((project, index: number) => {
    let status;
    if (project.id === 0 && projectStatus[0]) status = projectStatus[0];
    // if (project.id === 0 && projectStatus[0]) status = projectStatus[1];
    if (project.id === 2 && projectStatus[0]) status = projectStatus[2];
    if (project.id === 3 && projectStatus[0]) status = projectStatus[3];

    return (
      <ProjectGridItem
        key={index}
        projectId={project.id}
        image={project.image}
        altText={project.altText}
        title={project.title}
        description={project.description}
        tags={project.tags}
        githubPath={project.gitHubPath}
        liveSitePath={project.liveSitePath}
        status={status !== undefined ? status : undefined}
      />
    );
  });

  const skeletonGridItems = Array.from(
    { length: 6 },
    (_, index) => index + 1
  ).map(index => <ProjectGridItemSkeleton key={index} />);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 350);
  }, []);

  async function getProjectStatus() {
    try {
      const status = await fetch('http://68.47.47.44:59650').then(res =>
        res.json()
      );
      const arr: boolean[] = Object.values(status).map(
        currentStatus => currentStatus === 'connected'
      );

      setProjectStatus(arr);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjectStatus();
  }, []);

  return (
    <div className="container projects-container">
      <Background className="projects-bg" />

      <h2>PROJECTS</h2>
      <div className="content">
        <div className="projects-grid">
          {!loading ? projectGridItems : skeletonGridItems}
        </div>
      </div>
    </div>
  );
};

export default Projects;
