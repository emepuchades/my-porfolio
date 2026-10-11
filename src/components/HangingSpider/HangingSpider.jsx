import spiderUrl from '../../assets/decor/spider.svg';
import { cx } from '../../utils/cx';
import styles from './HangingSpider.module.css';

export default function HangingSpider({ className, descends = false }) {
  return (
    <div className={cx(styles.spider, descends && styles.descends, className)} aria-hidden="true">
      <span className={styles.thread} />
      <img className={styles.image} src={spiderUrl} alt="" />
    </div>
  );
}
