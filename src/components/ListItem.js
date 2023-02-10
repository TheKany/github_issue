import React from 'react';
import dayjs from 'dayjs';

import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';

import Badge from './Badge';

const ListItem = ({ isChecked, onClickCheckBox, onClickTitle, data }) => {
  const badges = data.labels;
  const dataState = data.state === 'open' ? 'opened' : 'closed';
  const dataDate = data.state === 'open' ? data.created_at : data.closed_at;

  return (
    <ListItemLayout isChecked={isChecked} onClickCheckBox={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {dataState} {dayjs(dataDate).fromNow()} by{' '}
          {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
};

export default ListItem;
