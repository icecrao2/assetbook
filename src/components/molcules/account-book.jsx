import styles from '../../styles/asset-category-card.module.css';

const Account_book = ({ children }) => {

  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export { Account_book };