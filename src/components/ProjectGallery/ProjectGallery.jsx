import { cx } from '../../utils/cx';
import BrowserFrame from '../BrowserFrame/BrowserFrame';
import Reveal from '../Reveal/Reveal';
import styles from './ProjectGallery.module.css';

const formatIndex = (index) => String(index + 1).padStart(2, '0');

export default function ProjectGallery({ images, url }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>// Capturas</h2>
      <Reveal className={styles.grid}>
        {images.map(({ src, alt, label, isTall }, index) => (
          <figure key={src} className={cx(styles.shot, isTall && styles.tall)}>
            <BrowserFrame className={styles.image} src={src} alt={alt} url={url} loading="lazy" />
            <figcaption className={styles.caption}>
              GAL—{formatIndex(index)} · {label}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  );
}
