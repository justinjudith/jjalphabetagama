import React from 'react';

interface Props {
  text: string;
  style?: string;
}

const Heading = ({ text, style }: Props) => {
  return (
    <h1
      className={`text-center font-bold capitalize ${
        style ? style : 'text-3xl '
      }`}
    >
      {text}
    </h1>
  );
};

export default Heading;
