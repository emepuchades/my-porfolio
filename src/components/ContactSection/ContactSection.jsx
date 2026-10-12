import spiderUrl from '../../assets/decor/spider.svg';
import { SECTION_IDS } from '../../data/navLinks';
import { profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className={styles.section}>
      <SectionHeading titleStart="Con" titleEnd="tacto" tag="SAY HELLO" />

      <Reveal className={cx('frame', styles.card)}>
        <img className={styles.watermark} src={spiderUrl} alt="" />
        <p className={styles.prompt}>// ¿Un proyecto, una duda, un hola?</p>
        {profile.email && (
          <a className={styles.mail} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        )}
        <SocialLinks />
      </Reveal>
    </section>
  );
}
