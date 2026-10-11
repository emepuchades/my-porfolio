import { Link } from 'react-router-dom';
import { projectPath } from '../../data/projects';
import { cx } from '../../utils/cx';
import styles from './NextProject.module.css';

export default function NextProject({ project }) {
  return (
    <Link className={cx('frame', styles.next)} to={projectPath(project.id)}>
      <span className={styles.label}>Siguiente proyecto</span>
      <span className={styles.title}>
        {project.titleStart}
        <span className={styles.titleEnd}>{project.titleEnd}</span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
