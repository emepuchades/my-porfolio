import { Link } from 'react-router-dom';
import { SECTION_IDS } from '../../data/navLinks';
import { cx } from '../../utils/cx';
import Logo from '../Logo/Logo';
import styles from './ProjectNav.module.css';

const PROJECTS_PATH = `/#${SECTION_IDS.projects}`;

export default function ProjectNav({ backTo = PROJECTS_PATH, backLabel = 'Volver' }) {
  return (
    <nav className={cx('enter', styles.nav)}>
      <Link className={styles.back} to={backTo}>
        <span aria-hidden="true">←</span> {backLabel}
      </Link>
      <Logo />
    </nav>
  );
}
