import Reveal from '../Reveal/Reveal';
import styles from './SpecSheet.module.css';

const SPEC_LABELS = [
  ['year', 'Año'],
  ['role', 'Rol'],
  ['stack', 'Stack'],
  ['state', 'Estado'],
];

export default function SpecSheet({ specs }) {
  return (
    <Reveal as="dl" className={styles.sheet}>
      {SPEC_LABELS.map(([key, label]) => (
        <div key={key} className={styles.item}>
          <dt className={styles.label}>{label}</dt>
          <dd className={styles.value}>{specs[key]}</dd>
        </div>
      ))}
    </Reveal>
  );
}
