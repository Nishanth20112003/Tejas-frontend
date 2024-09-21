import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero.png';
import bankOfferImg from '../assets/BankOff.png';
import bajajOff from '../assets/bajajOffer.webp';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bankOfferImg, bajajOff];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 4000); 

    return () => clearInterval(interval); 
  }, [images.length]); 
  return (
    <>
      <div className="main-container mx-[40px]">
        <img src={heroImage} className="w-[100%] mt-1" />
        
        
        <img src={images[currentIndex]} alt="Offer" className="h-[100px] w-[100%] object-cover mt-4" />
      </div>
    </>
  );
}

export default Hero;
