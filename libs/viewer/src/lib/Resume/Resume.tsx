import styles from './Resume.module.scss';
import  { useState, useEffect } from "react";
import { fetchJSON5FileFromPublic } from '../../api';

/* eslint-disable-next-line */
export interface ResumeProps {}

const resumeFileName = import.meta.env.VITE_PUBLIC_RESUME_FILENAME;
console.log(resumeFileName)

export function Resume(props: ResumeProps) {
  const [data, setData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    async function startFetching() {
      const result = await fetchJSON5FileFromPublic(
        resumeFileName,
        abortController.signal
      );

      setData(result);
    }

    startFetching();

    // avoid race condition
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className={styles['container']}>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

export default Resume;
