import React from 'react';
import styles from './EducationList.module.scss';
import { EducationProps } from '../..';
import Education from './Education'

const EducationList = ({educations}: {educations: EducationProps[]}) => {
    return <div className={styles.education_container}>
        {educations.map(education => <Education key={education.school} {...education}/>)}
    </div>;
};


export default EducationList;
