import React, { useEffect, useState } from 'react';
import cx from 'clsx';

import styles from './Modal.module.css';

const Modal = ({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(
      searchDataList.filter(
        (item) => item.toLowerCase() === searchValue.toLowerCase(),
      ),
    );
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>⨉</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div role="button" key={data} onClick={onClickCell}>
          {data}
        </div>
      ))}
    </div>
  );
};

export default Modal;
