import React from 'react';

import styles from './navbar.module.css';
import { loging } from '../../utils/loging';

export type Sort = {
  callback: (value: string) => void;
};

export const Navbar: React.FC<Sort> = ({ callback }) => {
  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    loging(e.target.value);
    callback(e.target.value);
  };
  return (
    <div className={styles['navbar']}>
      <label className={styles['label']}>
        Sort by:
        <select
          name="sort"
          disabled={false}
          className={styles['select']}
          defaultValue="&sort=bestmatches&order=desc"
          onChange={selectHandle}
        >
          <option selected={true} className={styles['options']} value="&sort=bestmatches&order=desc">
            Best Matches
          </option>
          <option className={styles['options']} value="&sort=repositories&order=desc">
            High Repositories
          </option>
          <option className={styles['options']} value="&sort=repositories&order=asc">
            Low Repositories
          </option>
          <option className={styles['options']} value="&sort=followers&order=desc">
            High Followers
          </option>
          <option className={styles['options']} value="&sort=followers&order=asc">
            Low Followers
          </option>
        </select>
      </label>
    </div>
  );
};
