import { fullName } from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wrap">
      <div className={styles.footer}>
        <span>
          DESIGN CREATED BY <b className={styles.name}>{fullName.toUpperCase()}</b> — © {year}
        </span>
        <a className={styles.backToTop} href="#">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
