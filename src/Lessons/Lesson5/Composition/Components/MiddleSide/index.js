import styles from './style.module.scss';

import HotLink from '../HotLink';
import SearchBar from '../SearchBar';

const links = [
  {
    text: 'Картинки',
    link: '',
  },
  {
    text: 'Видео',
    link: '',
  },
  {
    text: 'Новости',
    link: '',
  },
  {
    text: 'Музыка',
    link: '',
  },
  {
    text: 'Маркет',
    link: '',
  },
];

// Центральный блок с ссылками и элементом поиска
const MiddleSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        {links.map((element, index) => (
          <HotLink key={index} text={element.text} link={element.link} />
        ))}
      </div>
      <div className={styles.searchElement}>
        <SearchBar />
      </div>
    </div>
  );
};

export default MiddleSide;
