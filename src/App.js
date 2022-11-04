import classes from './App.module.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = props => {
  return (
    <main className={classes.main}>
      <NavBar />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
