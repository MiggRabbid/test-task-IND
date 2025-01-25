import React from 'react';

import { ISliderData } from '@/types/global';

interface ISliderItemsProps {
  slide: ISliderData;
}

const SliderItems = (props: ISliderItemsProps) => {
  const { slide } = props;
  return (
    <>
      <div className="w-full flex-shrink-0">
        <figure>
          <img src={slide.img} alt={slide.title} />
        </figure>
        <p>{slide.title}</p>
      </div>
    </>
  );
};

export default React.memo(SliderItems);
