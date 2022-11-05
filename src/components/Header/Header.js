import classes from './Header.module.css';
import CheckMark from '../../assets/svg/CheckMark';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import HeroBG from '../../assets/svg/section-bg/HeroBG';
import BlobBG from '../../assets/svg/section-bg/BlobBG';
import Card from '../UI/Card';

const Header = props => {
  return (
    <section className={classes[`hero-container`]} ref={props.refProp}>
      <HeroBG class={classes[`hero-bg`]} />
      <BlobBG class={classes[`blob-bg`]} />

      <Card>
        <div className={classes[`header-container`]}>
          <h1 className={classes[`primary-header`]}>
            Andrew <br />
            <span>Kohn</span>
          </h1>
          <ul className={classes[`socials-list`]}>
            <li>
              <a
                href="https://github.com/AndrewKohn/apk-portfolio-v2"
                className={classes[`socials-link`]}
              >
                <LinkedInIcon class={classes.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AndrewKohn/apk-portfolio-v2"
                className={classes[`socials-link`]}
              >
                <GitHubIcon class={classes.icon} />
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
      </Card>
    </section>
  );
};

export default Header;
