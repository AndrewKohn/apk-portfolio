import CheckMark from '../../assets/svg/CheckMark';
import SocialsList from '../SocialsList/SocialsList';
import Card from '../UI/Card';
import './Heading.scss';

interface Props {}

const Heading = ({}) => {
  return (
    <Card classes="intro-card">
      <div className="heading-wrapper">
        <h1 className="primary-heading">Andrew Kohn</h1>
        <SocialsList iconSize="sm" />
      </div>

      <ul className="descriptions">
        <li className="description">
          <CheckMark className="checkmark" />
          <p>
            Front-end <strong>JavaScript/React Developer</strong>
          </p>
        </li>
        <li className="description">
          <CheckMark className="checkmark" />
          <p>
            Back-end <strong>Java Developer</strong>
          </p>
        </li>
        <li className="description">
          <CheckMark className="checkmark" />
          <p>
            A <strong>Detailed-oriented Self-Starter</strong>
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default Heading;