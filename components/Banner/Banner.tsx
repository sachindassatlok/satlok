import { useState, useEffect } from 'react';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/images/banners/banner1.jpg',
    '/images/banners/banner2.jpg',
    '/images/banners/banner3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      {/* Image container */}
      <div className="w-full aspect-[1920/935] relative overflow-hidden bg-black">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              currentIndex === index 
                ? 'opacity-100 blur-0' 
                : 'opacity-0 blur-sm'
            }`}
            style={{
              transitionProperty: 'opacity, filter',
              willChange: 'opacity, filter'
            }}
          >
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              currentIndex === index 
                ? 'bg-white scale-100' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
