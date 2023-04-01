import './SocialsList.scss';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import TwitterIcon from '../../assets/svg/TwitterIcon';
import InstagramIcon from '../../assets/svg/InstagramIcon';

interface Props {
  iconSize: string;
}

const SocialsList = ({ iconSize }: Props) => {
  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kohnandrew/',
      icon: <LinkedInIcon className={`icon--${iconSize}`} />,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/AndrewKohn/',
      icon: <GitHubIcon className={`icon--${iconSize}`} />,
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/KohnAndrew_dev',
      icon: <TwitterIcon className={`icon--${iconSize}`} />,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/kohnandrew_dev/',
      icon: <InstagramIcon className={`icon--${iconSize}`} />,
    },
  ];

  return (
    <ul className="socials">
      {socials.map((social, index) => (
        <li key={index} className="social">
          <a
            href={social.link}
            aria-label={`${social.name} url`}
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
