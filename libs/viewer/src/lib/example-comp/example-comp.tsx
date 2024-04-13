import styles from './example-comp.module.scss';

/* eslint-disable-next-line */
export interface ExampleCompProps {}

export function ExampleComp(props: ExampleCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExampleComp!</h1>
    </div>
  );
}

export default ExampleComp;
