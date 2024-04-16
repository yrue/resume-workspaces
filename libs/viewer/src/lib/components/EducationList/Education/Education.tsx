import React from 'react';
import styles from './Education.module.scss';
import { EducationProps } from '../../..';
import Icon from '../../Icon/Icon';
import { Calendar, Location } from '@carbon/icons-react';
import { getPeriod } from '../../utils';

const Education = ({school, location, degree, period} : EducationProps) => {
    return (
        <div>
            <div className={styles.row}>
                <div className={styles.degree}>{degree}</div>
                <div className={"extended_info"}>
                    <Icon RenderIcon={Calendar} label={getPeriod(period)}/>
                </div>
            </div>

            <div className={styles.row}>
                {school}
                <div className={"extended_info"}>
                    <Icon RenderIcon={Location} label={location} />
                </div>
            </div>
        </div>
    );
};

export default Education;
