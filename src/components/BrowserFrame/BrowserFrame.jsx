import { cx } from '../../utils/cx';
import styles from './BrowserFrame.module.css';

const toHost = (url) => (url ? new URL(url).host : '');

export default function BrowserFrame({ src, alt, url, className, loading }) {
  return (
    <span className={cx(styles.window, className)}>
      <span className={styles.bar} aria-hidden="true">
        <span className={styles.buttons}>
          <span className={styles.button} />
          <span className={styles.button} />
          <span className={styles.button} />
        </span>
        <span className={styles.address}>{toHost(url)}</span>
      </span>
      <span className={styles.viewport}>
        <img className={styles.image} src={src} alt={alt} loading={loading} />
      </span>
    </span>
  );
}
