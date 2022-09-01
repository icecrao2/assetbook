import styles from '../../styles/small-anchor.module.css';
import { Link } from 'react-router-dom';

const Small_anchor = ({ content, to }) => {


  return (
    <Link to={to} className={styles.anchor}>{content}</Link>
  )
}

export { Small_anchor };