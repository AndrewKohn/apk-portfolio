import SecondaryHeading from '../UI/SecondaryHeading';
import AlternateCard from '../UI/AlternateCard';
import classes from './Contact.module.css';
import ContactAvatars from '../../assets/svg/avatars/ContactAvatars';
import CtaBG from '../../assets/svg/section-bg/CtaBG';
import { useEffect, useState } from 'react';

const Contact = props => {
  const [nameInput, setNameInput] = useState('');
  const [nameIsValid, setNameIsValid] = useState();
  const [emailInput, setEmailInput] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [textAreaInput, setTextAreaInput] = useState('');
  const [textAreaHasInput, setTextAreaHasInput] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      nameInput.trim().length > 0 &&
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        textAreaInput.trim().length > 0
    );
  }, [nameInput, emailInput, textAreaInput]);

  // NAME
  const nameChangeHandler = event => {
    setNameInput(event.target.value);
  };

  const validateNameHandler = event => {
    setNameIsValid(event.target.value.trim().length > 0);
  };

  // EMAIL
  const emailChangeHandler = event => {
    setEmailInput(event.target.value);
  };

  const validateEmailHandler = event => {
    setEmailIsValid(
      event.target.value.includes('@') && event.target.value.includes('.')
    );
  };

  // MESSAGE
  const textAreaChangeHandler = event => {
    setTextAreaInput(event.target.value);
  };

  const validateTextAreaHandler = event => {
    setTextAreaHasInput(event.target.value.trim().length > 0);
  };

  const formSubmitHandler = event => {};

  return (
    <section className={classes[`cta-section`]} ref={props.refProp}>
      <CtaBG class={classes[`cta-bg`]} />

      <SecondaryHeading>Contact</SecondaryHeading>

      <ContactAvatars class={classes[`cta-avatar`]} />
      <div>
        <AlternateCard class={classes[`cta-card`]}>
          <form
            className={classes.form}
            action="https://formsubmit.co/contact@kohnandrew.com"
            method="POST"
            onSubmit={formSubmitHandler}
          >
            <h3 className={classes[`sub-heading`]}>
              Send me a message <span className={classes.emoji}>👇</span>
            </h3>
            <label className={classes.label} htmlFor="name">
              Name
            </label>
            <input
              required
              className={`${classes.input} ${
                nameIsValid === false ? classes.invalid : ''
              }`}
              type="text"
              name="name"
              id="name"
              placeholder={
                nameIsValid === false ? 'Please provide a name...' : ''
              }
              onChange={nameChangeHandler}
              onBlur={validateNameHandler}
            />
            <label className={classes.label} htmlFor="email">
              Email
            </label>
            <input
              required
              className={`${classes.input} ${
                emailIsValid === false ? classes.invalid : ''
              }`}
              type="text"
              name="email"
              id="email"
              placeholder={
                emailIsValid === false ? 'Please provide a valid e-mail...' : ''
              }
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <label className={classes.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={`${classes[`text-box`]} ${
                textAreaHasInput === false ? classes.invalid : ''
              }`}
              name="message"
              id="message"
              placeholder={
                textAreaHasInput === false
                  ? 'Please enter your message...'
                  : 'Enter your message...'
              }
              onChange={textAreaChangeHandler}
              onBlur={validateTextAreaHandler}
            />{' '}
            <input type="hidden" name="_captcha" value="false" />
            <button
              className={`${classes[`submit-btn`]} ${
                formIsValid === false ? classes.disabled : ''
              }`}
              type="submit"
            >
              Send
            </button>
          </form>
        </AlternateCard>
      </div>
    </section>
  );
};

export default Contact;
