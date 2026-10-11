import Reveal from '../Reveal/Reveal';
import styles from './Highlights.module.css';

const formatIndex = (index) => String(index + 1).padStart(2, '0');

export default function Highlights({ title, items }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{title}</h2>
      <Reveal as="ul" className={styles.grid}>
        {items.map(({ title: itemTitle, text }, index) => (
          <li key={itemTitle} className={styles.item}>
            <span className={styles.index}>{formatIndex(index)}</span>
            <h3 className={styles.title}>{itemTitle}</h3>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
