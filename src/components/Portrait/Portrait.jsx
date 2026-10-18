import { fullName, profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import NeonSign from '../NeonSign/NeonSign';
import PortraitLinks from '../PortraitLinks/PortraitLinks';
import styles from './Portrait.module.css';

export default function Portrait({ introDelay = 0 }) {
  return (
    <div className={cx('frame', 'enter', styles.portrait)} style={enterDelay(introDelay)}>
      <div className={styles.topo}>
        <p className={styles.jpBox} lang="ja" title="¡Seré la Reina del Código!">
          <NeonSign text={profile.japanese.pirateKing} startDelay={700} step={90} />
        </p>
        <img className={styles.avatar} src={profile.avatarSrc} alt={`Foto de ${fullName}`} />
      </div>
      <PortraitLinks />
    </div>
  );
}
