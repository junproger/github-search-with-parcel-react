import { FC } from 'react';

import * as styles from './blank.module.css';

export type BlankType = {
  message: string;
};

export const Blank: FC<BlankType> = ({ message }) => {
  return (
    <div className={styles['blank']}>
      <h2>{message}</h2>
    </div>
  );
};
