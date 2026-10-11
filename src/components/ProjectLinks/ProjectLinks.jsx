import styles from './ProjectLinks.module.css';

export default function ProjectLinks({ links }) {
  return (
    <div className={styles.links}>
      {links.map(({ label, url }) => (
        <a key={label} className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
          {label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
