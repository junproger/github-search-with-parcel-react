import React from 'react';

import github from '../../assets/github-logo.png';

import { Header } from '../view/Header';

export const App: React.FC = () => {
  const title = 'Github-Search React-App';
  return (
    <>
      <Header image={github} attrib="github" title={title} />
    </>
  );
};
