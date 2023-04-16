import CheckMark from '../../assets/svg/CheckMark';
import SocialsList from '../SocialsList/SocialsList';
import Card from '../UI/Card';
import './Heading.scss';

const Heading = ({}) => {
  return (
    <Card classes="intro-card">
      <div className="heading-wrapper">
        <h1>
          Andrew
          <br />
          <span>Kohn</span>
        </h1>
        <SocialsList iconType="sm" />
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
            Back-end <strong>Nodejs & Java Developer</strong>
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
