import classNames from 'classnames';
import styles from './ArrowBtn.module.scss';
import { ArrowIcon } from '@/media/svg/ArrowIcon';

interface IArrowBtnProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ArrowBtn = ({ direction, onClick }: IArrowBtnProps) => {
  const buttonClass = classNames(styles.arrow_btn, {
    [styles.arrow_btn__left]: direction === 'left',
    [styles.arrow_btn__right]: direction === 'right',
  });

  const iconClass = classNames(styles.arrow_btn__icon, {
    [styles.arrow_btn__icon_left]: direction === 'left',
    [styles.arrow_btn__icon_right]: direction === 'right',
  });

  return (
    <button className={`group-hover:lg:opacity-100 ${buttonClass}`} onClick={onClick}>
      <ArrowIcon className={iconClass} />
    </button>
  );
};

export default ArrowBtn;
