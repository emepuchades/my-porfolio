import { Link } from 'react-router-dom';
import { featuredProjects, projectPath } from '../../data/projects';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import { neonDelay } from '../../utils/neonDelay';
import SparkIcon from '../SparkIcon/SparkIcon';
import styles from './FeaturedCard.module.css';

const formatIndex = (index) => String(index + 1).padStart(2, '0');

export default function FeaturedCard({ introDelay = 0 }) {
  return (
    <div
      className={cx('frame', 'enter', styles.card)}
      style={enterDelay(introDelay)}
      data-spark-trigger
    >
      <h2 className={styles.title}>
        <span className={styles.titleText}>
          Proyectos{' '}
          <em className={cx(styles.outline, 'neon')} style={neonDelay(1000)}>
            destacados
          </em>
        </span>
        <SparkIcon className={styles.spark} />
      </h2>
      <ul className={styles.list}>
        {featuredProjects.map((project, index) => (
          <li key={project.id} className={styles.item}>
            <Link className={styles.link} to={projectPath(project.id)}>
              <span className={styles.number}>{formatIndex(index)}</span> {project.titleStart}
              {project.titleEnd} <span className={styles.summary}>— {project.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
