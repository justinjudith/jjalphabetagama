'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import HeroAutoSliderJSON from '../../Constants/HeroAutoSlider.json';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
const AutoSlider = () => {
  return (
    <Slider {...settings}>
      {HeroAutoSliderJSON.map(({ id, image }: any) => {
        return (
          <div key={id} className="w-full h-[600px] relative my-auto">
            <Image src={image} alt="Image1" fill className="object-contain" />
          </div>
        );
      })}
    </Slider>
  );
};

export default AutoSlider;
