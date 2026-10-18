import { SECTION_IDS } from '../../data/navLinks';
import { techStack } from '../../data/techStack';
import { cx } from '../../utils/cx';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import TechCell from '../TechCell/TechCell';
import styles from './TechStackSection.module.css';

export default function TechStackSection() {
  return (
    <section id={SECTION_IDS.stack} className={styles.section}>
      <SectionHeading titleStart="Tech " titleEnd="Stack" tag="HERRAMIENTAS" />

      <Reveal className={cx('frame', styles.sheet)}>
        {techStack.map(({ name, area }, index) => (
          <TechCell key={name} name={name} area={area} index={index} />
        ))}
      </Reveal>
    </section>
  );
}
