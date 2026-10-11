import styles from './HazardDivider.module.css';

export default function HazardDivider() {
  return (
    <div className={styles.row} aria-hidden="true">
      <div className={styles.strip} />
      <span className={styles.chevron}>∧</span>
      <div className={styles.strip} />
    </div>
  );
}
