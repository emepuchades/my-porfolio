import { profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import { neonDelay } from '../../utils/neonDelay';
import PosterMarks from '../PosterMarks/PosterMarks';
import styles from './Hero.module.css';

export default function Hero({ introDelay = 0 }) {
  return (
    <header className={cx('frame', 'enter', styles.hero)} style={enterDelay(introDelay)}>
      <div className={styles.ghost} aria-hidden="true">
        {profile.ghostWord}
      </div>
      <h1 className={styles.title}>
        {profile.firstName} <span className={cx(styles.outline, 'neon')} style={neonDelay(650)}>
          {profile.lastName}
        </span>
      </h1>
      <p className={styles.subline}>
        {profile.role} · {profile.specialty} · {profile.location}
      </p>
      <div className={styles.hazard} aria-hidden="true" />
      <PosterMarks code={profile.posterCode} />
    </header>
  );
}
