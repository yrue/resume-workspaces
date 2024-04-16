import React from 'react';
import styles from './Role.module.scss';
import { RoleProps } from '../..';
import Icon from '../Icon/Icon';
import { Calendar, Location } from '@carbon/icons-react';
import { getPeriod } from '../utils';

const Role = ({
  title,
  period,
  location,
  details,
  // ...others
} : RoleProps) => {
  const experienceDetail = details.filter(({ show }) => show || show === undefined);
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <span className={styles.role}>{title}</span>
        <div className={"extended_info"}>
          {period &&
            <Icon
              RenderIcon={Calendar}
              label={getPeriod(period)}
            />
          }
          {location &&
            <Icon
              RenderIcon={Location}
              label={location}
            />}
        </div>
      </div>
      <ul className={styles.bullets}>
        {experienceDetail.map(({ content: detail }) => <li key={detail.slice(0, 10)}>{detail}</li>)}
      </ul>
    </div>
  );
};

export default Role;
