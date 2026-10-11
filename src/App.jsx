import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Backdrop from './components/Backdrop/Backdrop';
import ScrollManager from './components/ScrollManager/ScrollManager';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Backdrop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
