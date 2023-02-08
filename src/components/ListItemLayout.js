import React from 'react';

import cx from 'clsx';
import styles from './ListItemLayout.module.css';

const ListItemLayout = ({ children, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkBox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
};

export default ListItemLayout;
