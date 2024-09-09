import React, { useState } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  seat: number;
}

const ThumbsGallery: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageData>(images[0]);

  const handleClick = (image: number) => {
    setSelectedImage(images[image]);
    setIndex(image)
  };

  const handlePrev = () => {
    const newIndex = index > 0 ? index - 1 : images.length - 4;
    setIndex(newIndex);
    setSelectedImage(images[newIndex])
  };

  const handleNext = () => {
    const newIndex = index < images.length - 4 ? index + 1 : 0;
    setIndex(newIndex);
    setSelectedImage(images[newIndex])
  };

  const getThumbnailImages = () => {
    return images.slice(index, index + 3);
  };

  return (
    <div className="w-full relative max-w-[712px] mx-auto">
      <div className="mb-4">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full max-w-[712px] max-h-[400px] h-[400px] object-cover rounded-2xl"
        />
      </div>

      <div className="hidden lg:flex absolute w-full px-4 bottom-[50px] justify-between mb-4">
        <button
          onClick={handlePrev}
          className="bg-[#3B4255] text-white p-1 rounded-[20px] z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 24L12 16L20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-[#3B4255] text-white p-1 rounded-[20px] z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M12 24L20 16L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex overflow-x-auto gap-5">
        {getThumbnailImages().map((image) => (
         <button onClick={() => handleClick(image.seat)}>
           <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`w-[224px] h-[154px] object-cover rounded-2xl z-10 relative ${image.seat === index ? "opacity-75" :""}`}
          />
         </button>
        ))}
      </div>
    </div>
  );
};

export default ThumbsGallery;
