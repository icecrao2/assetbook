import styles from '../../styles/small-btn.module.css';


const Small_btn = ({ content, onClick }) => {


  return (
    <button onClick={onClick} className={styles.btn}>{content}</button>
  );
}

export { Small_btn };