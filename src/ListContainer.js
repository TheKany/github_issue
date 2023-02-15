import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cx from 'clsx';

import styles from './styles/css/ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Modal from './components/Modal';
import Pagination from './components/Pagination';
import { GITHUB_API } from './constants';
import { Link, useSearchParams } from 'react-router-dom';

const MAX_PAGE = 10;

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

const OpenClosedFilters = ({ isOpenMode, onClickMode }) => {
  return (
    <>
      <OpenClosedFilter
        // size={openData}
        state={'Open'}
        selected={isOpenMode}
        onClick={() => onClickMode('open')}
      />
      <OpenClosedFilter
        // size={closeData}
        state={'Closed'}
        selected={!isOpenMode}
        onClick={() => onClickMode('closed')}
      />
    </>
  );
};

const ListFilterItem = ({
  searchDataList,
  children,
  showModal,
  onClick,
  onClose,
  onChangeFilter,
}) => {
  const [list, setList] = useState(searchDataList);

  useEffect(() => {
    setList(searchDataList);
  }, [searchDataList]);

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder="Filter labels"
          searchDataList={list}
          onClickCell={(params) => {
            onChangeFilter(params);
          }}
        />
      </div>
    </div>
  );
};

const ListFilter = ({ onChangeFilter }) => {
  const [showModal, setShowModal] = useState();
  const [list, setList] = useState([]);
  const filterList = [
    // 'Author',
    'Label',
    // 'Projects',
    'Milestones',
    'Assignee',
    // 'Sort',
  ];

  const getData = async (apiPath) => {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/${apiPath}`,
    );
    console.log({ data });
    let result = [];
    switch (apiPath) {
      case 'assignees':
        result = data.data.map((d) => ({
          name: d.login,
        }));
        break;
      case 'milestones':
        result = data.data.map((d) => ({
          name: d.title,
        }));
        break;
      case 'labels':
        result = data.data;
        break;
      default:
    }

    setList(result);
  };

  useEffect(() => {
    if (showModal) {
      const apiPath =
        showModal[showModal.length - 1] === 's'
          ? `${showModal.toLowerCase()}`
          : `${showModal.toLowerCase()}s`;
      getData(apiPath);
    }
  }, [showModal]);

  return (
    <>
      <div className={styles.filterList}>
        {filterList.map((item) => (
          <ListFilterItem
            key={item}
            searchDataList={list}
            onClick={() => setShowModal(item)}
            onClose={() => setShowModal()}
            showModal={showModal === item}
            onChangeFilter={onChangeFilter}
          >
            {item}
          </ListFilterItem>
        ))}
      </div>
    </>
  );
};

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const state = searchParams.get('state');

  const getData = async (params) => {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/TheKany/github_issue/issues`,
      { params },
    );
    setList(data);
  };

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Link to="/new">
            <Button
              style={{
                backgroundColor: '#2DA44E',
                color: 'white',
                fontSize: '14px',
              }}
            >
              New Issue
            </Button>
          </Link>
        </div>

        <OpenClosedFilters
          isOpenMode={state !== 'closed'}
          onClickMode={(mode) => setSearchParams({ mode })}
        />

        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              setSearchParams(params);
            }}
          />
        </ListItemLayout>

        <div className={styles.ListItemcontainer}>
          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              isChecked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={MAX_PAGE}
          currentPage={page}
          onClickPageButton={(number) => {
            setSearchParams({ page: number });
          }}
        />
      </div>
    </>
  );
};

export default ListContainer;
