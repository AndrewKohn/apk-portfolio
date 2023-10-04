import { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import Button from '../UI/Button';
import LoadingBars from '../UI/LoadingBars';
import './ContactForm.scss';

interface Props {
  validateNameForAvatar: (isNamePresent: boolean | undefined | null) => void;
  validateEmailForAvatar: (isEmailPresent: boolean | undefined | null) => void;
  validateMessageForAvatar: (
    isMessagePresent: boolean | undefined | null
  ) => void;
}

interface inputObject {
  nameInput: string;
  emailInput: string;
  message: string;
}

interface submissionStatus {
  isLoading: boolean;
  isSent: boolean;
}

interface validationStatus {
  isNameValid: boolean | undefined | null;
  isEmailValid: boolean | undefined | null;
  hasMessage: boolean | undefined | null;
  isFormValid: boolean;
}

const ContactForm = ({
  validateNameForAvatar,
  validateEmailForAvatar,
  validateMessageForAvatar,
}: Props) => {
  const [userInputs, setUserInputs] = useState<inputObject>({
    nameInput: '',
    emailInput: '',
    message: '',
  });
  const [validation, setValidation] = useState<validationStatus>({
    isNameValid: null,
    isEmailValid: null,
    hasMessage: null,
    isFormValid: false,
  });
  const [submission, setSubmission] = useState<submissionStatus>({
    isLoading: false,
    isSent: false,
  });

  // NAME
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs(prevState => ({
      ...prevState,
      nameInput: e.target.value,
    }));
  };

  const validateNameHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setValidation(prevState => ({
      ...prevState,
      isNameValid: e.target.value.trim().length > 0,
    }));
  };

  // EMAIL
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs(prevState => ({
      ...prevState,
      emailInput: e.target.value,
    }));
  };

  const validateEmailHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setValidation(prevState => ({
      ...prevState,
      isEmailValid:
        e.target.value.includes('@') &&
        e.target.value.includes('.') &&
        e.target.value.length > 5,
    }));
  };

  // MESSAGE
  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInputs(prevState => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const validateTextAreaHandler = (
    e: React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    setValidation(prevState => ({
      ...prevState,
      hasMessage: e.target.value.trim().length > 0,
    }));
  };

  // Validate all inputs in order to activate send button
  useEffect(() => {
    if (
      validation.isNameValid &&
      validation.isEmailValid &&
      validation.hasMessage
    ) {
      setValidation(prevState => ({
        ...prevState,
        isFormValid: true,
      }));
    } else {
      setValidation(prevState => ({
        ...prevState,
        isFormValid: false,
      }));
    }
  }, [validation.isNameValid, validation.isEmailValid, validation.hasMessage]);

  // Form Submission
  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmission(prevState => ({ ...prevState, isLoading: true }));

    // TODO: AWS for backend deployment
    try {
      const response = await fetch(
        'https://nameless-scrubland-27606-f38e606cfa40.herokuapp.com/post',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userInputs }),
        }
      );

      if (response.ok) {
        setSubmission({ isSent: true, isLoading: false });
        setUserInputs({
          nameInput: '',
          emailInput: '',
          message: '',
        });
        alert('Email sent successfully!');
      } else {
        setSubmission(prevState => ({ ...prevState, isLoading: false }));
        console.log(response);
        console.error('Failed to send message!');
        console.error(`Email: ${userInputs.emailInput}`);
        console.error(`Name: ${userInputs.nameInput}`);
        console.error(`Message: ${userInputs.message}`);
      }
    } catch (err) {
      setSubmission(prevState => ({ ...prevState, isLoading: false }));
      console.log(err);
    }
  };

  // AVATAR
  useEffect(() => {
    validateNameForAvatar(validation.isNameValid);
    validateEmailForAvatar(validation.isEmailValid);
    validateMessageForAvatar(validation.hasMessage);
  }, [validation.isNameValid, validation.isEmailValid, validation.hasMessage]);

  return (
    <form className="form" onSubmit={e => formSubmitHandler(e)}>
      <div className={`form ${submission.isSent ? 'form--fade-out' : ''}`}>
        <h4>
          Send me a message!
          <span className="emoji">👇</span>
        </h4>

        {/* NAME */}
        <div className="input-wrapper">
          <label
            htmlFor="name"
            className="label"
            id={`${validation.isNameValid === false ? 'invalid-text' : ''}`}
          >
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className={`input ${
              validation.isNameValid === false ? 'invalid' : ''
            }`}
            onChange={e => nameChangeHandler(e)}
            onBlur={e => validateNameHandler(e)}
            value={userInputs.nameInput}
          />
        </div>

        {/* EMAIL */}
        <div className="input-wrapper">
          <label
            htmlFor="email"
            className="label"
            id={`${validation.isEmailValid === false ? 'invalid-text' : ''}`}
          >
            Email
          </label>
          <input
            required
            type="text"
            id="email"
            name="email"
            placeholder={
              validation.isEmailValid === false
                ? 'Please enter a valid email...'
                : ''
            }
            className={`input input--email ${
              validation.isEmailValid === false ? 'invalid' : ''
            }`}
            onChange={e => emailChangeHandler(e)}
            onBlur={e => validateEmailHandler(e)}
            value={userInputs.emailInput}
          />
        </div>

        {/* MESSAGE */}
        <div className="input-wrapper">
          <label
            htmlFor="message"
            className="label label--message"
            id={`${validation.hasMessage === false ? 'invalid-text' : ''}`}
          >
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            className={`input input--message ${
              validation.hasMessage === false ? 'invalid' : ''
            }`}
            onChange={e => textAreaChangeHandler(e)}
            onBlur={e => validateTextAreaHandler(e)}
            value={userInputs.message}
          />
        </div>
        {submission.isLoading ? <LoadingBars /> : ''}
        <Button
          ariaLabel="contact button"
          type="submit"
          classes={!validation.isFormValid ? 'disabled' : ''}
        >
          Send
        </Button>
      </div>

      {submission.isSent ? (
        <div className="submission-successful-wrapper">
          <BsEnvelope className="envelope-icon" />
          <div className="checkmark-container">
            <AiFillCheckCircle className="checkmark-icon" />
            <div className="checkmark-pos" />
          </div>
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default ContactForm;
