import { useRef } from 'react';
import classes from './App.module.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = props => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <main className={classes.main}>
      <NavBar
        heroRefProp={heroRef}
        aboutRefProp={aboutRef}
        projectsRefProp={projectsRef}
        ctaRefProp={ctaRef}
      />
      <Header refProp={heroRef} />
      <Skills />
      <About refProp={aboutRef} ctaRefProp={ctaRef} />
      <Projects refProp={projectsRef} />
      <Contact refProp={ctaRef} />
    </main>
  );
};

export default App;
