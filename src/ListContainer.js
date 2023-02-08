import React, { useState } from 'react';
import cx from 'clsx';

import styles from './styles/css/ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('is:pr is:open');

  const OpenClosedFilter = ({ size, state, onClick, selected }) => {
    return (
      <span
        role="button"
        className={cx(styles.textFilter, { [styles.selected]: selected })}
        onClick={onClick}
      >
        {size} {state}
      </span>
    );
  };

  const OpenClosedFilters = ({ data }) => {
    const [isOpenMode, setIsOpenMode] = useState(true);
    // const data = getDate();
    // const openData = data.filter((data) => data.state === 'open')
    // const closeData = data.filter((data) => data.state === 'close')
    const openModeDataSize = 1;
    const closeModeDataSize = 2;

    return (
      <>
        <OpenClosedFilter
          size={openModeDataSize}
          state="Open"
          selected={isOpenMode}
          onClick={() => setIsOpenMode(true)}
        />
        <OpenClosedFilter
          size={closeModeDataSize}
          state="Closed"
          selected={!isOpenMode}
          onClick={() => setIsOpenMode(false)}
        />
      </>
    );
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button
          style={{
            backgroundColor: '#2DA44E',
            color: 'white',
            fontSize: '14px',
          }}
        >
          New Issue
        </Button>
      </div>

      <OpenClosedFilters />

      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterList}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
      </ListItemLayout>
      <div className={styles.ListItemcontainer}>
        <ListItem
          badges={[
            {
              bgColor: 'red',
              title: 'bug',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ListContainer;
