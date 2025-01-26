'use client';

import React, { useState } from 'react';
import styles from './Slider.module.scss';
import Pagination from '@/components/pagination/Pagination';
import { TypeSliderRequest } from '@/types/global';
import SliderItems from './components/sliderItem/SliderItems';
import ArrowBtn from '@/components/ui/buttons/ArrowBtn/ArrowBtn';

interface ISliderProps {
  slides: TypeSliderRequest;
}

const Slider = ({ slides }: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % slides.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + slides.length) % slides.length;
    });
  };

  return (
    <div className={styles.slider}>
      <Pagination
        currentIndex={currentIndex}
        totalSlides={slides.length}
        setCurrentIndex={setCurrentIndex}
      />
      <div className={`group ${styles.slider__content}`}>
        <div className={styles.slider__track}>
          {slides.map((slide, index) => {
            const isShift = currentIndex > index;

            return (
              <SliderItems
                key={`slide-${index}`}
                slide={slide}
                style={{
                  transform: `translateX(${!!isShift ? window.innerWidth : 0}px)`,
                }}
              />
            );
          })}
        </div>

        <ArrowBtn direction="prev" onClick={handlePrev} />
        <ArrowBtn direction="next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Slider;
