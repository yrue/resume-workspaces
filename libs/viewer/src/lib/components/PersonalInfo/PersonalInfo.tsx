import styles from './PersonalInfo.module.scss';
import Icon from '../Icon/Icon';
import Links from './Links';
import { Email, Phone } from "@carbon/icons-react";

import { PersonalInfoProps } from '@resume-types';

export function PersonalInfo({ name, roles, mobile, email, links, showJobTitle }: PersonalInfoProps) {
    return (
        <div className={styles.container}>
            <div className={styles.name}>{name}</div>
            {showJobTitle && <div className={styles.job_title}>{roles.join(' | ')}</div>}
            <div className={styles.contacts}>
                <Icon label={<a href={`tel:${mobile}`}>{mobile}</a>} RenderIcon={Phone} />
                <Icon label={<a href={`mailto:${email}`}>{email}</a>} RenderIcon={Email} />
                <Links links={links} />
            </div>
        </div>);
}

export default PersonalInfo;
