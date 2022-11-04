import classes from './NavBar.module.css';
import GitHubIcon from '../../assets/svg/GitHubIcon';

const NavBar = props => {
  return (
    <div className={classes[`nav-container`]}>
      <a href="#top" className={classes.logo}>
        AK
      </a>

      <ul className={classes[`nav-list`]}>
        <li>
          <a href="#About" className={classes[`nav-list-link`]}>
            About
          </a>
        </li>
        <li>
          <a href="#Projects" className={classes[`nav-list-link`]}>
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" className={classes[`nav-list-link`]}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AndrewKohn"
            target="_blank"
            rel="noreferrer"
            className={classes[`nav-list-link`]}
          >
            <GitHubIcon class={classes.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
