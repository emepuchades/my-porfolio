import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { findProject } from '../../data/projects';
import styles from './RouteTransition.module.css';

const PROJECT_PATH_PREFIX = '/proyectos/';

const describePath = (pathname) => {
  if (pathname === '/') return 'Index';
  const project = pathname.startsWith(PROJECT_PATH_PREFIX) && findProject(pathname.slice(PROJECT_PATH_PREFIX.length));
  return project ? `${project.code} · ${project.titleStart}${project.titleEnd}` : '404 · Otro universo';
};

export default function RouteTransition() {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);
  const [transition, setTransition] = useState(null);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    setTransition((current) => ({ id: (current?.id ?? 0) + 1, label: describePath(pathname) }));
  }, [pathname]);

  if (!transition) return null;

  return (
    <div key={transition.id} className={styles.curtain} aria-hidden="true">
      <span className={styles.label}>
        <span className={styles.prompt}>&gt;</span> Cargando {transition.label}
      </span>
    </div>
  );
}
