import React from 'react';
import styles from './Experience.module.scss';
import { ExperienceProps } from '../../..';
import Role from '../../Role';

const Experience = ({
    company,
    roles,
}: ExperienceProps) => {
    const { name: companyName, logo: companyLogo } = company

    function getRoleDetails() {
        return (
            <div className={styles.roles}>
                {roles.map((roleObj) => <Role key={roleObj.title} {...roleObj} />)}
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.company}>{companyName}{companyLogo &&
                <img
                    alt={companyName}
                    className={styles.logo}
                    src={`./${companyLogo}`}
                />}</div>
            {getRoleDetails()}
        </div>);
};


export default Experience;
