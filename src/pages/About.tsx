import { useEffect, useState } from 'react';
import Avatar from '../assets/svg/avatars/Avatar';
import AvatarClosed from '../assets/svg/avatars/AvatarClosed';
import Card from '../components/UI/Card';
import './Style.scss';

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
    <div className="container">
      <h2>ABOUT</h2>
      <div className="about-wrapper">
        <div className="avatar-container">
          {isEyesClosed ? (
            <Avatar className="avatar" />
          ) : (
            <AvatarClosed className="eyes-closed" />
          )}
        </div>
        <Card>
          <p className="about-text">
            A <strong>Web & Software Developer</strong> leveraging a background
            in healthcare that taught me discipline, achieving deadlines, and
            pursuing continuous growth making me a strong addition to any
            development team.
          </p>
          <p className="about-text">
            I am a highly-motivated and committed to pursuing a career change in{' '}
            <strong>Full-Stack Development</strong>. I primarily use JavaScript
            & its frameworks for the Front-End and Java for the Back-End, but
            picking up a new language or framework is always exciting!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
