import React, { useState, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import "swiper/css";

const images = [
  { src: '/moskov_pic/berlin.png', alt: 'Image 1' },
  { src: '/moskov_pic/bountique.png', alt: 'Image 2' },
  { src: '/moskov_pic/kristall.png', alt: 'Image 3' },
  { src: '/moskov_pic/glubina.png', alt: 'Image 4' },
  { src: '/moskov_pic/mars.png', alt: 'Image 5' },
  { src: '/moskov_pic/rai.png', alt: 'Image 6' },
  { src: '/moskov_pic/rayskaya.png', alt: 'Image 7' },
  { src: '/moskov_pic/remo.png', alt: 'Image 8' },
  { src: '/moskov_pic/spa1.png', alt: 'Image 9' },
  { src: '/moskov_pic/rayskaya.png', alt: 'Image 10' },
  { src: '/moskov_pic/glubina.png', alt: 'Image 11' },
  
];

const SliderModal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [thumbnailsToShow, setThumbnailsToShow] = useState(5);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  // Handle responsive behavior
  useEffect(() => {
    const updateThumbnailsToShow = () => {
      if(window.innerWidth <= 450){
        setThumbnailsToShow(2);
      }
     else if (window.innerWidth <= 640) {
        setThumbnailsToShow(3); // For mobile devices
      } else if (window.innerWidth <= 1024) {
        setThumbnailsToShow(4); // For tablet devices
      }
      
      else {
        setThumbnailsToShow(8); // For larger screens
      }
    };

    updateThumbnailsToShow();
    window.addEventListener('resize', updateThumbnailsToShow);
    return () => window.removeEventListener('resize', updateThumbnailsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextThumbnails = () => {
    setThumbnailStartIndex((prevIndex) =>
      prevIndex + thumbnailsToShow >= images.length ? 0 : prevIndex + thumbnailsToShow
    );
  };

  const showPrevThumbnails = () => {
    setThumbnailStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - thumbnailsToShow : prevIndex - thumbnailsToShow
    );
  };

  // Touch and mouse handlers
  const handleStart = (clientX: number) => {
    touchStartX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current || touchStartX.current === null) return;
    touchEndX.current = clientX;
  };

  const handleEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // Swipe left
      showNextThumbnails();
    } else if (diff < -50) {
      // Swipe right
      showPrevThumbnails();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    isDragging.current = false;
  };



  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  return (
    <div className="max-w-[1378px] mx-auto sm:p-4 mt-8">

      <div className="relative bg-[#F8F8F8] rounded-2xl w-full flex justify-center items-center">
        <button
          className="absolute left-9 hidden sm:block top-1/2 transform -translate-y-1/2 p-1 bg-[#3B4255] rounded-full"
          onClick={handlePrev}
        >
          <svg
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
        </button>

        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full my-10 sm:my-0 sm:w-auto h-[330px] sm:h-[430px] lg:h-[500px] object-cover"
        />

        <button
          className="absolute right-9 top-1/2 hidden sm:block transform -translate-y-1/2 p-1 bg-[#3B4255] rounded-full"
          onClick={handleNext}
        >
          <svg
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
        </button>
      </div>

      <div className="number-pin-slide px-4 sm:px-0 flex flex-row justify-between items-center my-6">
        <p className="text-base text-[#3B4255] font-OpenSans font-normal">Фото: {images[currentIndex].alt || 'Хамам'}</p>
        <p className="text-right w-min mt-2 text-base font-OpenSans font-normal text-[#3B4255] px-3 py-[10px] bg-[#F8F8F8] rounded-3xl">
          {currentIndex + 1}/{images.length}
        </p>
      </div>

      <div
        className="relative px-4 sm:px-0 flex justify-center items-center"
        ref={thumbnailContainerRef}
 
      >
        <div className="flex w-full overflow-hidden">

            <Swiper  slidesPerView={thumbnailsToShow} className="mySwiper w-full flex" spaceBetween={20}>

        {images
              
              .map((image, index) => (
                <SwiperSlide key={index}>
                <button
                  
                  onClick={() => setCurrentIndex(thumbnailStartIndex + index)}
                  className={`overflow-hidden transition-all ${
                    currentIndex === thumbnailStartIndex + index
                      ? 'border-[4px] w-[104px] h-[104px] rounded-2xl border-[#FF7A01]'
                      : 'border-[0px] w-[104px] h-[104px] border-transparent rounded-2xl'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} 
                    className="object-cover w-[104px] h-[104px]"
                  />
                </button>
                </SwiperSlide>
              ))}
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderModal;
