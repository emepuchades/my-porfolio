import { profile } from '../../data/profile';
import { stackGroups } from '../../data/techStack';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import { neonDelay } from '../../utils/neonDelay';
import NeonSign from '../NeonSign/NeonSign';
import styles from './StackCard.module.css';

export default function StackCard({ introDelay = 0 }) {
  return (
    <div className={cx('frame', 'enter', styles.card)} style={enterDelay(introDelay)}>
      <div className={styles.head}>
        <span className={styles.heading}>
          DEV <span className={styles.name}>STACK</span>
        </span>
      </div>
      <div className={styles.body}>
        <dl className={styles.groups} aria-label="Tecnologías principales">
          {stackGroups.map(({ area, items }, groupIndex) => (
            <div key={area} className={styles.group}>
              <dt className={styles.area}>{area}</dt>
              {items.map((item, itemIndex) => (
                <dd
                  key={item}
                  className={cx(styles.item, itemIndex > 0 && 'neon', itemIndex > 0 && styles.outline)}
                  style={itemIndex > 0 ? neonDelay(1150 + groupIndex * 110) : undefined}
                >
                  {item}
                </dd>
              ))}
            </div>
          ))}
        </dl>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.motto} lang="ja">
          <NeonSign text={profile.japanese.motto} startDelay={1300} step={120} />
        </span>
      </div>
    </div>
  );
}
