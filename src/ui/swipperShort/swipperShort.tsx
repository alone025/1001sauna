import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface ImageData {
    id: number;
    src: string;
    alt: string;
    seat: number;
  }

interface SwiperProps {
  slides: ImageData[];
}

const Swiper: React.FC<SwiperProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full mx-auto rounded-b-2xl bg-white shadow-sm pb-5">
      {/* Swiper Wrapper */}
      <div {...handlers} className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={slide.src} alt={`Slide ${index}`} className="w-full h-[210px] object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
          >
            {index === currentIndex ? <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#3B4255"/>
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <circle cx="4" cy="4" r="4" fill="#CCCCCC"/>
</svg>}
        </button>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
