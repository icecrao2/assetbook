import styles from '../../styles/asset-category-card.module.css';

const Asset_category_card = ({ children }) => {

  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export { Asset_category_card };