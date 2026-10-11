import { cx } from '../../utils/cx';
import Reveal from '../Reveal/Reveal';
import styles from './ProjectIntro.module.css';

export default function ProjectIntro({ text }) {
  return (
    <Reveal className={cx('frame', styles.intro)}>
      <h2 className={styles.label}>// El proyecto</h2>
      <p className={styles.text}>{text}</p>
    </Reveal>
  );
}
