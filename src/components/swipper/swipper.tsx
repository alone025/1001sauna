// components/CustomSwiper.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CustomSwiper: React.FC<{ items: React.ReactNode[]; autoPlay?: boolean; autoPlayInterval?: number }> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(handleNext, autoPlayInterval);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, autoPlay, autoPlayInterval]);


  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current); 
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const touchDifference = startX.current - e.touches[0].clientX;
    if (touchDifference > 50) {
      handleNext();
      isDragging.current = false;
    } else if (touchDifference < -50) {
      handlePrev();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (autoPlay) {
      autoPlayRef.current = setInterval(handleNext, autoPlayInterval);
    }
  };

  // Handle mouse events for cursor swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current); 
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dragDifference = startX.current - e.clientX;
    if (dragDifference > 50) {
      handleNext();
      isDragging.current = false;
    } else if (dragDifference < -50) {
      handlePrev();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (autoPlay) {
      autoPlayRef.current = setInterval(handleNext, autoPlayInterval);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <Box
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Box
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {items.map((item, index) => (
          <Box key={index} className="min-w-[712px] flex justify-center items-center ml-5">
            {item}
          </Box>
        ))}
      </Box>
   
      <HStack className="absolute top-1/2 left-10 right-10 transform -translate-y-1/2 justify-between">
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon  color="#fff" />}
          onClick={handlePrev}
          bgColor='#00000099'
           rounded='full'
          className="bg-[#00000099] hover:!bg-[#00000099] bg-opacity-75 hover:bg-opacity-100"
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon  color="#fff" />}
          onClick={handleNext}
          bgColor='#00000099'
         rounded='full'
          className="bg-[#00000099] hover:!bg-[#00000099] bg-opacity-75 hover:bg-opacity-100"
        />
      </HStack>
    </Box>
  );
};

export default CustomSwiper;
