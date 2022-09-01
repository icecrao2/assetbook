import styles from '../../styles/small-input.module.css';

const Small_input = ({ type, content, onChange, id, placeholder }) => {

  

  return (
    <input onChange={onChange}
      className={styles.input}
      type={type}
      value={content}
      id={id} 
      placeholder={placeholder}/>
  );
}

export { Small_input };