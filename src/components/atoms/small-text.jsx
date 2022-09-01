import styles from '../../styles/small-text.module.css';

const Small_text = ({ content }) => {


  return (
    <span className={styles.small}>{content}</span>
  );
}

export { Small_text };