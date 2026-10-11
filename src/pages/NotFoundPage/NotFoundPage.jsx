import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import HangingSpider from '../../components/HangingSpider/HangingSpider';
import ProjectNav from '../../components/ProjectNav/ProjectNav';
import { fullName } from '../../data/profile';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { cx } from '../../utils/cx';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  useDocumentTitle(`Otro universo — ${fullName}`);

  return (
    <>
      <ProjectNav backTo="/" backLabel="Inicio" />
      <main className={styles.page}>
        <section className={cx('frame', 'enter', styles.card)}>
          <HangingSpider className={styles.spider} descends />
          <p className={styles.code} aria-hidden="true">
            404
          </p>
          <p className={styles.label}>Error · Multiverso</p>
          <h1 className={styles.title}>
            Esta página está en <em className={styles.outline}>otro universo</em>
          </h1>
          <p className={styles.text}>Has saltado a una Tierra donde esta dirección no existe.</p>
          <Link className={styles.button} to="/">
            <span aria-hidden="true">←</span> Volver a mi universo
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
