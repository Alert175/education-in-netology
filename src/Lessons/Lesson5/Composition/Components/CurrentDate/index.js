import styles from './style.module.scss';

// Компонент корректной даты на русском языке
const CurrentDate = () => {
  return (
    <span className={styles.element}>
      {new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </span>
  );
};

export default CurrentDate;
