import React from 'react';
import Link from 'next/link';
interface Props {
  text: string;
  link: string;
  style?: string;
}

const DrawerLink = ({ text, link, style }: Props) => {
  return (
    <Link href={link}>
      <button
        className={`font-bold w-36 py-2 bg-blue-main text-white hover:bg-grey-main hover:text-black   flex items-center justify-center ${style} uppercase`}
      >
        {text}
      </button>
    </Link>
  );
};

export default DrawerLink;
