import { cx } from '../../utils/cx';
import styles from './ShowMoreButton.module.css';

export default function ShowMoreButton({ isExpanded, controls, onToggle }) {
  return (
    <button
      className={cx(styles.button, isExpanded && styles.open)}
      type="button"
      aria-expanded={isExpanded}
      aria-controls={controls}
      onClick={onToggle}
    >
      <span>{isExpanded ? 'Ver menos' : 'Ver más proyectos'}</span>
      <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      >
        <path d="M5 9l7 7 7-7" />
      </svg>
    </button>
  );
}
