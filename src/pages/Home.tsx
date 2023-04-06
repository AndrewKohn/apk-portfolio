import './Style.scss';
import Heading from '../components/Heading/Heading';
import Skills from '../components/Skills/Skills';
import Background from '../components/UI/Background';

const Home = ({}) => {
  return (
    <section className="container home-container">
      <Background />
      <div className="content">
        <Heading />
        <Skills />
      </div>
    </section>
  );
};

export default Home;
