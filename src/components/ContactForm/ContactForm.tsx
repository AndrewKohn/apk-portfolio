import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import './ContactForm.scss';

interface Props {
  validateNameForAvatar: (isNamePresent: boolean | undefined | null) => void;
  validateEmailForAvatar: (isEmailPresent: boolean | undefined | null) => void;
  validateMessageForAvatar: (
    isMessagePresent: boolean | undefined | null
  ) => void;
}

const ContactForm = ({
  validateNameForAvatar,
  validateEmailForAvatar,
  validateMessageForAvatar,
}: Props) => {
  const [nameInput, setNameInput] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean | undefined | null>();
  const [emailInput, setEmailInput] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<
    boolean | undefined | null
  >();
  const [message, setMessage] = useState<string>('');
  const [hasMessage, setHasMessage] = useState<boolean | undefined | null>();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // NAME
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const validateNameHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setIsNameValid(e.target.value.trim().length > 0);
  };

  // EMAIL
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const validateEmailHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setIsEmailValid(
      e.target.value.includes('@') &&
        e.target.value.includes('.') &&
        emailInput.length > 5
    );
  };

  // MESSAGE
  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const validateTextAreaHandler = (
    e: React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    setHasMessage(e.target.value.trim().length > 0);
  };

  // Validate all inputs in order to activate send button
  useEffect(() => {
    setIsFormValid(
      nameInput.trim().length > 0 &&
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        emailInput.length > 5 &&
        message.trim().length > 0
    );
  }, [nameInput, emailInput, message]);

  // Form Submission
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // AVATAR
  useEffect(() => {
    validateNameForAvatar(isNameValid);
    validateEmailForAvatar(isEmailValid);
    validateMessageForAvatar(hasMessage);
  }, [isNameValid, isEmailValid, hasMessage]);

  return (
    <form
      action="https://formsubmit.co/contact@kohnandrew.com"
      method="POST"
      className="form"
      // onSubmit={e => formSubmitHandler(e)}
    >
      <h4>
        Send me a message!
        <span className="emoji">👇</span>
      </h4>

      {/* NAME */}
      <div className="input-wrapper">
        <label
          htmlFor="name"
          className="label"
          id={`${isNameValid === false ? 'invalid-text' : ''}`}
        >
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className={`input ${isNameValid === false ? 'invalid' : ''}`}
          onChange={e => nameChangeHandler(e)}
          onBlur={e => validateNameHandler(e)}
        />
      </div>

      {/* EMAIL */}
      <div className="input-wrapper">
        <label
          htmlFor="email"
          className="label"
          id={`${isEmailValid === false ? 'invalid-text' : ''}`}
        >
          Email
        </label>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder={
            isEmailValid === false ? 'Please enter a valid email...' : ''
          }
          className={`input input--email ${
            isEmailValid === false ? 'invalid' : ''
          }`}
          onChange={e => emailChangeHandler(e)}
          onBlur={e => validateEmailHandler(e)}
        />
      </div>

      {/* MESSAGE */}
      <div className="input-wrapper">
        <label
          htmlFor="message"
          className="label label--message"
          id={`${hasMessage === false ? 'invalid-text' : ''}`}
        >
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          className={`input input--message ${
            hasMessage === false ? 'invalid' : ''
          }`}
          onChange={e => textAreaChangeHandler(e)}
          onBlur={e => validateTextAreaHandler(e)}
        />
      </div>
      <input type="hidden" name="_captcha" value="false" />
      <Button
        ariaLabel="contact button"
        type="submit"
        classes={!isFormValid ? 'disabled' : ''}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
