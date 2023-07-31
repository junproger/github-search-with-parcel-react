import React, { useState } from 'react';

import * as styles from './navbar.module.css';

import { loging } from '../../utils/loging';
import { Sorting } from './Sorting';
import { Paging } from './Paging';

export type Navbar = {
  callback: (value: string) => void;
  total: number | undefined;
  page: number;
};

export const Navbar: React.FC<Navbar> = ({ callback, total, page }) => {
  const [getValue, setValue] = useState('');
  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
    loging(e.target.value);
    callback(e.target.value);
  };
  return (
    <div className={styles['navbar']}>
      <Sorting value={getValue} handle={selectHandle} />
      <Paging total={total} page={page} />
    </div>
  );
};
