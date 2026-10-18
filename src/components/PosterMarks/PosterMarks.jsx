import { cx } from '../../utils/cx';
import styles from './PosterMarks.module.css';

const CORNERS = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

export default function PosterMarks({ code }) {
  const year = new Date().getFullYear();

  return (
    <div className={styles.marks} aria-hidden="true">
      {CORNERS.map((corner) => (
        <span key={corner} className={cx(styles.cross, styles[corner])}>
          ✛
        </span>
      ))}
      <span className={cx(styles.label, styles.year)}>
        {year} <span className={styles.slashes}>////////</span>
      </span>
      <span className={cx(styles.label, styles.code)}>
        <span className={styles.slashes}>////////</span> {code}
      </span>
    </div>
  );
}
