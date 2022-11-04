import classes from './NavBar.module.css';
import githubIcon from '../../assets/svg/GitHubIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';

const NavBar = props => {
  return (
    <div className={classes[`nav-container`]}>
      <span className={classes.logo}>LOGO</span>

      <ul className={classes[`nav-list`]}>
        <li>
          <a href="#" className={classes[`nav-list-link`]}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={classes[`nav-list-link`]}>
            Projects
          </a>
        </li>
        <li>
          <a href="#" className={classes[`nav-list-link`]}>
            Contact
          </a>
        </li>
        <li>
          <a href="#" className={classes[`nav-list-link`]}>
            <GitHubIcon iconClass={classes.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
