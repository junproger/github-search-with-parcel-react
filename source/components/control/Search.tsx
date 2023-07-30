import React, { useState } from 'react';

import styles from './search.module.css';
import textCollection from '../../constants/textCollection';

export type Search = {
  callback: (value: string) => void;
  content: typeof textCollection;
};

export const Search: React.FC<Search> = ({ callback, content }) => {
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
      <p className={styles['inform']}>ⓘ {content.informSearch}</p>
      <label className={styles['label']}>
        Search users by login:
        <input
          size={42}
          type="search"
          name="search"
          title={content.titleSearch}
          autoFocus={true}
          value={getValue}
          placeholder={content.searchHolder}
          onChange={changeHandle}
          onKeyDown={pressHandle}
          className={styles['input']}
        ></input>
      </label>
    </div>
  );
};
