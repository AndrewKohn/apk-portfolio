import GitHubIcon from '../../assets/svg/GitHubIcon';
import TwitterIcon from '../../assets/svg/TwitterIcon';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import InstagramIcon from '../../assets/svg/InstagramIcon';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';

const Footer = props => {
  const date = new Date().toString().split(' ')[3];

  return (
    <footer className={classes.footer}>
      <Logo heroRefProp={props.heroRefProp} />
      <ul className={classes[`social-links`]}>
        <li>
          <a
            href="https://www.linkedin.com/in/kohnandrew/"
            aria-label="LinkedIn url"
            className={classes[`social-link`]}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AndrewKohn/"
            aria-label="GitHub url"
            className={classes[`social-link`]}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/KohnAndrew_dev"
            aria-label="Twitter url"
            className={classes[`social-link`]}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kohnandrew_dev/"
            aria-label="Instagram url"
            className={classes[`social-link`]}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon class={classes[`social-link-icon`]} />
          </a>
        </li>
      </ul>
      <span className={classes.copyright}>Handcrafted by me © {date}</span>
    </footer>
  );
};

export default Footer;
