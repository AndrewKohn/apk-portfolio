import { useEffect, useState } from 'react';
import Avatar from '../assets/svg/avatars/Avatar';
import AvatarClosed from '../assets/svg/avatars/AvatarClosed';
import Card from '../components/UI/Card';
import './Style.scss';
import Button from '../components/UI/Button';
import resumeFile from '../assets/apk-resume.pdf';
import { Link } from 'react-router-dom';
import Background from '../components/UI/Background';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Skills from '../components/Skills/Skills';

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
      <Background className="about-bg" />

      <h2>ABOUT</h2>

      <div className="content">
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
                I love the process of taking an idea and bringing it to life
                through code. I'm constantly working to improve my skills and
                stay up-to-date with the latest developments in software
                development.
              </p>
            </Card>
          </div>
          <div className="link-wrapper">
            <a href={resumeFile} target="_blank" rel="noreferrer">
              <Button ariaLabel="resume button">
                RESUME{'    '}
                <BsBoxArrowUpRight />
              </Button>
            </a>
            <Link to="/contact">
              <Button ariaLabel="contact-page button">CONTACT ME</Button>
            </Link>
          </div>
        </div>

        <div className="about-skills-container">
          <div className="text-skills-wrapper">
            <Card classes="text-container">
              <p className="about-text">
                While I am pursuing a degree in Computer Science, at my core I
                am a self-taught developer that started their journey with{' '}
                <strong>C</strong> & <strong>Java</strong>. As a self-taught
                developer, I understand the importance of continuous learning
                and improvement. I'm always seeking out new resources and
                tutorials to expand my skills, and I enjoy collaborating with
                other developers to share knowledge and learn from their
                experiences.
              </p>
            </Card>
            <Card classes="text-container">
              <p className="about-text">
                One of my main focuses right now is{' '}
                <strong>contributing to open-source projects</strong>. I believe
                that collaborating with other developers and contributing to the
                community is not only a great way to learn and improve, but also
                a way to give back to the community. I'm currently volunteering
                my spare time and skills to help others and the environment.
              </p>
            </Card>
          </div>

          <Skills className="about-skills" />
        </div>

        <div className="about-wrapper">
          <Card classes="text-container">
            <p className="about-text">
              What I love most about being a developer is the opportunity to{' '}
              <strong>solve problems</strong> and <strong>create tools</strong>{' '}
              that make people's lives easier. I believe that good design and
              user experience are <strong>essential</strong> to building
              software that's not only functional but enjoyable to use.
            </p>
          </Card>
          <Card classes="text-container">
            <p className="about-text">
              When I'm not coding, I enjoy hiking & camping, woodworking,
              gardening, and exploring new recipes in the kitchen.
            </p>
            <p className="about-text align-left">
              If you read this far, <strong>thank you</strong> for visiting my
              site!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
