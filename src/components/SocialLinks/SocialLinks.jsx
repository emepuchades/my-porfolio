import { socialLinks } from '../../data/profile';
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <ul className={styles.list}>
      {socialLinks.map(({ label, url }) => (
        <li key={label}>
          <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
            {label} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
