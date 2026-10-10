import { navLinks } from '../../data/navLinks';
import { profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import AvailabilityBadge from '../AvailabilityBadge/AvailabilityBadge';
import Logo from '../Logo/Logo';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={cx('enter', styles.nav)}>
      <Logo />
      <ul className={styles.links}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a className={styles.link} href={href}>
              {label}
            </a>
          </li>
        ))}
        {profile.cvUrl && (
          <li>
            <a className={styles.cvLink} href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
              CV <span aria-hidden="true">↓</span>
            </a>
          </li>
        )}
        {profile.isAvailable && (
          <li>
            <AvailabilityBadge />
          </li>
        )}
      </ul>
    </nav>
  );
}
