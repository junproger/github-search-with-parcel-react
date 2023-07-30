import React, { useState } from 'react';

import styles from './search.module.css';

export type Search = {
  callback: (value: string) => void;
  inform: string;
  holder: string;
  title: string;
};

export const Search: React.FC<Search> = ({ callback, inform, holder, title }) => {
  const [getValue, setValue] = useState('');
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.trim()) {
      setValue(e.target.value);
    } else {
      setValue('');
      callback('');
    }
  };
  const pressHandle = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Delete') {
      setValue('');
      callback('');
    }
    if (e.key === 'Enter') {
      callback(getValue);
    }
  };
  return (
    <div className={styles['search']}>
      <p className={styles['inform']}>ⓘ {inform}</p>
      <label className={styles['label']}>
        Search users by name:
        <input
          size={41}
          type="search"
          name="search"
          title={title}
          autoFocus={true}
          value={getValue}
          placeholder={holder}
          onChange={changeHandle}
          onKeyDown={pressHandle}
          className={styles['input']}
        ></input>
      </label>
    </div>
  );
};
