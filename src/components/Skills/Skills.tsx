import CssIcon from '../../assets/svg/languages/CssIcon';
import GitIcon from '../../assets/svg/languages/GitIcon';
import HtmlIcon from '../../assets/svg/languages/HtmlIcon';
import JavaIcon from '../../assets/svg/languages/JavaIcon';
import JavaScriptIcon from '../../assets/svg/languages/JavaScriptIcon';
import JestIcon from '../../assets/svg/languages/JestIcon';
import MySQLIcon from '../../assets/svg/languages/MySQLIcon';
import NodeJSIcon from '../../assets/svg/languages/NodeJSIcon';
import PythonIcon from '../../assets/svg/languages/PythonIcon';
import ReactIcon from '../../assets/svg/languages/ReactIcon';
import SassIcon from '../../assets/svg/languages/SassIcon';
import TailwindIcon from '../../assets/svg/languages/TailwindIcon';
import TypeScriptIcon from '../../assets/svg/languages/TypeScriptIcon';
import ViteIcon from '../../assets/svg/languages/ViteIcon';
import './Skills.scss';

interface Props {}

const Skills = ({}) => {
  const frontEndSkills = [
    {
      text: 'HTML5',
      icon: <HtmlIcon className="skill-icon" />,
    },
    {
      text: 'CSS3',
      icon: <CssIcon className="skill-icon" />,
    },
    {
      text: 'Sass',
      icon: <SassIcon className="skill-icon" />,
    },
    {
      text: 'Tailwind',
      icon: <TailwindIcon className="skill-icon" />,
    },
    {
      text: 'JavaScript',
      icon: <JavaScriptIcon className="skill-icon" />,
    },
    {
      text: 'TypeScript',
      icon: <TypeScriptIcon className="skill-icon" />,
    },
    {
      text: 'React',
      icon: <ReactIcon className="skill-icon" />,
    },
  ];
  const backEndSkills = [
    {
      text: 'Node.js',
      icon: <NodeJSIcon className="skill-icon" />,
    },
    {
      text: 'Java',
      icon: <JavaIcon className="skill-icon" />,
    },
    {
      text: 'Python',
      icon: <PythonIcon className="skill-icon" />,
    },
    {
      text: 'MySQL',
      icon: <MySQLIcon className="skill-icon" />,
    },
  ];
  const toolsSkills = [
    {
      text: 'Git',
      icon: <GitIcon className="skill-icon" />,
    },
    {
      text: 'Jest',
      icon: <JestIcon className="skill-icon" />,
    },
    {
      text: 'Vite',
      icon: <ViteIcon className="skill-icon" />,
    },
  ];

  return (
    <div className="skills-container">
      <h3 className="skills-heading">Skills</h3>
      <div className="skills-wrapper">
        <div className="skill-section">
          <h4 className="skill-title">Front-End</h4>
          <div className="skill-section-wrapper">
            {frontEndSkills.map((skill, index) => (
              <div key={index} className="skill-banner">
                {skill.icon}
                <p className="skill-text">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <h4 className="skill-title">Back-End</h4>
          <div className="skill-section-wrapper">
            {backEndSkills.map((skill, index) => (
              <div key={index} className="skill-banner">
                {skill.icon}
                <p className="skill-text">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <h4 className="skill-title">Tools</h4>
          <div className="skill-section-wrapper">
            {toolsSkills.map((tool, index) => (
              <div key={index} className="skill-banner">
                {tool.icon}
                <p className="skill-text">{tool.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
