import React from 'react';

import styles from './results.module.css';
import { ISearchItem } from '../../types/ISearchItem';
import { loging } from 'utils/loging';

export type Results = {
  items: ISearchItem[];
};

export const Results: React.FC<Results> = (props: Results) => {
  const { items } = props;
  const clickHandle = (e: React.MouseEvent<HTMLLIElement>): void => {
    loging(e.currentTarget.dataset['login']);
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
