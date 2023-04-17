import './LoadingBars.scss';

interface Props {}

const LoadingBars = ({}) => {
  return (
    <div className="loading-bars" data-testid="loading-bars">
      <div data-testid="loading-bar"></div>
      <div data-testid="loading-bar"></div>
      <div data-testid="loading-bar"></div>
      <div data-testid="loading-bar"></div>
    </div>
  );
};

export default LoadingBars;
