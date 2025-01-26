import classNames from 'classnames';
import styles from './ArrowBtn.module.scss';
import { ArrowIcon } from '@/media/svg/ArrowIcon';

interface IArrowBtnProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const ArrowBtn = ({ direction, onClick }: IArrowBtnProps) => {
  const buttonClass = classNames(styles.arrow_btn, {
    [styles.arrow_btn__prev]: direction === 'prev',
    [styles.arrow_btn__next]: direction === 'next',
  });

  const iconClass = classNames(styles.arrow_btn__icon, {
    [styles.arrow_btn__icon_prev]: direction === 'prev',
    [styles.arrow_btn__icon_next]: direction === 'next',
  });

  return (
    <button className={`group-hover:lg:opacity-100 ${buttonClass}`} onClick={onClick}>
      <ArrowIcon className={iconClass} />
    </button>
  );
};

export default ArrowBtn;
