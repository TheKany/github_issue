import React, { useState } from 'react';
import styles from './Tabs.module.css';
import cx from 'clsx';

const tabList = [
  'Code',
  'Issues',
  'Pull Request',
  'Actions',
  'Project',
  'Wiki',
  'Security',
  'Insights',
  'Settings',
];

const Tab = ({ title, number, selected, onclick }) => {
  return (
    <li>
      <button
        onClick={onclick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
};

const Tabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(1);

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => {
        return (
          <Tab
            key={idx}
            title={tab}
            selected={selectedTabIdx === idx}
            onClick={() => setSelectedTabIdx(idx)}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
