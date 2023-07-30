import React, { useState } from 'react';

import styles from './navbar.module.css';
import { loging } from '../../utils/loging';
import { SortOrder } from '../../constants/apiSortOrder';

export type Sort = {
  callback: (value: string) => void;
};

export const Navbar: React.FC<Sort> = ({ callback }) => {
  const [getValue, setValue] = useState('');
  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
    loging(e.target.value);
    callback(e.target.value);
  };
  return (
    <div className={styles['navbar']}>
      <label className={styles['label']}>
        Sort by:
        <select name="sort" value={getValue} disabled={false} className={styles['select']} onChange={selectHandle}>
          <option selected={true} className={styles['options']} value={SortOrder.BestMatch}>
            Best Matches
          </option>
          <option className={styles['options']} value={SortOrder.HighRepo}>
            High Repositories
          </option>
          <option className={styles['options']} value={SortOrder.LowRepo}>
            Low Repositories
          </option>
          <option className={styles['options']} value={SortOrder.HighFoll}>
            High Followers
          </option>
          <option className={styles['options']} value={SortOrder.LowFoll}>
            Low Followers
          </option>
        </select>
      </label>
    </div>
  );
};
