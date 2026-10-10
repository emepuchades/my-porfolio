import styles from './AvailabilityBadge.module.css';

export default function AvailabilityBadge() {
  return (
    <span className={styles.badge}>
      <span className={styles.dot} aria-hidden="true" />
      Disponible
    </span>
  );
}
