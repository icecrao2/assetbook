import styles from '../../styles/medium-title.module.css';

const Medium_title = ({ content }) => {


  return (
    <h1 className={styles.medium_title}>{content}</h1>
  );
}

export { Medium_title };