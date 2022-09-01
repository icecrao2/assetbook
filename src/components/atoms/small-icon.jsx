import styles from '../../styles/small-icon.module.css';
import { faCircle } from "@fortawesome/free-solid-svg-icons"; import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Small_icon = ({ color }) => {


  return (
    <span ><FontAwesomeIcon style={{ "color": color }} className={styles.small} icon={faCircle} /></span>
  );
}

export { Small_icon };