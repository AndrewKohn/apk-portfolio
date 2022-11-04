import HtmlIcon from '../../assets/svg/languages/HtmlIcon';
import CssIcon from '../../assets/svg/languages/CssIcon';
import JavaScriptIcon from '../../assets/svg/languages/JavaScriptIcon';
import ReactIcon from '../../assets/svg/languages/ReactIcon';
import NodeJSIcon from '../../assets/svg/languages/NodeJSIcon';
import MySQLIcon from '../../assets/svg/languages/MySQLIcon';
import JavaIcon from '../../assets/svg/languages/JavaIcon';
import PythonIcon from '../../assets/svg/languages/PythonIcon';
import SassIcon from '../../assets/svg/languages/SassIcon';
import NpmIcon from '../../assets/svg/languages/NpmIcon';
import GitIcon from '../../assets/svg/languages/GitIcon';
import classes from './Skills.module.css';
import SkillBanner from './SkillBanner';

const Skills = props => {
  return (
    <section className={classes[`skills-section`]}>
      <h2 className={classes[`secondary-heading`]}>Skills</h2>
      <div className={classes[`skills-wrapper`]}>
        <div className={classes[`skills-container`]}>
          <span className={classes[`sub-heading--skills`]}>Front-End</span>
          <SkillBanner
            skill={<HtmlIcon class={classes[`skill-icon`]} />}
            text="HTML5"
          />
          <SkillBanner
            skill={<CssIcon class={classes[`skill-icon`]} />}
            text="CSS3"
          />
          <SkillBanner
            skill={<JavaScriptIcon class={classes[`skill-icon`]} />}
            text="JavaScript"
          />
          <SkillBanner
            skill={<ReactIcon class={classes[`skill-icon`]} />}
            text="React"
          />
        </div>
        <div className={classes[`skills-container`]}>
          <span className={classes[`sub-heading--skills`]}>Back-End</span>
          <SkillBanner
            skill={<NodeJSIcon class={classes[`skill-icon`]} />}
            text="NodeJS"
          />
          <SkillBanner
            skill={<JavaIcon class={classes[`skill-icon`]} />}
            text="Java"
          />
          <SkillBanner
            skill={<MySQLIcon class={classes[`skill-icon`]} />}
            text="mySQL"
          />
          <SkillBanner
            skill={<PythonIcon class={classes[`skill-icon`]} />}
            text="Python"
          />
        </div>
        <div className={classes[`skills-container`]}>
          <span className={classes[`sub-heading--skills`]}>Tools</span>
          <SkillBanner
            skill={<SassIcon class={classes[`skill-icon`]} />}
            text="Sass"
          />
          <SkillBanner
            skill={<NpmIcon class={classes[`skill-icon`]} />}
            text="npm"
          />
          <SkillBanner
            skill={<GitIcon class={classes[`skill-icon`]} />}
            text="git"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
