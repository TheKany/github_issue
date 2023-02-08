import React, { useState } from 'react';
import cx from 'clsx';

import styles from './styles/css/ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Modal from './components/Modal';

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

const ListFilterItem = ({ onClick, children, onChangeFilter }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={['bug', 'Labels', 'Apple']}
          onClickCell={() => {
            onChangeFilter();
          }}
        />
      </div>
    </div>
  );
};

const ListFilter = ({ onChangeFilter }) => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.filterList}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  );
};

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [list, setList] = useState([]);

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
        <ListFilter onChangeFilter={(filteredData) => {}} />
      </ListItemLayout>

      <div className={styles.ListItemcontainer}>
        {list.map((listItem, idx) => {
          <ListItem
            key={idx}
            badges={[
              {
                bgColor: 'red',
                title: 'bug',
              },
            ]}
          />;
        })}
      </div>
    </div>
  );
};

export default ListContainer;
