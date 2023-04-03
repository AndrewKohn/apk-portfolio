import ContactAvatars from '../assets/svg/avatars/ContactAvatars';
import ContactForm from '../components/ContactForm/ContactForm';
import Card from '../components/UI/Card';
import './Style.scss';

const Contact = ({}) => {
  return (
    <div className="container contact-container">
      <h2>CONTACT</h2>
      <Card idSelector="contact-card">
        <ContactAvatars className="contact-avatars" />
        <ContactForm />
      </Card>
    </div>
  );
};

export default Contact;
