import styles from './viewer.module.scss';

/* eslint-disable-next-line */
export interface ViewerProps {}

export function Viewer(props: ViewerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Viewer!</h1>
    </div>
  );
}

export default Viewer;
