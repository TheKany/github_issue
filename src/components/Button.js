import styles from './Button.module.css';

const Button = ({ style, children }) => {
  return (
    <button className={styles.Button} style={style}>
      {children}
    </button>
  );
};

export default Button;
