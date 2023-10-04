import Background from '../components/UI/Background';
import './Style.scss';

const PageNotFound = ({}) => {
  return (
    <div className="container page-not-found-container">
      <Background className="page-not-found-bg" />
      <h2 className="page-not-found-heading">404</h2>
      <div className="content">
        <p className="page-not-found-text">PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default PageNotFound;
