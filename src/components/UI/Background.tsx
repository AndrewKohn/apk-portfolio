import './Background.scss';

interface Props {
  className?: string;
}

const Background = ({ className }: Props) => {
  return <div className={`background ${className}`} />;
};

export default Background;
