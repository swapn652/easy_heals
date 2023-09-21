import React from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";

export const CarouselTest = () => {
  return (
    <div>
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <img src="./navigation_left.svg"/>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <img src="./navigation_right.svg"/>
          </IconButton>
        )}
      >
        <div className="flex flex-row justify-center gap-x-10">
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
            <img src="./issues/men_health.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
        </div>

        <div className="flex flex-row justify-center gap-x-10">
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
            <img src="./issues/men_health.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
        </div>
        <div className="flex flex-row justify-center gap-x-10">
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
        </div>
        
      </Carousel>
    </div>
  );
};
