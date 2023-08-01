import { useEffect, useState } from 'react';

import { loging } from '../../utils/loging';

import { IUserInfo } from '../../types/IUserInfo';

export interface IFetchInfo {
  done: boolean;
  info: IUserInfo | null;
}

const useFetchInfo = (login: string): IFetchInfo => {
  const [getRespn, setRespn] = useState<IFetchInfo>({
    done: false,
    info: null,
  });
  useEffect(() => {
    if (!login) {
      setRespn({
        done: true,
        info: null,
      });
      return;
    }
    const fetchingInfo = async (): Promise<IUserInfo> => {
      const userInfo = await fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then((data: IUserInfo) => data)
        .catch((err) => {
          // loging errors
          loging(err);
          alert(err);
          throw err;
        });
      if (userInfo) {
        setRespn({
          done: true,
          info: userInfo,
        });
      }
      return userInfo;
    };
    fetchingInfo();
  }, [login]);
  return getRespn;
};

export default useFetchInfo;
