import ContactAvatars from '../assets/svg/avatars/ContactAvatars';
import ContactForm from '../components/ContactForm/ContactForm';
import Card from '../components/UI/Card';
import './Style.scss';

const Contact = ({}) => {
  return (
    <div className="container">
      <h2>CONTACT</h2>
      <Card classes="form-container">
        <ContactAvatars className="contact-avatars" />
        <div className="form-wrapper">
          <ContactForm />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
