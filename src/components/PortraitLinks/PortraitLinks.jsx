import { SECTION_IDS } from '../../data/navLinks';
import { githubUrl } from '../../data/profile';
import styles from './PortraitLinks.module.css';

const links = [
  { label: 'GitHub', href: githubUrl, arrow: '↗', isExternal: true },
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}`, arrow: '↓' },
  { label: 'Contacto', href: `#${SECTION_IDS.contact}`, arrow: '↓' },
];

export default function PortraitLinks() {
  return (
    <div className={styles.row}>
      {links.map(({ label, href, arrow, isExternal }) => (
        <a
          key={label}
          className={styles.cell}
          href={href}
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {label} <span aria-hidden="true">{arrow}</span>
        </a>
      ))}
    </div>
  );
}
