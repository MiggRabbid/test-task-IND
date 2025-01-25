'use client';

import React, { useState } from 'react';
import styles from './Slider.module.scss';
import SliderButton from '@/components/ui/Buttons/SliderButton';
import Pagination from '@/components/pagination/Pagination';
import { TypeSliderRequest } from '@/types/global';
import SliderItems from './components/sliderItem/SliderItems';

interface ISliderProps {
  slides: TypeSliderRequest;
}

const Slider = ({ slides }: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`${styles.slider} relative w-full h-full`}>
      <div className={`${styles.sliderContent} flex overflow-hidden`}>
        <div
          className={`${styles.sliderTrack} w-full transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <SliderItems key={`slide-${index}`} slide={slide} />
          ))}
        </div>
      </div>
      <SliderButton direction="prev" onClick={handlePrev} />
      <SliderButton direction="next" onClick={handleNext} />
      <Pagination currentIndex={currentIndex} totalSlides={slides.length} />
    </div>
  );
};

export default Slider;
