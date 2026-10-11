import styles from './TechCell.module.css';

const formatIndex = (index) => String(index + 1).padStart(2, '0');

export default function TechCell({ name, area, index }) {
  return (
    <div className={styles.cell}>
      <span className={styles.index}>
        {formatIndex(index)} <em className={styles.area}>/ {area}</em>
      </span>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
