import { useEffect, useState } from 'react';

import { loging } from '../../utils/loging';
import { ISearchData } from '../../types/ISearchData';
import QueriesType from '../../types/QueriesType';

export const useFetchUsers = (queries: QueriesType): ISearchData | null => {
  const [getRespn, setRespn] = useState<ISearchData | null>(null);
  const { query, squery, page } = queries;

  useEffect(() => {
    if (!queries.query) {
      setRespn(null);
      return;
    }
    const fetchingUsers = async (): Promise<ISearchData> => {
      const dataUsers = await fetch(`https://api.github.com/search/users?q=${query}${squery}&page=${page}`)
        .then((response) => response.json())
        .then((data: ISearchData) => data)
        .catch((err) => {
          loging(err);
          throw err;
        });
      setRespn(dataUsers);
      return dataUsers;
    };
    fetchingUsers();
  }, [queries]);
  return getRespn;
};
