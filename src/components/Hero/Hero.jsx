import { profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import styles from './Hero.module.css';

export default function Hero({ introDelay = 0 }) {
  return (
    <header className={cx('frame', 'enter', styles.hero)} style={enterDelay(introDelay)}>
      <div className={styles.ghost} aria-hidden="true">
        {profile.ghostWord}
      </div>
      <h1 className={styles.title}>
        {profile.firstName} <span className={styles.outline}>{profile.lastName}</span>
      </h1>
      <p className={styles.subline}>
        {profile.role} · {profile.specialty} · {profile.location}
      </p>
      <div className={styles.hazard} aria-hidden="true" />
    </header>
  );
}
