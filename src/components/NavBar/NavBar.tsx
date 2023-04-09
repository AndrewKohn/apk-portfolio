import { Link } from 'react-router-dom';
import './NavBar.scss';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import { Fragment, useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const NavBar = ({}) => {
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

      <button
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
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
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
