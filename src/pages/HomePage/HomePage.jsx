import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import Portrait from '../../components/Portrait/Portrait';
import { cx } from '../../utils/cx';
import styles from './HomePage.module.css';

const INTRO_STEP_MS = 80;

export default function HomePage() {
  return (
    <div className={styles.screen}>
      <Nav />
      <div className={cx('wrap', styles.screenBody)}>
        <Hero introDelay={INTRO_STEP_MS} />
        <div className={styles.mainGrid}>
          <Portrait introDelay={INTRO_STEP_MS * 2} />
        </div>
      </div>
    </div>
  );
}
