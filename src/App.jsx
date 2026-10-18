import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Backdrop from './components/Backdrop/Backdrop';
import RouteTransition from './components/RouteTransition/RouteTransition';
import ScrollManager from './components/ScrollManager/ScrollManager';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Backdrop />
      <RouteTransition />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos/:projectId" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
