import { useState, useEffect, useRef } from 'react';
import Container from "../../components/Container";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import gallery8 from "../../assets/gallery8.png";
import gallery9 from "../../assets/gallery9.png";
import gallery10 from "../../assets/gallery10.png";
import gallery11 from "../../assets/gallery11.png";
import gallery12 from "../../assets/gallery12.png";
import gallery13 from "../../assets/gallery13.png";
import gallery14 from "../../assets/gallery14.png";
import gallery15 from "../../assets/gallery15.png";

// OPTIMIZATION: Lazy loading image component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.01 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={imgRef} 
      className={`${className} bg-gray-700/50 rounded relative overflow-hidden min-h-[200px] md:min-h-[300px]`}
    >
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
              <div className="w-10 h-10 border-4 border-[#FC711B] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </>
      ) : (
        // Placeholder while not in view
        <div className="absolute inset-0 bg-gray-800/30" />
      )}
    </div>
  );
};

const Gallery = () => {
  // OPTIMIZATION: Array of images for easier management
  const galleryImages = [
    { src: gallery4, alt: 'Morgan TechFest gallery image 4' },
    { src: gallery5, alt: 'Morgan TechFest gallery image 5' },
    { src: gallery6, alt: 'Morgan TechFest gallery image 6' },
    { src: gallery7, alt: 'Morgan TechFest gallery image 7' },
    { src: gallery8, alt: 'Morgan TechFest gallery image 8' },
    { src: gallery9, alt: 'Morgan TechFest gallery image 9' },
    { src: gallery10, alt: 'Morgan TechFest gallery image 10' },
    { src: gallery11, alt: 'Morgan TechFest gallery image 11' },
    { src: gallery12, alt: 'Morgan TechFest gallery image 12' },
    { src: gallery13, alt: 'Morgan TechFest gallery image 13' },
    { src: gallery14, alt: 'Morgan TechFest gallery image 14' },
    { src: gallery15, alt: 'Morgan TechFest gallery image 15' },
  ];

  return (
    <div className="bg-[#1e3d76] text-white py-20">
      <Container>
        <p className="font-semibold text-2xl mb-8">GALLERY</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 my-3">
          {galleryImages.map((image, index) => (
            <LazyImage
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-[250px] md:h-[300px]"
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a 
            href='https://drive.google.com/drive/folders/1-m8WPWPPjLZuv9BUEwkRIMI6z2F6DEgb?usp=sharing' 
            target="_blank" 
            rel="noopener noreferrer" 
            className='px-8 py-2 bg-[#FC711B] rounded-3xl text-sm font-semibold text-white hover:bg-[#e56316] transition-colors inline-block'
          >
            SEE MORE
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
