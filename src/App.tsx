import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PROJECTS_DATA from './data/ProjectsData';
import ProjectPage from './pages/ProjectPage';

const App = ({}) => {
  const projectsRoutes = PROJECTS_DATA.map((project, index: number) => {
    return (
      <Route
        key={index}
        path={`/projects/${project.id}`}
        element={<ProjectPage project={project} />}
      />
    );
  });

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Project Pages */}
        {projectsRoutes}
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
