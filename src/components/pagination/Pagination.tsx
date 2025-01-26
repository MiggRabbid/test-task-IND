import React, { Dispatch, SetStateAction } from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

interface IPaginationProps {
  currentIndex: number;
  totalSlides: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: IPaginationProps) => {
  const { currentIndex, totalSlides, setCurrentIndex } = props;

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalSlides }).map((_, index) => {
        const buttonClass = classNames(styles.pagination__dot, {
          [styles.pagination__dot__active]: index === currentIndex,
        });

        const buttonItemClass = classNames(styles.pagination__dot_item, {
          [styles.pagination__dot_item__active]: index === currentIndex,
        });

        return (
          <button
            key={`pagination-dot-${index}`}
            className={buttonClass}
            onClick={() => handleClick(index)} // Исправил название handleClick
          >
            <div className={buttonItemClass}></div>
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
