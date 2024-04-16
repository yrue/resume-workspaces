import React from 'react';
import styles from './PublicationList.module.scss';
import { PublicationProps } from '../..';
import { isEmpty } from 'lodash-es';

const Publications = ({publications}: {publications: PublicationProps[]}) => {
    if (isEmpty(publications)) return null;
    return <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>{publications.map((publication) => <div key={publication.url}>{publication.title}</div>)}</div>;
};

export default Publications;
