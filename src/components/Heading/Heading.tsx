import { useEffect, useState } from 'react';
import CheckMark from '../../assets/svg/CheckMark';
import SocialsList from '../SocialsList/SocialsList';
import Card from '../UI/Card';
import './Heading.scss';
import { Skeleton } from '@mui/material';

const Heading = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 350);
  }, []);

  return (
    <Card classes="intro-card">
      <div className="intro-wrapper">
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
      </div>
    </Card>
  );
};

export default Heading;
