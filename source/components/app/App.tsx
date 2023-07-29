import React from 'react';

import github from '../../assets/github-logo.png';

import { Header } from '../view/Header';
import { Search } from '../control/Search';

export const App: React.FC = () => {
  const titleHeader = 'Github-Search React-App';
  const informSearch =
    'For enter print a name or part of name and press an enter key. For delete printed press a delete key.';
  const searchHolder = 'Enter a name or part of name, "octocat" for example.';
  const titleSearch = 'Enter a name or part of name and press an enter key, for delete press a delete key.';
  const callback = (value: string): void => {
    // eslint-disable-next-line no-console
    console.log(value);
  };
  return (
    <>
      <Header image={github} attrib="github" title={titleHeader} />
      <Search callback={callback} holder={searchHolder} inform={informSearch} title={titleSearch} />
    </>
  );
};
