import { Link } from 'react-router-dom';
import './NavBar.scss';
import GitHubIcon from '../../assets/svg/GitHubIcon';

const NavBar = ({}) => {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-link--home">
        AK
      </Link>

      <div className="nav-links">
        <Link to="/about" className="nav-link">
          ABOUT
        </Link>
        <Link to="/projects" className="nav-link">
          PROJECTS
        </Link>
        <Link to="/contact" className="nav-link">
          CONTACT
        </Link>
        <a
          href="https://github.com/AndrewKohn/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub url"
        >
          <GitHubIcon className="nav-link--github" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
