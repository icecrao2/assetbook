import styles from '../../styles/small-btn.module.css';


const Small_btn = ({ content }) => {


  return (
    <button className={styles.btn}>{content}</button>
  );
}

export { Small_btn };