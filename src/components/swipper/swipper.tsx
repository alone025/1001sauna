import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, HStack, Flex, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Wrapper from '../../layout/wrapper';

const CustomSwiper: React.FC<{ items: React.ReactNode[]; autoPlay?: boolean; autoPlayInterval?: number }> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const [slideWidth, setSlideWidth] = useState<string>('100%'); 
  const [slidesToShow, setSlidesToShow] = useState<number>(1);




  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlideWidth('100%'); 
        setSlidesToShow(1);
      } else if (screenWidth < 1024) {
        setSlideWidth('700px'); 
        setSlidesToShow(1.2);
      } 
      else if (screenWidth < 1050) {
        setSlideWidth('658px'); 
        setSlidesToShow(1.5);
      }
      else if (screenWidth < 1300) {
        setSlideWidth('658px'); 
        setSlidesToShow(2);
      }
      else if (screenWidth < 1590) {
        setSlideWidth('658px'); 
        setSlidesToShow(3);
      }
      else if (screenWidth < 1610) {
        setSlideWidth('658px'); 
        setSlidesToShow(4);
      }
      else {
        setSlideWidth('650px'); 
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const calculateOpacity = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    return distance > slidesToShow ? 0.5 : 1;
  };


  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
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
        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }} // Updated translateX calculation
      >
        {items.map((item, index) => (
          <Box
            key={index}
            className="flex justify-center items-center md:ml-5"
            style={{
              minWidth: `${slideWidth}`,
              transition: 'opacity 0.5s',
              opacity: calculateOpacity(index),
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      <HStack className="absolute !hidden md:!flex top-1/2 left-10 right-10 transform -translate-y-1/2 justify-between">
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon color="#fff" />}
          onClick={handlePrev}
          bgColor="#00000099"
          rounded="full"
          _hover='none'
          _active='none'
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon color="#fff" />}
          onClick={handleNext}
          bgColor="#00000099"
          rounded="full"
          _hover='none'
          _active='none'
        />
      </HStack>

     <Wrapper>
     <Flex justifyContent="start" mt={8} className='gap-3 mx-4 sm:mx-[20px] 2xl:mx-0 block md:!hidden'>
        {items.map((_, index) => (
          <Button
            key={index}
            size="xs"
            opacity={currentIndex !== index ? 0.4 : 1} 
            bg={currentIndex == index ? '#FF7A01': "#FFF"}
            onClick={() => handleDotClick(index)}
            borderRadius="full"
            _hover='none'
            className='!w-2 !h-2 !min-w-2 !p-0'
          />
        ))}
      </Flex>
     </Wrapper>
    </Box>
 
   
  );
};

export default CustomSwiper;
