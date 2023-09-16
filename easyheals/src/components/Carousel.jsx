import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 2 : curr - 2));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 2 ? 0 : curr + 2));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative flex items-center justify-center mx-10">
      <button
        onClick={prev}
        className="z-10 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white absolute left-2 transform -translate-x-1/2"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="overflow-hidden w-[calc(100%)] mx-20">
        <div
          className="flex transition-transform ease-out duration-500 gap-x-10"
          style={{ transform: `translateX(-${curr * 50}%)` }}
        >
          {slides}
        </div>
      </div>

      <button
        onClick={next}
        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white absolute right-2 transform translate-x-1/2"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
