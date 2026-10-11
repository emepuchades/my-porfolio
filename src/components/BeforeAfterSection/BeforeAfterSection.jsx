import CompareSlider from '../CompareSlider/CompareSlider';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './BeforeAfterSection.module.css';

export default function BeforeAfterSection({ beforeAfter }) {
  const { before, after, startingPoint } = beforeAfter;

  return (
    <section className={styles.section}>
      <SectionHeading titleStart="Antes " titleEnd="/ después" tag="2022 → 2026" />

      <Reveal>
        <CompareSlider
          beforeLabel="Antes · 2022"
          afterLabel="Después · 2026"
          before={<img className={styles.image} src={before.src} alt={before.alt} />}
          after={
            after ? (
              <img className={styles.image} src={after.src} alt={after.alt} />
            ) : (
              <div className={styles.pending}>
                <span className={styles.pendingTitle}>En proceso</span>
                <span className={styles.pendingText}>El repaso está en marcha</span>
              </div>
            )
          }
        />
      </Reveal>

      <Reveal className={styles.notes}>
        <div className={styles.note}>
          <h3 className={styles.noteTitle}>Punto de partida · 2022</h3>
          <ul className={styles.list}>
            {startingPoint.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.note}>
          <h3 className={styles.noteTitle}>Después · 2026</h3>
          <p className={styles.pendingNote}>
            {after ? after.alt : 'Aquí verás el resultado del repaso cuando esté listo.'}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
