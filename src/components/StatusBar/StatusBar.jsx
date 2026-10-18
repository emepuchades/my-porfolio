import { profile } from '../../data/profile';
import { useClock } from '../../hooks/useClock';
import { cx } from '../../utils/cx';
import { formatZonedTime } from '../../utils/formatZonedTime';
import styles from './StatusBar.module.css';

export default function StatusBar({ isNarrow = false }) {
  const { time, offset } = formatZonedTime(useClock(), profile.timeZone);

  return (
    <div className={cx(styles.bar, isNarrow && styles.narrow)}>
      <span className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        En línea
      </span>
      <span className={styles.clock}>
        {profile.location} <time className={styles.time}>{time}</time> {offset}
      </span>
    </div>
  );
}
