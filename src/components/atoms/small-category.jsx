import styles from '../../styles/small-category.module.css';

const Small_category = ({ options = [], selectStyle = {}, optionStyle = {} }) => {



  return (
    <select style={selectStyle} className={styles.category}>
      {options.map((item) => {
        return (<option
          style={optionStyle}
          key={item}
          value={item}>{item}
        </option>)
      })}
    </select>
  );
}

export { Small_category };