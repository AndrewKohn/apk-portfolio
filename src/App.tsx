import './App.scss';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PROJECTS_DATA from './data/ProjectsData';
import ProjectPage from './pages/ProjectPage';
import PageNotFound from './pages/PageNotFound';
import LoadingBars from './components/UI/LoadingBars';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));

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
      <Suspense fallback={<LoadingBars />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Project Pages */}
          {projectsRoutes}
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
};

export default App;
