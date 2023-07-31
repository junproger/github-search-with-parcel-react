import React from 'react';

import * as styles from './sorting.module.css';

import { SortOrder } from '../../constants/apiSortOrder';

export type Sorting = {
  value: string;
  handle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Sorting: React.FC<Sorting> = ({ value, handle }) => {
  return (
    <div className={styles['sorting']}>
      <label className={styles['label']}>
        Sort by:
        <select name="sort" value={value} disabled={false} className={styles['select']} onChange={handle}>
          <option className={styles['options']} value={SortOrder.BestMatch}>
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
