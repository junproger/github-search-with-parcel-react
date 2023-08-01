import React from 'react';

import * as styles from './inform.module.css';
import { IUserInfo } from '../../types/IUserInfo';

export type Inform = {
  inform: IUserInfo | null;
};

export const Inform: React.FC<Inform> = ({ inform }) => {
  return (
    <div className={styles['inform']}>
      <table className={styles['tableblock']}>
        <thead className={styles['tablehead']}>
          <tr className={styles['firstrow']}>
            <td>ID</td>
            <td>Name</td>
            <td>Github</td>
            <td>Repos</td>
            <td>Gists</td>
            <td>Followers</td>
            <td>Following</td>
          </tr>
        </thead>
        <tbody className={styles['tablebody']}>
          <tr className={styles['secondrow']}>
            <td>{inform?.id}</td>
            <td>{inform?.name}</td>
            <td>
              <a target="_new" href={inform?.html_url}>
                {inform?.login}
              </a>
            </td>
            <td>{inform?.public_repos}</td>
            <td>{inform?.public_gists}</td>
            <td>{inform?.followers}</td>
            <td>{inform?.following}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
