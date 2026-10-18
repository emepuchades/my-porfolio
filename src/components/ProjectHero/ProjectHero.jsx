import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import { neonDelay } from '../../utils/neonDelay';
import BrowserFrame from '../BrowserFrame/BrowserFrame';
import styles from './ProjectHero.module.css';

export default function ProjectHero({ project }) {
  const { titleStart, titleEnd, summary, glyph, specs, cover, demoUrl } = project;

  return (
    <header className={cx('enter', styles.hero)} style={enterDelay(80)}>
      <h1 className="sr-only">
        {titleStart}
        {titleEnd} — {summary}
      </h1>
      <div className={styles.title} aria-hidden="true">
        {titleStart}
      </div>
      <div className={cx(styles.title, styles.outline, 'neon')} style={neonDelay(500)} aria-hidden="true">
        {titleEnd}
      </div>
      <div className={styles.shot}>
        {cover ? (
          <BrowserFrame src={cover.src} alt={cover.alt} url={demoUrl} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.glyph}>{glyph}</span>
            <span className={styles.state}>{specs.state}</span>
          </div>
        )}
      </div>
    </header>
  );
}
