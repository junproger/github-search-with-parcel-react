import React from 'react';

import * as styles from './paging.module.css';
import { paging } from '../../utils/paging';

export type Paging = {
  total: number | undefined;
  page: number;
};

export const Paging: React.FC<Paging> = ({ total, page }) => {
  return (
    <nav className={styles['paging']}>
      <span>
        Total: <output>{total ? total : 0}</output>
      </span>
      <strong>⬅ prev</strong>
      <span>
        Page:{' '}
        <output>
          {total ? page : 0} of {paging(total)}
        </output>
      </span>
      <strong>next ➡</strong>
    </nav>
  );
};
