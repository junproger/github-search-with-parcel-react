import React, { useState } from 'react';

import github from '../../assets/github-logo.png';
import Texts from '../../constants/textCollection';
import QueriesType from '../../types/QueriesType';
import useFetchUsers from '../model/useFetchUsers';

import { Blank } from '../view/Blank';
import { Header } from '../view/Header';
import { Search } from '../control/Search';
import { Results } from '../view/Results';
import { Navbar } from '../control/Navbar';
import { loging } from '../../utils/loging';

export const App: React.FC = () => {
  const [getQuery, setQuery] = useState<QueriesType>({
    query: '',
    squery: '&sort=bestmatches&order=desc',
    page: 1,
  });
  const callquery = (target: number, value: string): void => {
    if (target === 1) {
      setQuery((prev) => {
        return {
          ...prev,
          query: value,
        };
      });
    }
    if (target === 2) {
      setQuery((prev) => {
        return {
          ...prev,
          squery: value,
        };
      });
    }
  };
  const RESPDATA = useFetchUsers(getQuery);
  const RESTOTAL = RESPDATA?.total_count;
  loging(RESPDATA);
  return (
    <>
      <Header image={github} attrib="github" title={Texts.titleHeader} />
      <Search callback={callquery} content={Texts} />
      <Navbar callback={callquery} total={RESTOTAL} />
      {RESPDATA ? <Results items={RESPDATA.items} /> : <Blank />}
    </>
  );
};
