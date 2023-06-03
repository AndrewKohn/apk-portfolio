import './Style.scss';
import PROJECTS_DATA from '../data/ProjectsData';
import ProjectGridItem from '../components/ProjectGridItem/ProjectGridItem';
import Background from '../components/UI/Background';
import ProjectGridItemSkeleton from '../components/ProjectGridItem/ProjectGridItemSkeleton';
import { useEffect, useState } from 'react';

const Projects = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const projectGridItems = PROJECTS_DATA.map((project, index: number) => {
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
