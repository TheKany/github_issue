import React from 'react';

import styles from './Badge.module.css';
import cx from 'clsx';

const Badge = ({ title, bgColor }) => {
  return <span className={cx(styles.badge, styles[bgColor])}>{title}</span>;
};

export default Badge;
