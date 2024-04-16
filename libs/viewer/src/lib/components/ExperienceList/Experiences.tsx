import React from 'react';
import styles from './Experiences.module.scss';
import Experience from './Experience';
import { ExperienceProps } from '../..';

// TODO: rename to ExperienceList
const ExperienceList = ({experiences} : {experiences :ExperienceProps[]} ) => {
    return (
        experiences.filter(({hide}) => !hide).map((experience, index) =>
            {
                console.log(index, experience.company.name)
                return <Experience key={experience.company.name} {...experience}/>
            }
    ));
};

export default ExperienceList;
