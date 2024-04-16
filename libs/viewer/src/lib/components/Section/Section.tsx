import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    title: string;
    children: ReactNode;
    style?: object;
    className?: string;
}
const Section =
    (
        { style, className, children, title }: SectionProps
    ) => {
        return (
            <div
                style={style}
                className={className}
            >
                <div className={styles.title}>{title.toUpperCase()}</div>
                {children} {/* Make sure to include children to add resizable handle */}
            </div>
        );
    }

export default Section;
