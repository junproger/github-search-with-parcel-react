import * as React from 'react';

import { useState } from 'react';

import github from '../../assets/github-logo.png';
import Texts from '../../constants/textCollection';
import QueriesType from '../../types/QueriesType';
import useFetchUsers from '../model/useFetchUsers';
import useFetchInfo from '../model/useFetchInfo';

import { Blank } from '../view/Blank';
import { Header } from '../view/Header';
import { Search } from '../control/Search';
import { Results } from '../view/Results';
import { Navbar } from '../control/Navbar';
import { Inform } from '../view/Inform';

export const App: React.FC = () => {
  const [getQuery, setQuery] = useState<QueriesType>({
    query: '',
    squery: '&sort=bestmatches&order=desc',
    page: '1',
  });
  const [getLogin, setLogin] = useState('');
  const callquery = (target: number, value: string): void => {
    let proper = '';
    if (target === 1) {
      proper = 'query';
    }
    if (target === 2) {
      proper = 'squery';
    }
    if (target === 3) {
      proper = 'page';
    }
    setQuery((prev) => {
      return {
        ...prev,
        [proper]: value,
      };
    });
  };
  const RESPDATA = useFetchUsers(getQuery);
  const RESTOTAL = RESPDATA.resp?.total_count;
  const callinfo = (login: string): void => setLogin(login);
  const USERINFO = useFetchInfo(getLogin);
  return (
    <>
      <Header image={github} attrib="github" title={Texts.titleHeader} />
      <Search callback={callquery} clearinfo={callinfo} content={Texts} />
      <Navbar callback={callquery} total={RESTOTAL} />
      <Inform inform={USERINFO.info} />
      {RESPDATA.resp?.total_count && RESPDATA.resp ? (
        <Results callback={callinfo} items={RESPDATA.resp.items} />
      ) : (
        <Blank message={Texts.errorMessage} />
      )}
    </>
  );
};
