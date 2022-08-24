import React, { useState } from 'react';
import { sliderData } from './sliderData';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide === sliderData.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(sliderData.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <section className='max-w-[1240px] mx-auto py-16 px-4 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
        onClick={prevSlide}
      />
      <BsArrowRightSquareFill
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
        onClick={nextSlide}
      />
      {sliderData.map((picture, index) => (
        <div
          key={index}
          className={index === activeSlide ? 'opacity-100' : 'opacity-0'}>
          {index === activeSlide && (
            <img src={picture.url} alt='images' className='w-full rounded-md' />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carousel;
