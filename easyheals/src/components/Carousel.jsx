import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1)); console.log(curr)
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)); console.log(curr)

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
          {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
        >
          <img src="./navigation_left.svg"/>
        </button>
        <button
          onClick={next}
        >
          <img src="./navigation_right.svg"/>
        </button>
      </div>
    </div>
  );
};
