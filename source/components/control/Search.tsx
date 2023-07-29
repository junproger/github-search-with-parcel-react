import React, { useState } from 'react';

import styles from './search.module.css';

export type Search = {
  callback: (value: string) => void;
  inform: string;
  holder: string;
  title: string;
};

export const Search: React.FC<Search> = (props: Search) => {
  const { callback, inform, holder, title } = props;
  const [getValue, setValue] = useState('');
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.trim()) {
      setValue(e.target.value);
    }
  };
  const pressHandle = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Delete') {
      setValue('');
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
          autoFocus={true}
          value={getValue}
          onChange={changeHandle}
          className={styles['input']}
          placeholder={holder}
          title={title}
          onKeyDown={pressHandle}
        ></input>
      </label>
    </div>
  );
};
