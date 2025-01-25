import { TypeSliderRequest } from '@/types/global';
import { sliderData } from './data';

export const getData = (): Promise<TypeSliderRequest> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sliderData);
    }, 1);
  });
};
