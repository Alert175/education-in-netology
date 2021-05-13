import styles from './style.module.scss';

// элемент поиска
const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.firstSymbold}>Я</span>ндекс
      </div>
      <input
        type="text"
        placeholder="Найдется все"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>Найти</button>
      <span className={styles.exampleText}>
        Найдется все. Например,{' '}
        <a className={styles.exampleLink} href="/">
          Какая фаза луны
        </a>
      </span>
    </div>
  );
};

export default SearchBar;
