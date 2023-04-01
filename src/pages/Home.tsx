import './Style.scss';
import Heading from '../components/Heading/Heading';
import Skills from '../components/Skills/Skills';

interface Props {}

const Home = ({}) => {
  return (
    <section className="container home-container">
      <Heading />
      <Skills />
    </section>
  );
};

export default Home;
