import styles from './SkillList.module.scss';
import { SkillProps } from '../..';

const SkillList = ({skillList}: {skillList: SkillProps[]}) => {
    return (
        <div className={styles.container}>
            {skillList.map(({displayText, content}) => (
                <div key={displayText}>
                    <strong>{displayText} </strong>
                    <div>{content.join(', ')}</div>
                </div>
            ))}
        </div>);
};

export default SkillList;
