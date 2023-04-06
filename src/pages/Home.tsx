import './Style.scss';
import Heading from '../components/Heading/Heading';
import Skills from '../components/Skills/Skills';

const Home = ({}) => {
  return (
    <section className="container home-container">
      <div className="content">
        <Heading />
        <Skills />
      </div>
    </section>
  );
};

export default Home;
