import { Link } from 'react-router-dom';
import './NavBar.scss';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import { Fragment, useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

interface Props {
  location: string;
}

const NavBar = ({ location }: Props) => {
  const [isNavModalVisible, setIsNavModalVisible] = useState<boolean>(false);

  const backdropClickHandler = () => {
    setIsNavModalVisible(!isNavModalVisible);
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link--home">
        AK
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={`${location === '/' ? 'current-page' : 'nav-link'}`}
        >
          HOME
        </Link>
        <Link
          to="/about"
          className={`${location === '/about' ? 'current-page' : 'nav-link'}`}
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          className={`${
            location === '/projects' ? 'current-page' : 'nav-link'
          }`}
        >
          PROJECTS
        </Link>
        <Link
          to="/contact"
          className={`${location === '/contact' ? 'current-page' : 'nav-link'}`}
        >
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

      {/* Mobile Navigation */}
      <button
        aria-label="mobile nav bar button"
        className={`hamburger-menu ${isNavModalVisible ? 'selected' : ''}`}
        onClick={() => setIsNavModalVisible(!isNavModalVisible)}
      >
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        {isNavModalVisible ? (
          <Fragment>
            <MdOutlineClose className="close-button" />
            <Fragment>
              <div className="backdrop" onClick={backdropClickHandler}></div>
              <div className="modal">
                <div className="modal-links">
                  <Link
                    to="/"
                    className={`nav-link ${
                      location === '/' ? 'current-page--mobile' : ''
                    }`}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/about"
                    className={`nav-link ${
                      location === '/about' ? 'current-page--mobile' : ''
                    }`}
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/projects"
                    className={`nav-link ${
                      location === '/projects' ? 'current-page--mobile' : ''
                    }`}
                  >
                    PROJECTS
                  </Link>
                  <Link
                    to="/contact"
                    className={`nav-link ${
                      location === '/contact' ? 'current-page--mobile' : ''
                    }`}
                  >
                    CONTACT
                  </Link>
                  <a
                    href="https://github.com/AndrewKohn/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub url"
                    className="nav-link--github-container"
                  >
                    <GitHubIcon className="nav-link--github" />
                  </a>
                </div>
              </div>
            </Fragment>
          </Fragment>
        ) : (
          ''
        )}
      </button>
    </nav>
  );
};

export default NavBar;
