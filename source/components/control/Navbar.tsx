import { ChangeEvent, FC, useState } from 'react';

import * as styles from './navbar.module.css';

import { Sorting } from './Sorting';
import { Paging } from './Paging';

export type Navbar = {
  callback: (target: number, value: string) => void;
  total: number | undefined;
};

export const Navbar: FC<Navbar> = ({ callback, total }) => {
  const [getValue, setValue] = useState('');
  const [getPage, setPage] = useState(1);
  const selectHandle = (e: ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
    callback(2, e.target.value);
  };
  const pagingHandle = (page: number): void => {
    setPage(page);
    // changes type from number to string
    callback(3, `${page}`);
  };
  return (
    <div className={styles['navbar']}>
      <Sorting value={getValue} handle={selectHandle} />
      <Paging total={total} page={getPage} handle={pagingHandle} />
    </div>
  );
};
