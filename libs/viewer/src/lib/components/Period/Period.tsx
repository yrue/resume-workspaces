import styles from './Period.module.scss';

/* eslint-disable-next-line */
export interface PeriodProps {}

export function Period(props: PeriodProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Period!</h1>
    </div>
  );
}

export default Period;
