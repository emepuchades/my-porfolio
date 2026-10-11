import { profile } from '../../data/profile';
import { stackWall } from '../../data/techStack';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import styles from './StackCard.module.css';

export default function StackCard({ introDelay = 0 }) {
  return (
    <div className={cx('frame', 'enter', styles.card)} style={enterDelay(introDelay)}>
      <div className={styles.head}>
        <span className={styles.japanese}>
          DEV <span className={styles.name}>STACK</span>
        </span>
        <span className={styles.label}></span>
      </div>
      <div className={styles.wall} aria-label="Tecnologías principales">
        {stackWall.map(({ label, isSolid }, index) => (
          <span key={`${label}-${index}`} className={cx(styles.column, isSolid && styles.solid)}>
            {label}
          </span>
        ))}
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.motto}>{profile.japanese.motto}</span>
      </div>
    </div>
  );
}
