import { useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPreviousImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="relative">
      <img src={images[currentImageIndex]} alt="Slider" className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center shadow-md" />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentImageIndex ? 'bg-[#FC711B]' : 'bg-white/80'}`}
          ></button>
        ))}
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
        <button onClick={goToPreviousImage} className="text-white text-2xl focus:outline-none">&#10094;</button>
        <button onClick={goToNextImage} className="text-white text-2xl focus:outline-none">&#10095;</button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
