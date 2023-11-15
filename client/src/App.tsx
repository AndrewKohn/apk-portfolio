import './App.scss';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  // const [projectStatus, setProjectStatus] = useState<boolean[]>([
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // useEffect(() => {
  //   async function getProjectStatus() {
  //     try {
  //       const response = await fetch('http://68.47.47.44:59650');
  //       if (response.ok) {
  //         const status = await response.json();
  //         const arr: boolean[] = Object.values(status).map(
  //           currentStatus => currentStatus === 'connected'
  //         );

  //         setProjectStatus(arr);
  //       } else {
  //         console.error('Failed to fetch project status:', response.status);
  //         setProjectStatus([false, false, false, false]);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch project status:', error);
  //       setProjectStatus([false, false, false, false]);
  //     }
  //   }

  //   getProjectStatus();
  // }, []);

  const projectsRoutes = PROJECTS_DATA.map((project, index: number) => {
    return (
      <Route
        key={index}
        path={`/projects/${project.id}`}
        element={
          // <ProjectPage project={project} projectStatus={projectStatus} />
          <ProjectPage project={project} />
        }
      />
    );
  });

  return (
    <main>
      <NavBar location={location.pathname} />
      <Suspense fallback={<LoadingBars />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={<Projects />}
            // element={<Projects projectStatus={projectStatus} />}
          />
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
