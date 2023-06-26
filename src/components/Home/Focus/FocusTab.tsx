import React from 'react';
import Image from 'next/image';
interface Props {
  image: string;
  text: string;
}

const FocusTab: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="w-full h-full max-w-[380px] flex flex-col justify-center items-center gap-4 px-12 py-10 border rounded-xl shadow-black shadow-md hover:shadow-none hover:border-none">
      <Image src={image} alt="" width={120} height={120} />
      <h1 className="capitalize text-xl font-semibold">{text}</h1>
    </div>
  );
};

export default FocusTab;
