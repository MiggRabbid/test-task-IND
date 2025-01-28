'use client';

import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';

import Pagination from '@/components/pagination/Pagination';
import SliderItems from './components/sliderItem/SliderItems';
import ArrowBtn from '@/components/ui/buttons/ArrowBtn/ArrowBtn';

import { TypeSliderRequest } from '@/types/global';

interface ISliderProps {
  slides: TypeSliderRequest;
}

const Slider = (props: ISliderProps) => {
  const { slides } = props;
  const [offsetDirection, setOffsetDirection] = useState<'left' | 'right' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('currentIndex -', currentIndex);
  }, [currentIndex]);

  const handleClickLeft = () => {
    console.group('---- handleClickLeft');
    setCurrentIndex((prevIndex) => {
      setOffsetDirection('left');
      const updatedIndex = prevIndex + 1;
      console.log('updatedIndex -', updatedIndex);
      console.log('return       -', updatedIndex >= slides.length ? 0 : updatedIndex);
      console.groupEnd();
      return updatedIndex > slides.length - 1 ? 0 : updatedIndex;
    });
  };

  const handleClickRight = () => {
    console.group('---- handleClickRight');
    setCurrentIndex((prevIndex) => {
      setOffsetDirection('right');

      const updatedIndex = prevIndex - 1;

      console.log('updatedIndex -', updatedIndex);
      console.log('return       -', updatedIndex < 0 ? slides.length - 1 : updatedIndex);
      console.groupEnd();
      return updatedIndex < 0 ? slides.length - 1 : updatedIndex;
    });
  };

  const getTransitionTrack = (offsetDirection: 'left' | 'right' | null) => {
    console.group('---- getTransitionTrack');
    if (!offsetDirection) return ' translateX(0px)';

    const inLeft = offsetDirection === 'left' ? '0px - ' : '';
    const breakpointLg = 1024;
    const slideWidthLg = 25;
    const slideWidthMd = 50;

    const slideWidth = window.innerWidth > breakpointLg ? slideWidthLg : slideWidthMd;

    console.log('inLeft     - ', inLeft);
    console.log('slideWidth -', slideWidth);
    console.log(
      `return     - translateX(calc((${inLeft}${slideWidth}dvw) * ${currentIndex}))`,
    );

    console.groupEnd();
    return `translateX(calc((${inLeft}${slideWidth}dvw) * ${currentIndex}))`;
  };

  const getTransitionSlide = (slideIndex: number) => {
    console.group('---- getTransitionTrack');
    if (currentIndex <= slideIndex) {
      console.log('currentIndex < slideIndex');
      console.log('currentIndex - ', currentIndex);
      console.log('slideIndex   - ', slideIndex);
      console.groupEnd();
      return ' translateX(0px)';
    }
    if (currentIndex > slideIndex) {
      console.log('currentIndex >= slideIndex');
      console.log('currentIndex - ', currentIndex);
      console.log('slideIndex   - ', slideIndex);
      console.groupEnd();
      return ' translateX(100dvw)';
    }
    console.groupEnd();
  };

  return (
    <div className={styles.slider}>
      <Pagination
        currentIndex={currentIndex}
        totalSlides={slides.length}
        setCurrentIndex={setCurrentIndex}
      />
      <div className={`group ${styles.slider__content}`}>
        <div
          className={styles.slider__track}
          style={{
            transform: getTransitionTrack(offsetDirection),
          }}
        >
          {slides.map((slide, index) => {
            return (
              <SliderItems
                key={`slide-${index}`}
                slide={slide}
                style={{
                  transform: `${getTransitionSlide(index)}`,
                }}
              />
            );
          })}
        </div>

        <ArrowBtn direction="left" onClick={handleClickLeft} />
        <ArrowBtn direction="right" onClick={handleClickRight} />
      </div>
    </div>
  );
};

export default Slider;
