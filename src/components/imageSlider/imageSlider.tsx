import React, { useState } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const ThumbsGallery: React.FC<{ images: ImageData[] }> = ({ images }) => {
    const [index, setIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<ImageData>(images[index]);

  const handleClick = (image: ImageData) => {
    setSelectedImage(image);
    setIndex(1)
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
    
      <div className="mb-4">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full max-w-[712px] max-h-[400px] h-auto object-cover rounded-lg"
        />
      </div>
      
      <div className="flex overflow-x-auto space-x-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => handleClick(image)}
            className={`border-2 rounded-lg p-1 ${
              selectedImage.id === image.id ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 object-cover rounded-lg"
            />
          </button>
        ))}
    
      </div>
    </div>
  );
};

export default ThumbsGallery;
