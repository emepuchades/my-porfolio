import { useState } from 'react';
import { SECTION_IDS } from '../../data/navLinks';
import { INITIAL_VISIBLE_PROJECTS, projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import styles from './ProjectsSection.module.css';

const GRID_ID = 'projects-grid';
const COLUMNS = 2;
const STAGGER_MS = 90;

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, INITIAL_VISIBLE_PROJECTS);
  const hasHiddenProjects = projects.length > INITIAL_VISIBLE_PROJECTS;

  return (
    <section id={SECTION_IDS.projects} className={styles.section}>
      <SectionHeading titleStart="Pro" titleEnd="yectos" tag="SELECCIÓN" />

      <div id={GRID_ID} className={styles.grid}>
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % COLUMNS) * STAGGER_MS}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {hasHiddenProjects && (
        <div className={styles.actions}>
          <ShowMoreButton
            isExpanded={isExpanded}
            controls={GRID_ID}
            onToggle={() => setIsExpanded((current) => !current)}
          />
        </div>
      )}
    </section>
  );
}
