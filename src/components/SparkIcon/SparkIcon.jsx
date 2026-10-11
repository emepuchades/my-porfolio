import { cx } from '../../utils/cx';
import styles from './SparkIcon.module.css';

const SPARK_PATH = 'M12 1C12.7 7.3 16.7 11.3 23 12C16.7 12.7 12.7 16.7 12 23C11.3 16.7 7.3 12.7 1 12C7.3 11.3 11.3 7.3 12 1Z';

export default function SparkIcon({ className }) {
  return (
    <svg className={cx(styles.icon, className)} viewBox="0 0 34 34" aria-hidden="true">
      <g transform="translate(1 9)">
        <path className={styles.main} d={SPARK_PATH} pathLength="1" />
      </g>
      <g transform="translate(22 1) scale(0.45)">
        <path className={styles.small} d={SPARK_PATH} />
      </g>
    </svg>
  );
}
