import { useInView } from '../../hooks/useInView';
import { cx } from '../../utils/cx';
import { neonDelay } from '../../utils/neonDelay';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ titleStart, titleEnd, tag }) {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className={styles.heading} data-visible={isInView}>
      <h2 className={styles.title}>
        <span className={styles.titleInner}>
          {titleStart}
          <em className={cx(styles.outline, isInView && 'neon')} style={neonDelay(450)}>
            {titleEnd}
          </em>
        </span>
      </h2>
      <div className={styles.rule} aria-hidden="true" />
      <span className={styles.tag}>-[ {tag} ]-</span>
    </div>
  );
}
