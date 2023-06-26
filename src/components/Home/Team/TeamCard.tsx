import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { AiFillTwitterCircle } from 'react-icons/ai';
interface Props {
  category: string;
  memberName: string;
  about: string;
  faceBookURL: string;
  instagramURL: string;
  twitterURL: string;
}

const TeamCard: React.FC<Props> = ({
  category,
  memberName,
  about,
  faceBookURL,
  instagramURL,
  twitterURL,
}) => {
  return (
    <div className="w-full h-full max-w-[320px] flex flex-col justify-center items-center gap-4 shadow-black shadow-md py-6 rounded-2xl">
      <div className=" w-[100px] h-[100px] rounded-full relative">
        <Image src="/noavatar.png" alt="" fill className="object-contain" />
      </div>

      <div>
        <h5 className="font-bold text-lg text-grey-light">{category}</h5>
        <h1 className="text-xl">{memberName}</h1>
      </div>
      <p className="text-center mx-auto">{about}</p>
      <div className="flex gap-5 text-3xl text-blue-main">
        <Link href={faceBookURL} rel="noopener noreferrer" target="_blank">
          <FaFacebook />
        </Link>
        <Link href={instagramURL} rel="noopener noreferrer" target="_blank">
          <FaInstagram />
        </Link>
        <Link href={twitterURL} rel="noopener noreferrer" target="_blank">
          <AiFillTwitterCircle />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
