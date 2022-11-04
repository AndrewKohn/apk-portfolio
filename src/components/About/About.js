import { useEffect, useState } from 'react';
import Avatar from '../../assets/svg/avatars/Avatar';
import AvatarClosed from '../../assets/svg/avatars/AvatarClosed';
import AvatarSide from '../../assets/svg/avatars/AvatarSide';
import classes from './About.module.css';

const About = props => {
  const [isEyesClosed, setIsEyesClosed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    console.log(isEyesClosed, blinkTiming);
  }, [isEyesClosed]);

  return (
    <div>
      {isEyesClosed ? (
        <AvatarClosed class={classes.avatar} />
      ) : (
        <Avatar class={classes.avatar} />
      )}

      <AvatarSide class={classes.avatar} />
    </div>
  );
};

export default About;
