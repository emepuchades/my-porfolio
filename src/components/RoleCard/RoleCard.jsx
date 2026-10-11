import { profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import styles from './RoleCard.module.css';

export default function RoleCard({ introDelay = 0 }) {
  const [specialtyStart, specialtyEnd] = profile.specialty.split(' ');

  return (
    <div className={cx('frame', 'enter', styles.card)} style={enterDelay(introDelay)}>
      <div className={styles.specialty}>
        {specialtyStart} <b className={styles.highlight}>{specialtyEnd}</b>
      </div>
      <div className={styles.japanese}>
        {profile.japanese.role}
        <small className={styles.since}>DEVELOPER — EST. {profile.since}</small>
      </div>
    </div>
  );
}
