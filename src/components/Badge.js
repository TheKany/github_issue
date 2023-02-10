import React from 'react';

import styles from './Badge.module.css';

const Badge = ({ name, color }) => {
  return (
    <span className={styles.badge} style={{ backgroundColor: `#${color}` }}>
      {name}
    </span>
  );
};

export default Badge;
