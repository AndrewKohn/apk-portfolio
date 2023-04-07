import { useEffect, useState } from 'react';
import ContactAvatars from '../assets/svg/avatars/ContactAvatars';
import ContactForm from '../components/ContactForm/ContactForm';
import Background from '../components/UI/Background';
import Card from '../components/UI/Card';
import './Style.scss';

const Contact = ({}) => {
  const [isNameValid, setIsNameValid] = useState<boolean | undefined | null>();
  const [isEmailValid, setIsEmailValid] = useState<
    boolean | undefined | null
  >();
  const [hasMessage, setHasMessage] = useState<boolean | undefined | null>();

  const validateNameForAvatar = (isNamePresent: boolean | undefined | null) => {
    setIsNameValid(isNamePresent);
  };

  const validateEmailForAvatar = (
    isEmailPresent: boolean | undefined | null
  ) => {
    setIsEmailValid(isEmailPresent);
  };

  const validateMessageForAvatar = (
    isMessagePresent: boolean | undefined | null
  ) => {
    setHasMessage(isMessagePresent);
  };

  // useEffect(() => {
  //   console.log('name', isNameValid);
  //   console.log('email', isEmailValid);
  //   console.log('message', hasMessage);
  // }, [isNameValid, isEmailValid, hasMessage]);

  return (
    <div className="container contact-container">
      <Background className="contact-bg" />

      <h2>CONTACT</h2>

      <div className="content">
        <Card idSelector="contact-card">
          <ContactAvatars
            className="contact-avatars"
            isNameValid={isNameValid}
            isEmailValid={isEmailValid}
            hasMessage={hasMessage}
          />
          <ContactForm
            validateNameForAvatar={validateNameForAvatar}
            validateEmailForAvatar={validateEmailForAvatar}
            validateMessageForAvatar={validateMessageForAvatar}
          />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
