import { ImQuotesLeft } from 'react-icons/im';
import Image from 'next/image';
interface Props {
  image: string;
  text: string;
}

const Review: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="w-full h-full max-w-[300px] min-h-[400px] max-h-[400px] flex flex-col bg-white border rounded-3xl px-6 pt-10 gap-4 shadow-black shadow-md">
      <div className="flex items-start justify-start">
        <div className="text-5xl font-bold text-blue-main">
          <ImQuotesLeft />
        </div>
      </div>

      <p className="flex justify-start text-grey-light">{text}</p>
      <div className=" w-[100px] max-w-[100px] mx-auto h-[100px] rounded-full relative">
        <Image src="/noavatar.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Review;
