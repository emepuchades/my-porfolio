import { useState } from 'react';
import styles from './CompareSlider.module.css';

const INITIAL_POSITION = 50;

export default function CompareSlider({ before, after, beforeLabel, afterLabel }) {
  const [position, setPosition] = useState(INITIAL_POSITION);

  return (
    <div className={styles.slider} style={{ '--position': `${position}%` }}>
      <div className={styles.layer}>{after}</div>
      <div className={styles.before}>{before}</div>
      <span className={styles.labelBefore}>{beforeLabel}</span>
      <span className={styles.labelAfter}>{afterLabel}</span>
      <div className={styles.handle} aria-hidden="true">
        <span className={styles.knob}>↔</span>
      </div>
      <input
        className={styles.range}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Comparar ${beforeLabel} y ${afterLabel}`}
      />
    </div>
  );
}
