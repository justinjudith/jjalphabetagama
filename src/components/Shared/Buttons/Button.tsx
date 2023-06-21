import React from 'react';

interface Props {
  type: 'button' | 'reset' | 'submit' | undefined;
  text: any;
  style?: string;
  onclick: any;
}

const Button: React.FC<Props> = ({
  type,
  text,
  style = 'h-[40px] w-[140px] text-[16px]',
  onclick,
}) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`flex items-center justify-center text-white-main bg-blue-main focus:outline-none focus:ring-4 focus:ring-brand-main/50 font-medium rounded-lg text-center ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
