import { profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import NeonSign from '../NeonSign/NeonSign';
import styles from './RoleCard.module.css';

export default function RoleCard({ introDelay = 0 }) {
  const [specialtyStart, specialtyEnd] = profile.specialty.split(' ');

  return (
    <div className={cx('frame', 'enter', styles.card)} style={enterDelay(introDelay)}>
      <div className={styles.specialty}>
        {specialtyStart} <b className={styles.highlight}>{specialtyEnd}</b>
      </div>
      <div className={styles.japanese}>
        <span lang="ja">
          <NeonSign text={profile.japanese.role} startDelay={800} step={70} />
        </span>
        <small className={styles.since}>DESARROLLADORA — DESDE {profile.since}</small>
      </div>
    </div>
  );
}
