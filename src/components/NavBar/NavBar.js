import classes from './NavBar.module.css';
import GitHubIcon from '../../assets/svg/GitHubIcon';

const NavBar = props => {
  return (
    <div className={classes[`nav-container`]}>
      <button className={classes.logo}>AK</button>

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
            <GitHubIcon class={classes.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
