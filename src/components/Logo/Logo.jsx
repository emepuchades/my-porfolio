import { Link } from 'react-router-dom';
import markUrl from '../../assets/logo/mark.svg';
import { fullName } from '../../data/profile';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link className={styles.logo} to="/" aria-label={`${fullName}, inicio`}>
      <img className={styles.mark} src={markUrl} alt="" />
    </Link>
  );
}
