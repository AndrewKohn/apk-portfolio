import classes from './NavBar.module.css';
import GitHubIcon from '../../assets/svg/GitHubIcon';

const NavBar = props => {
  function clickLinkHandler(ref) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={classes[`nav-container`]}>
      <button
        className={classes.logo}
        onClick={() => clickLinkHandler(props.heroRefProp)}
      >
        AK
      </button>

      <ul className={classes[`nav-list`]}>
        <li>
          <button
            className={classes[`nav-list-btn`]}
            onClick={() => clickLinkHandler(props.aboutRefProp)}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={classes[`nav-list-btn`]}
            onClick={() => clickLinkHandler(props.projectsRefProp)}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={classes[`nav-list-btn`]}
            onClick={() => clickLinkHandler(props.ctaRefProp)}
          >
            Contact
          </button>
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
