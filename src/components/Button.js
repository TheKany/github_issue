import styles from './Button.module.css';

const Button = ({ style, children, type = 'buttom', disabled }) => {
  return (
    <button
      className={styles.Button}
      style={style}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
