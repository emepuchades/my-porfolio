import { Link } from 'react-router-dom';
import { projectPath } from '../../data/projects';
import styles from './ProjectCard.module.css';

const serialOf = (code) => code.split('—')[1] ?? code;

export default function ProjectCard({ project }) {
  const { id, code, titleStart, titleEnd, description, tags, specs } = project;
  const title = `${titleStart}${titleEnd}`;

  return (
    <Link className={styles.ticket} to={projectPath(id)} aria-label={`Ver proyecto ${title}`}>
      <article className={styles.paper}>
        <div className={styles.main}>
          <div className={styles.topline}>
            <span>{code}</span>
            <span>{specs.year}</span>
          </div>
          <h3 className={styles.title}>
            {titleStart}
            <span className={styles.titleEnd}>{titleEnd}</span>
          </h3>
          <p className={styles.description}>{description}</p>
          <dl className={styles.fields}>
            <div className={styles.field}>
              <dt>Estado</dt>
              <dd>{specs.state}</dd>
            </div>
            <div className={styles.field}>
              <dt>Stack</dt>
              <dd>{tags.join(' · ')}</dd>
            </div>
          </dl>
        </div>
        <div className={styles.stub} aria-hidden="true">
          <span className={styles.serialLabel}>Nº</span>
          <span className={styles.serial}>{serialOf(code)}</span>
          <span className={styles.barcode} />
          <span className={styles.cta}>
            Ver <span className={styles.arrow}>→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
