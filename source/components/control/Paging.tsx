import { FC } from 'react';

import * as styles from './paging.module.css';

import { paging } from '../../utils/paging';

export type Paging = {
  handle: (page: number) => void;
  total: number | undefined;
  page: number;
};

export const Paging: FC<Paging> = ({ handle, total, page }) => {
  return (
    <nav className={styles['paging']}>
      <span>
        Total: <output>{total ? total : 0}</output>
      </span>
      {page >= 2 ? (
        <strong className={styles['arrows']} onClick={(): void => handle(page - 1)}>
          ⬅ prev
        </strong>
      ) : (
        <span className={styles['disable']}>⇦ prev</span>
      )}
      <span>
        Page:{' '}
        <output>
          {total ? page : 0} of {paging(total)}
        </output>
      </span>
      {page < paging(total) ? (
        <strong className={styles['arrows']} onClick={(): void => handle(page + 1)}>
          next ➡
        </strong>
      ) : (
        <span className={styles['disable']}>next ⇨</span>
      )}
    </nav>
  );
};
