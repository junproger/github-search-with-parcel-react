import React, { useState } from 'react';

import * as styles from './navbar.module.css';

import { loging } from '../../utils/loging';
import { Sorting } from './Sorting';

export type Navbar = {
  callback: (value: string) => void;
};

export const Navbar: React.FC<Navbar> = ({ callback }) => {
  const [getValue, setValue] = useState('');
  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
    loging(e.target.value);
    callback(e.target.value);
  };
  return (
    <div className={styles['navbar']}>
      <Sorting value={getValue} handle={selectHandle} />
    </div>
  );
};
