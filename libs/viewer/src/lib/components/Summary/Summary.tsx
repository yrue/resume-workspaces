import React from 'react';
import styles from './Summary.module.scss';
const Summary = ({summary} : {summary: string}) => {
    return <div>{summary}</div>;
};

export default Summary;
