import React from 'react';

import styles from './SliderItems.module.scss';

import { ISliderData } from '@/types/global';

interface ISliderItemsProps {
  slide: ISliderData;
  style?: React.CSSProperties | undefined;
}

const SliderItems = (props: ISliderItemsProps) => {
  const { slide, style } = props;

  return (
    <article className={`group/slide ${styles.slider_item}`} style={style}>
      <div className={styles.slider_item__wrapper}>
        <div className={`group-hover/slide:lg:hidden ${styles.slider_item__main}`}>
          <div className={styles.slider_item__main__title_container}>
            <img
              src={slide.img}
              alt={slide.title}
              className={styles.slider_item__main__img}
            />
            <h4 className={styles.slider_item__main__title}>{slide.title}</h4>
          </div>
          <p className={styles.slider_item__main__description}>{slide.descriptions}</p>
        </div>
        <div className={`group-hover/slide:lg:flex ${styles.slider_item__second}`}>
          <p className={styles.slider_item__second__title}>{slide.title}</p>
          <p className={styles.slider_item__second__description}>{slide.descriptions}</p>
        </div>
      </div>
    </article>
  );
};

export default React.memo(SliderItems);
