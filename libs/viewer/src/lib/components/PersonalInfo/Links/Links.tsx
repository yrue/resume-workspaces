import styles from './Links.module.css';
import Icon from '../../Icon/Icon';
import { Link } from "@carbon/icons-react";
import { LinkProps } from '../../..';

const Links = ({ links } : LinkProps) => (
    <div className={styles.container}>
        {links.map(({ title, url, show }) => (
            show && <Icon key={title} label={<a href={url}>{url}</a>} RenderIcon={Link} />
        ))}</div>)

export default Links;
