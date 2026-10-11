import { fullName, profile } from '../../data/profile';
import { cx } from '../../utils/cx';
import { enterDelay } from '../../utils/enterDelay';
import PortraitLinks from '../PortraitLinks/PortraitLinks';
import styles from './Portrait.module.css';

export default function Portrait({ introDelay = 0 }) {
  return (
    <div className={cx('frame', 'enter', styles.portrait)} style={enterDelay(introDelay)}>
      <div className={styles.topo}>
        <img className={styles.avatar} src={profile.avatarSrc} alt={`Foto de ${fullName}`} />
      </div>
      <PortraitLinks />
    </div>
  );
}
