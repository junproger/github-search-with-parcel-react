import React from 'react';

import styles from './header.module.css';

export type Header = {
  image: string;
  attrib: string;
  title: string;
};

export const Header: React.FC<Header> = (props: Header) => {
  const { image, attrib, title } = props;
  return (
    <header>
      <h1 className={styles['title']}>
        <img src={image} className={styles['github']} alt={attrib} />
        {title}
      </h1>
    </header>
  );
};
