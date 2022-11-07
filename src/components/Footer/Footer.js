import GitHubIcon from '../../assets/svg/GitHubIcon';
import TwitterIcon from '../../assets/svg/TwitterIcon';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';

const Footer = props => {
  const date = new Date().toString().split(' ')[3];

  return (
    <footer className={classes.footer}>
      <Logo heroRefProp={props.heroRefProp} />
      <ul className={classes[`social-links`]}>
        <li>
          <a href="#top" className={classes[`social-link`]}>
            <LinkedInIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
        <li>
          <a href="#top" className={classes[`social-link`]}>
            <GitHubIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
        <li>
          <a href="#top" className={classes[`social-link`]}>
            <TwitterIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
      </ul>
      <span className={classes.copyright}>Handcrafted by me © {date}</span>
    </footer>
  );
};

export default Footer;
