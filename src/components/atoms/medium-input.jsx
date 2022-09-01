import styles from '../../styles/medium-input.module.css';

const Medium_input = ({ type, content, onChange, id, placeholder }) => {



  return (
    <input onChange={onChange}
      className={styles.input}
      type={type}
      value={content}
      id={id}
      placeholder={placeholder} />
  );
}

export { Medium_input };