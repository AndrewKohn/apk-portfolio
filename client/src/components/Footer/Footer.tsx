import SocialsList from '../SocialsList/SocialsList';
import './Footer.scss';

interface Props {}

const Footer = ({}) => {
  const date = new Date().toString().split(' ')[3];

  return (
    <footer className="footer">
      <SocialsList iconType="bordered" />
      <p className="copyright">Andrew Kohn © {date}</p>
    </footer>
  );
};

export default Footer;
