import { Link } from 'react-router-dom';
import { projectPath } from '../../data/projects';
import { cx } from '../../utils/cx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { id, code, status, glyph, titleStart, titleEnd, description, tags } = project;
  const title = `${titleStart}${titleEnd}`;

  return (
    <article className={cx('frame', styles.card)}>
      <div className={styles.thumb}>
        <span className={styles.glyph}>{glyph}</span>
        <span className={styles.status}>{status}</span>
        <span className={styles.code}>{code}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {titleStart}
          <span className={styles.titleEnd}>{titleEnd}</span>
        </h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.barcode} aria-hidden="true" />
        <Link className={styles.link} to={projectPath(id)} aria-label={`Ver proyecto ${title}`}>
          Ver <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </article>
  );
}
