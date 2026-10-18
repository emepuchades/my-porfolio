import { useParams } from 'react-router-dom';
import BeforeAfterSection from '../../components/BeforeAfterSection/BeforeAfterSection';
import Footer from '../../components/Footer/Footer';
import HazardDivider from '../../components/HazardDivider/HazardDivider';
import Highlights from '../../components/Highlights/Highlights';
import NextProject from '../../components/NextProject/NextProject';
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery';
import ProjectHero from '../../components/ProjectHero/ProjectHero';
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro';
import ProjectLinks from '../../components/ProjectLinks/ProjectLinks';
import ProjectNav from '../../components/ProjectNav/ProjectNav';
import StatusBar from '../../components/StatusBar/StatusBar';
import SpecSheet from '../../components/SpecSheet/SpecSheet';
import { fullName, githubUrl } from '../../data/profile';
import { findProject, nextProject } from '../../data/projects';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import styles from './ProjectPage.module.css';

const buildLinks = ({ demoUrl, codeUrl, isInDevelopment }) => {
  if (isInDevelopment) return [{ label: 'Sigue el progreso en GitHub', url: githubUrl }];
  return [
    demoUrl && { label: 'Demo 2022', url: demoUrl },
    codeUrl && { label: 'Código', url: codeUrl },
  ].filter(Boolean);
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = findProject(projectId);
  useDocumentTitle(project && `${project.titleStart}${project.titleEnd} — ${fullName}`);

  if (!project) return <NotFoundPage />;

  return (
    <>
      <StatusBar isNarrow />
      <ProjectNav />
      <main className={styles.page}>
        <ProjectHero project={project} />
        <HazardDivider />
        <SpecSheet specs={project.specs} />
        <ProjectIntro text={project.intro} />
        <Highlights
          title={project.isInDevelopment ? '// Qué va a hacer' : '// Qué hace'}
          items={project.highlights}
        />
        {project.beforeAfter && <BeforeAfterSection beforeAfter={project.beforeAfter} />}
        {project.gallery && <ProjectGallery images={project.gallery} url={project.demoUrl} />}
        <ProjectLinks links={buildLinks(project)} />
        <NextProject project={nextProject(project.id)} />
      </main>
      <Footer />
    </>
  );
}
