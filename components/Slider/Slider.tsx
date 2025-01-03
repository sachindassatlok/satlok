import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/mainbanner.webp',
      title: 'Welcome to Satlok Ashram',
      description: 'A place of spiritual enlightenment and peace',
    },
    {
      image: '/mainbanner.webp',
      title: 'Daily Spiritual Activities',
      description: 'Join us in meditation and spiritual discourse',
    },
    {
      image: '/mainbanner.webp',
      title: 'Community Service',
      description: 'Serving humanity through various social initiatives',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
