import React from 'react';

import * as styles from './results.module.css';
import { ISearchItem } from '../../types/ISearchItem';

export type Results = {
  callback: (login: string) => void;
  items: ISearchItem[];
};

export const Results: React.FC<Results> = ({ items, callback }) => {
  const clickHandle = (e: React.MouseEvent<HTMLLIElement>): void => {
    if (e.currentTarget.dataset['login']) {
      callback(e.currentTarget.dataset['login']);
    }
  };
  return (
    <ol className={styles['list']}>
      {items &&
        items.map((user) => (
          <li
            key={user.id}
            id={user.node_id}
            data-login={user.login}
            className={styles['item']}
            onClick={(e: React.MouseEvent<HTMLLIElement>): void => clickHandle(e)}
          >
            {user.login}
          </li>
        ))}
    </ol>
  );
};
