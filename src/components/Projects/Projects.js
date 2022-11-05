import SecondaryHeading from '../UI/SecondaryHeading';
import ProjectGridItem from './ProjectGridItem';
import exImg from '../../assets/img/ex-img.png';
import classes from './Projects.module.css';

const Projects = props => {
  const projectGridItem = PROJECTS_DATA.map(project => (
    <ProjectGridItem
      key={project.id}
      image={project.image}
      altText={project.altText + (project.id + 1)}
      title={project.title}
      description={project.description}
      tags={project.tags}
      gitHubPath={project.gitHubPath}
      liveSitePath={project.liveSitePath}
    />
  ));

  return (
    <section className={classes[`project-section`]} ref={props.refProp}>
      <SecondaryHeading>Projects</SecondaryHeading>
      <div className={classes.grid}>{projectGridItem}</div>
    </section>
  );
};

const PROJECTS_DATA = [
  {
    id: 0,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: ['HTMLIcon', 'CssIcon', 'JavaScriptIcon', 'ReactIcon'],
    gitHubPath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
    liveSitePath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
  },
  {
    id: 1,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: ['HTMLIcon', 'CssIcon', 'JavaScriptIcon', 'ReactIcon'],
    gitHubPath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
    liveSitePath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
  },
  {
    id: 2,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: ['HTMLIcon', 'CssIcon', 'JavaScriptIcon', 'ReactIcon'],
    gitHubPath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
    liveSitePath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
  },
  {
    id: 3,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: ['HTMLIcon', 'CssIcon', 'JavaScriptIcon', 'ReactIcon'],
    gitHubPath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
    liveSitePath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
  },
  {
    id: 4,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: ['HTMLIcon', 'CssIcon', 'JavaScriptIcon', 'ReactIcon'],
    gitHubPath: '',
    liveSitePath: '',
  },
  {
    id: 5,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: ['HTMLIcon', 'CssIcon', 'JavaScriptIcon', 'ReactIcon'],
    gitHubPath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
    liveSitePath: 'https://github.com/AndrewKohn/apk-portfolio-v2',
  },
];

export default Projects;
