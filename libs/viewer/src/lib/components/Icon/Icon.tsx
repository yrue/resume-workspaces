import styles from './Icon.module.scss';
import { IconProps } from '../..';

const Icon = ({label: data, RenderIcon} : IconProps) => {
  return (
      <div className={styles.icon_container}>
          <RenderIcon className={styles.icon} />
          {data}
      </div>
  )
};

export default Icon;
