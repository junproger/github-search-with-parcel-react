import React, { useState } from 'react';

import github from '../../assets/github-logo.png';
import Texts from '../../constants/textCollection';
import QueriesType from '../../types/QueriesType';

import { Header } from '../view/Header';
import { Search } from '../control/Search';
import { useFetchUsers } from '../model/useFetchUsers';
import { loging } from 'utils/loging';

export const App: React.FC = () => {
  const [getQuery, setQuery] = useState<QueriesType>({
    query: '',
    sort: 'bestmatch',
    order: 'desc',
    page: 1,
  });
  const callquery = (value: string): void => {
    setQuery((prev) => {
      return {
        ...prev,
        query: value,
      };
    });
  };
  const respData = useFetchUsers(getQuery);
  loging(respData);
  return (
    <>
      <Header image={github} attrib="github" title={Texts.titleHeader} />
      <Search callback={callquery} holder={Texts.searchHolder} inform={Texts.informSearch} title={Texts.titleSearch} />
    </>
  );
};
