import classes from './Logo.module.css';

const Logo = props => {
  function clickLinkHandler(ref) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button
      className={`${classes.logo} ${props.class}`}
      onClick={() => clickLinkHandler(props.heroRefProp)}
    >
      AK
    </button>
  );
};

export default Logo;
