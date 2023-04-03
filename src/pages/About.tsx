import { useEffect, useState } from 'react';
import Avatar from '../assets/svg/avatars/Avatar';
import AvatarClosed from '../assets/svg/avatars/AvatarClosed';
import Card from '../components/UI/Card';
import './Style.scss';
import Button from '../components/UI/Button';
import resumeFile from '../assets/apk-resume.pdf';
import { Link } from 'react-router-dom';

const About = ({}) => {
  const [isEyesClosed, setIsEyesClosed] = useState<boolean>(false);

  useEffect(() => {
    const blinkTiming = Math.floor(Math.random() * 700);

    isEyesClosed
      ? setTimeout(() => {
          // Avatar eyes are open
          setIsEyesClosed(!isEyesClosed);
        }, 3500)
      : setTimeout(() => {
          // Avatar blinks
          setIsEyesClosed(!isEyesClosed);
        }, blinkTiming);
  }, [isEyesClosed]);

  return (
    <div className="container about-container">
      <h2>ABOUT</h2>

      <div className="about-wrapper">
        <div className="about-info-wrapper">
          <div className="avatar-container">
            {isEyesClosed ? (
              <Avatar className="avatar" />
            ) : (
              <AvatarClosed className="avatar" />
            )}
          </div>

          <Card classes="text-container">
            <p className="about-text">
              A <strong>Web & Software Developer</strong> leveraging a
              background in healthcare that taught me discipline, achieving
              deadlines, and pursuing continuous growth making me a strong
              addition to any development team.
            </p>
            <p className="about-text">
              I am a highly-motivated and committed to pursuing a career change
              in <strong>Full-Stack Development</strong>. I primarily use
              JavaScript & its frameworks for the Front-End and Java for the
              Back-End, but picking up a new language or framework is always
              exciting!
            </p>
          </Card>
        </div>
        <div className="link-wrapper">
          <a href={resumeFile} target="_blank" rel="noreferrer">
            <Button>RESUME</Button>
          </a>
          <Link to="/contact">
            <Button>CONTACT ME</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
