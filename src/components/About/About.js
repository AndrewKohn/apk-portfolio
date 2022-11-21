import { useEffect, useState } from 'react';
import Avatar from '../../assets/svg/avatars/Avatar';
import AvatarClosed from '../../assets/svg/avatars/AvatarClosed';
// import AvatarSide from '../../assets/svg/avatars/AvatarSide';
import AboutBG from '../../assets/svg/section-bg/AboutBG';
import Card from '../UI/Card';
import SecondaryHeading from '../UI/SecondaryHeading';
import resumeFile from '../../assets/andrew-kohn-resume.pdf';
import classes from './About.module.css';

const About = props => {
  const [isEyesClosed, setIsEyesClosed] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  //Avatar blinking
  useEffect(() => {
    const blinkTiming = Math.floor(Math.random() * 700);

    if (isEyesClosed) {
      setTimeout(() => {
        setIsEyesClosed(!isEyesClosed);
      }, blinkTiming);
    } else {
      setTimeout(() => {
        setIsEyesClosed(!isEyesClosed);
      }, 4000);
    }
  }, [isEyesClosed]);

  function clickLinkHandler(ref) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={classes[`about-section`]} ref={props.refProp}>
      <AboutBG class={classes[`about-bg`]} />

      <SecondaryHeading>About</SecondaryHeading>
      <div className={classes[`about-wrapper`]}>
        {isEyesClosed ? (
          <div className={classes[`avatar-container`]}>
            <AvatarClosed class={classes.avatar} />
          </div>
        ) : (
          <div className={classes[`avatar-container`]}>
            <Avatar class={classes.avatar} />
          </div>
        )}
        <div className={classes[`about-column`]}>
          <Card class={classes[`card-query`]}>
            <div className={classes[`text-wrapper`]}>
              <p className={classes.text}>
                A <strong>Web & Software Developer</strong> leveraging a
                background in healthcare that taught me discipline, achieving
                deadlines, and pursuing continuous growth making me a strong
                addition to any development team.
              </p>
              <p className={classes.text}>
                I am a highly-motivated and committed to pursuing a career
                change in <strong>Full-Stack Development</strong>. I primarily
                use JavaScript & its frameworks for the Front-End and Java for
                the Back-End, but picking up a new language or framework is
                always exciting!
              </p>
            </div>
          </Card>

          <div className={classes[`link-wrapper`]}>
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className={classes[`resume-link`]}
            >
              Résumé
            </a>
            <button
              className={classes[`about-btn--cta`]}
              onClick={() => clickLinkHandler(props.ctaRefProp)}
            >
              Contact me!
            </button>
          </div>
        </div>
      </div>
      {/* <AvatarSide class={classes.avatar} /> */}
    </section>
  );
};

export default About;
