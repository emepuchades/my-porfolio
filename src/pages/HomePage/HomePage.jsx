import ContactSection from '../../components/ContactSection/ContactSection';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import Portrait from '../../components/Portrait/Portrait';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import RoleCard from '../../components/RoleCard/RoleCard';
import StackCard from '../../components/StackCard/StackCard';
import TechStackSection from '../../components/TechStackSection/TechStackSection';
import { cx } from '../../utils/cx';
import styles from './HomePage.module.css';

const INTRO_STEP_MS = 80;

export default function HomePage() {
  return (
    <>
      <div className={styles.screen}>
        <Nav />
        <div className={cx('wrap', styles.screenBody)}>
          <Hero introDelay={INTRO_STEP_MS} />
          <div className={styles.mainGrid}>
            <Portrait introDelay={INTRO_STEP_MS * 2} />
            <div className={styles.sideColumn}>
              <RoleCard introDelay={INTRO_STEP_MS * 3} />
              <FeaturedCard introDelay={INTRO_STEP_MS * 4} />
              <StackCard introDelay={INTRO_STEP_MS * 5} />
            </div>
          </div>
        </div>
      </div>

      <main className="wrap">
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
