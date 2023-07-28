import React from 'react';

export type Header = {
  image: string;
  attrib: string;
  title: string;
};

export const Header: React.FC<Header> = (props: Header) => {
  const { image, attrib, title } = props;
  return (
    <header>
      <h1>
        <img src={image} className={attrib} alt={attrib} />
        {title}
      </h1>
    </header>
  );
};
