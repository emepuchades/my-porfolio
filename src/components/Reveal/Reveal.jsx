import { useInView } from '../../hooks/useInView';
import { cx } from '../../utils/cx';
import styles from './Reveal.module.css';

export default function Reveal({ as: Tag = 'div', delay = 0, className, style, children, ...rest }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={cx(styles.reveal, className)}
      data-visible={isInView}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
