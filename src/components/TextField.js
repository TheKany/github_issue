import React, { forwardRef } from 'react';
import cx from 'clsx';

import styles from './TextField.module.css';

const TextField = (
  { type = 'input', name, onChange, value, placeholder, error },
  ref,
) => {
  return type === 'input' ? (
    <>
      <input
        onChange={onChange}
        value={value}
        ref={ref}
        name={name}
        className={cx(styles.input, { [styles.error]: Boolean(error) })}
        placeholder={placeholder}
      />
    </>
  ) : (
    <>
      <textarea
        onChange={onChange}
        value={value}
        ref={ref}
        name={name}
        className={cx(styles.textarea, { [styles.error]: Boolean(error) })}
        placeholder={placeholder}
      />
    </>
  );
};

export default forwardRef(TextField);
