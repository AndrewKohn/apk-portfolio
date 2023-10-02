import { useEffect, useState } from 'react';
import ContactAvatars from '../assets/svg/avatars/ContactAvatars';
import ContactForm from '../components/ContactForm/ContactForm';
import Background from '../components/UI/Background';
import Card from '../components/UI/Card';
import './Style.scss';

interface validationStatus {
  isNameValid: boolean | undefined | null;
  isEmailValid: boolean | undefined | null;
  hasMessage: boolean | undefined | null;
}

const Contact = ({}) => {
  // States will adjust colors of the avatar svg's based on its validity
  const [avatarValidation, setAvatarValidation] = useState<validationStatus>({
    isNameValid: null,
    isEmailValid: null,
    hasMessage: null,
  });

  const validateNameForAvatar = (isNamePresent: boolean | undefined | null) => {
    setAvatarValidation(prevState => ({
      ...prevState,
      isNameValid: isNamePresent,
    }));
  };

  const validateEmailForAvatar = (
    isEmailPresent: boolean | undefined | null
  ) => {
    setAvatarValidation(prevState => ({
      ...prevState,
      isEmailValid: isEmailPresent,
    }));
  };

  const validateMessageForAvatar = (
    isMessagePresent: boolean | undefined | null
  ) => {
    setAvatarValidation(prevState => ({
      ...prevState,
      hasMessage: isMessagePresent,
    }));
  };

  return (
    <div className="container contact-container">
      <Background className="contact-bg" />

      <h2>CONTACT</h2>

      <div className="content">
        <div className="contact-container">
          <Card idSelector="contact-card">
            <ContactAvatars
              className="contact-avatars"
              avatarValidation={avatarValidation}
            />
            <ContactForm
              validateNameForAvatar={validateNameForAvatar}
              validateEmailForAvatar={validateEmailForAvatar}
              validateMessageForAvatar={validateMessageForAvatar}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
