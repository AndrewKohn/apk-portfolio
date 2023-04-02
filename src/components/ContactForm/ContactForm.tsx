import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import './ContactForm.scss';

const ContactForm = ({}) => {
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
      e.target.value.includes('@') && e.target.value.includes('.')
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
        message.trim().length > 0
    );
  }, [nameInput, emailInput, message]);

  // Form Submission
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form action="" className="form" onSubmit={e => formSubmitHandler(e)}>
      <h4 className="form-heading">
        Send me a message
        <span className="emoji">👇</span>
      </h4>
      <div className="input-wrapper">
        <label htmlFor="name" className="label">
          Your Name
        </label>
        <input
          required
          type="text"
          name="name"
          className={`input--name ${isNameValid === false ? 'invalid' : ''}`}
          onChange={e => nameChangeHandler(e)}
          onBlur={e => validateNameHandler(e)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email" className="label">
          Your e-mail
        </label>
        <input
          required
          type="text"
          name="email"
          className={`input--email ${isEmailValid === false ? 'invalid' : ''}`}
          onChange={e => emailChangeHandler(e)}
          onBlur={e => validateEmailHandler(e)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          required
          name="message"
          className={`input--message ${hasMessage === false ? 'invalid' : ''}`}
          onChange={e => textAreaChangeHandler(e)}
          onBlur={e => validateTextAreaHandler(e)}
        />
      </div>
      <Button type="submit" classes={!isFormValid ? 'disabled' : ''}>
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
