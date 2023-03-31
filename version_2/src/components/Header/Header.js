import classes from './Header.module.css';
import CheckMark from '../../assets/svg/CheckMark';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import TwitterIcon from '../../assets/svg/TwitterIcon';
import InstagramIcon from '../../assets/svg/InstagramIcon';
import HeroBG from '../../assets/svg/section-bg/HeroBG';
import BlobBG from '../../assets/svg/section-bg/BlobBG';
import AlternateCard from '../UI/AlternateCard';

const Header = props => {
  return (
    <section className={classes[`hero-container`]} ref={props.refProp}>
      <HeroBG class={classes[`hero-bg`]} />
      <BlobBG class={classes[`blob-bg`]} />

      <AlternateCard class={classes[`card-query`]}>
        <div className={classes[`header-container`]}>
          <h1 className={classes[`primary-header`]}>
            Andrew <br />
            <span>Kohn</span>
          </h1>
          <ul className={classes[`socials-list`]}>
            <li>
              <a
                href="https://www.linkedin.com/in/kohnandrew/"
                aria-label="LinkedIn url"
                className={classes[`socials-link`]}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon class={classes.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AndrewKohn/"
                aria-label="GitHub url"
                className={classes[`socials-link`]}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon class={classes.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/KohnAndrew_dev"
                aria-label="Twitter url"
                className={classes[`socials-link`]}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon class={classes.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kohnandrew_dev/"
                aria-label="Instagram url"
                className={classes[`socials-link`]}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon class={classes.icon} />
              </a>
            </li>
          </ul>
        </div>

        <ul className={classes[`description-list`]}>
          <li>
            <CheckMark class={classes.checkmark} />
            <span>
              Front-end <strong>JavaScript/React Developer</strong>
            </span>
          </li>
          <li>
            <CheckMark class={classes.checkmark} />
            <span>
              Back-end <strong>Java Developer</strong>
            </span>
          </li>
          <li>
            <CheckMark class={classes.checkmark} />
            <span>
              A <strong>Detailed-oriented Self-Starter</strong>
            </span>
          </li>
        </ul>
      </AlternateCard>
    </section>
  );
};

export default Header;
