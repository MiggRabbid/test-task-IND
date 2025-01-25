import styles from './SliderButton.module.scss';

interface ISliderButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const SliderButton = ({ direction, onClick }: ISliderButtonProps) => {
  return (
    <button
      className={`${styles.button} ${direction === 'prev' ? styles.prev : styles.next}`}
      onClick={onClick}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  );
};

export default SliderButton;
