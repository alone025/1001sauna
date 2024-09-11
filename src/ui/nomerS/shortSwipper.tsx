import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface ImageData {
    id: number;
    src: string;
    alt: string;
  }

interface SwiperProps {
  slides: ImageData[];
}

const SwiperSaunaNomer: React.FC<SwiperProps> = ({ slides }) => {
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
    <div className="w-full mx-auto sm:rounded-2xl overflow-hidden">
   
      <div {...handlers} className="relative w-full overflow-hidden">
      <svg onClick={handlePrev} className='p-1 bg-[#3B4255] hidden sm:block cursor-pointer rounded-full absolute top-1/2 left-6 z-10' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20 24L12 16L20 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={slide.src} alt={`Slide ${index}`} className="w-full cursor-pointer h-[330px] object-cover" />
            </div>
          ))}
        </div>
        <svg onClick={handleNext} className='p-1 bg-[#3B4255] hidden sm:block cursor-pointer rounded-full absolute top-1/2 right-6 z-10' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M12 24L20 16L12 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>

   
      <div className="flex sm:hidden justify-center space-x-2 mt-4">
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

export default SwiperSaunaNomer;
