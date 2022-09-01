import styles from '../../styles/status-collection.module.css';


const Status_collection = ({ children }) => {

  return (
    <div className={styles.status_collection}>{children}</div>
  );
}

export { Status_collection };