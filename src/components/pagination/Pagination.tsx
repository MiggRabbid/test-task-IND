import styles from './Pagination.module.scss';

interface IPaginationProps {
  currentIndex: number;
  totalSlides: number;
}

const Pagination = ({ currentIndex, totalSlides }: IPaginationProps) => {
  return (
    <div
      className={`${styles.pagination} absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2`}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
        ></span>
      ))}
    </div>
  );
};

export default Pagination;
