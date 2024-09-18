import React, { useState, useRef } from 'react';
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
  const thumbnailRef = useRef<HTMLDivElement>(null); // Reference to the thumbnail container

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

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    scrollThumbnailIntoView(index);
  };

  const scrollThumbnailIntoView = (index: number) => {
    const thumbnailContainer = thumbnailRef.current;
    if (thumbnailContainer) {
      const thumbnail = thumbnailContainer.children[index] as HTMLElement;
      const containerWidth = thumbnailContainer.offsetWidth;
      const thumbnailLeft = thumbnail.offsetLeft;
      const thumbnailWidth = thumbnail.offsetWidth;

      // Center the clicked thumbnail if possible
      thumbnailContainer.scrollTo({
        left: thumbnailLeft - (containerWidth / 2 - thumbnailWidth / 2),
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full mx-auto sm:rounded-2xl overflow-hidden">
      {/* Top swiper for main images */}
      <div {...handlers} className="relative w-full overflow-hidden">
        <svg
          onClick={handlePrev}
          className="p-1 bg-[#3B4255] hidden sm:block cursor-pointer rounded-full absolute top-1/2 left-6 z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20 24L12 16L20 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                className="w-full cursor-pointer h-[430px] object-cover"
              />
            </div>
          ))}
        </div>
        <svg
          onClick={handleNext}
          className="p-1 bg-[#3B4255] hidden sm:block cursor-pointer rounded-full absolute top-1/2 right-6 z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M12 24L20 16L12 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Arrow controls for thumbnail navigation */}
      <div className="relative flex justify-center mt-4">
      
        <div
          ref={thumbnailRef}
          className="flex overflow-x-auto scrollbar-hide px-4"
        >
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer ml-2 object-cover rounded ${
                index === currentIndex ? 'opacity-60' : ''
              } w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20`}
            />
          ))}
        </div>
  
      </div>

      {/* Pagination for small screens */}
      <div className="flex sm:hidden justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
          >
            {index === currentIndex ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#3B4255" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#CCCCCC" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SwiperSaunaNomer;
