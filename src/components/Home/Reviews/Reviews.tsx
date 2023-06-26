import Wrapper from '@/Components/Shared/Wrapper';
import Image from 'next/image';
import Heading from '@/Components/Shared/Headings/Heading';
import SubHeading from '@/Components/Shared/Headings/SubHeading';
import Review from './Review';
import Stats from './Stats';
import ReviewJSON from '../../../Constants/Review.json';
import { FaHandshake, FaAward } from 'react-icons/fa';
import { BiCalendarStar } from 'react-icons/bi';
import { BsReception4 } from 'react-icons/bs';
interface ReviewProps {
  count?: any;
}

function Reviews({ count }: ReviewProps) {
  return (
    <>
      <Wrapper id="value" style="max-h-[250px]">
        <div className="w-full h-full lg:min-h-[250px] relative flex justify-center gap-2 pt-10 lg:bg-blue-main px-2">
          <div className="w-[50px] h-[50px] relative">
            <Image
              src="/Navbar/People.png"
              alt=""
              fill
              className="object-contain hidden md:block"
            />
          </div>
          <Heading
            text="What Friends and Public Says"
            style={'text-3xl lg:text-white text-black'}
          />
        </div>
        <div className="w-full h-full lg:absolute lg:top-32 lg:left-[2.8rem] flex flex-wrap justify-center gap-7 max-w-[1000px] mx-auto">
          {ReviewJSON.map(({ text, image, id }: any) => {
            return <Review key={id} image={image} text={text} />;
          })}
        </div>
        <div className="text-center mt-10 lg:mt-[20rem]">
          <Heading text="Where we are and what" />
          <SubHeading
            text="We provide expert bussiness coaching to both indiviuals and
            bussiness.With over 30 years of experience we will ensure that you
            are always getting best guidance from the top people in the entire
            industry"
          />

          <div className="flex flex-wrap gap-4 lg:gap-[3rem] justify-center mt-8 px-6 md:px-3">
            <Stats count={count} about={'Events'} icon={BiCalendarStar} />
            <Stats count={count} about="Clients" icon={FaHandshake} />
            <Stats count={16} about="Success" icon={BsReception4} />
            <Stats count={10} about="Awards" icon={FaAward} />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Reviews;
