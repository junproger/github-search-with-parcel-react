import { useEffect, useState } from 'react';

import QueriesType from '../../types/QueriesType';

import { loging } from '../../utils/loging';
import { ISearchData } from '../../types/ISearchData';
import { ISearchError } from '../../types/ISearchError';

export interface IFetchUsers {
  done: boolean;
  resp: ISearchData | null;
  error: ISearchError | null;
}

const useFetchUsers = (queries: QueriesType): IFetchUsers => {
  const [getRespn, setRespn] = useState<IFetchUsers>({
    done: false,
    resp: null,
    error: null,
  });
  const { query, squery, page } = queries;
  useEffect(() => {
    if (!queries.query) {
      setRespn({
        done: true,
        resp: null,
        error: null,
      });
      return;
    }
    const fetchingUsers = async (): Promise<ISearchData | ISearchError> => {
      const dataUsers = await fetch(`https://api.github.com/search/users?q=${query}${squery}&page=${page}`)
        .then((response) => response.json())
        .then((data: ISearchData | ISearchError) => data)
        .catch((err) => {
          // loging errors
          loging(err);
          alert(err);
          throw err;
        });
      const isData = (data: ISearchData | ISearchError): data is ISearchData => {
        return (data as ISearchData).incomplete_results !== undefined;
      };
      if (isData(dataUsers)) {
        setRespn({
          done: true,
          resp: dataUsers,
          error: null,
        });
      } else {
        setRespn({
          done: true,
          resp: null,
          error: dataUsers,
        });
      }
      return dataUsers;
    };
    fetchingUsers();
  }, [queries]);
  return getRespn;
};

export default useFetchUsers;
