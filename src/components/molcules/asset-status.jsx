import styles from '../../styles/asset-status.module.css';


const Asset_status = ({ children }) => {

  return (
    <div className={styles.asset_status}>{children}</div>
  );
}

export { Asset_status };