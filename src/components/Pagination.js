import React from 'react';
import cx from 'clsx';

import styles from './Pagination.module.css';

const PageButton = ({ number, selected, onClick }) => {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

const Pagination = ({ currentPage, maxPage, onClickPageButton }) => {
  return (
    <div>
      <button
        className={cx(styles.arrowButton, {
          [styles.disabled]: currentPage === 1,
        })}
      >
        {'< Previous'}
      </button>
      {new Array(maxPage).fill(null).map((_, idx) => (
        <PageButton
          key={idx}
          number={idx + 1}
          onClick={onClickPageButton}
          selected={idx + 1 === currentPage}
        />
      ))}
      <button
        className={cx(styles.arrowButton, {
          [styles.disabled]: currentPage === maxPage,
        })}
      >
        {'Next >'}
      </button>
    </div>
  );
};

export default Pagination;
