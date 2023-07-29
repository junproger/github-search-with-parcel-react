import React, { useState } from 'react';

import github from '../../assets/github-logo.png';

import { Header } from '../view/Header';
import { Search } from '../control/Search';
import Texts from '../../constants/textCollection';

export const App: React.FC = () => {
  const [getQuery, setQuery] = useState('');
  const callback = (value: string): void => {
    setQuery(value);
    // eslint-disable-next-line no-console
    console.log(value, getQuery);
  };
  return (
    <>
      <Header image={github} attrib="github" title={Texts.titleHeader} />
      <Search callback={callback} holder={Texts.searchHolder} inform={Texts.informSearch} title={Texts.titleSearch} />
    </>
  );
};
