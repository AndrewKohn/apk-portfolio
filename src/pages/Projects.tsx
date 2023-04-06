import './Style.scss';
import PROJECTS_DATA from '../data/ProjectsData';
import ProjectGridItem from '../components/ProjectGridItem/ProjectGridItem';

const Projects = ({}) => {
  const projectGridItems = PROJECTS_DATA.map((project, index: number) => {
    return (
      <ProjectGridItem
        key={index}
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

  return (
    <div className="container projects-container">
      <h2>PROJECTS</h2>
      <div className="content">
        <div className="projects-grid">{projectGridItems}</div>
      </div>
    </div>
  );
};

export default Projects;
