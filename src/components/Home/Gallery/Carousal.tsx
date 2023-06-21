'use client';
import React from 'react';
import Slider from 'react-slick';
import Wrapper from '@/Components/Shared/Wrapper';
import Heading from '@/Components/Shared/Headings/Heading';
import Image from 'next/image';
import SliderJSON from '../../../Constants/Slider.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className=" hidden md:inline-block rounded-full md:absolute left-3 top-[16.5rem] z-10 text-3xl p-2"
      onClick={onClick}
    >
      <IoIosArrowBack className="bg-black text-white rounded-full " />
    </div>
  );
};
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="hidden md:inline-block rounded-full md:absolute right-3 bottom-[16.5rem] z-10 text-3xl p-2 "
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white bg-black rounded-full " />
    </div>
  );
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};
const Carousal = () => {
  return (
    <Wrapper id="gallery" style="w-full h-full mt-20">
      <Heading text="Our Gallery" />
      <Slider {...settings}>
        {SliderJSON.map(({ id, image, title, about }: any) => {
          return (
            <div key={id} className="mt-10 px-3 md:px-0 relative">
              <div className="w-full h-[500px] relative">
                <Image src={image} alt="Image1" fill className="object-cover" />
              </div>
              <h1 className="text-center capitalize font-bold text-2xl">
                {title}
              </h1>
              <h1 className="text-center capitalize font-bold">{about}</h1>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default Carousal;
