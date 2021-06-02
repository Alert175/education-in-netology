import styles from './style.module.scss';

import CardInfo from '../CardInfo';

// Нижняя часть страниы с карточками
const BottomSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <CardInfo title={'Карточка информации'}>
          <div>Какой-то текст</div>
        </CardInfo>
        <CardInfo title={'Карточка информации'}>
          <img
            src="/logo512.png"
            alt="картинка"
            style={{
              objectFit: 'contain',
              height: '150px',
              width: '100%',
            }}
          />
          <div>Какой-то текст</div>
        </CardInfo>
      </div>
      <div className={styles.column}>
        <CardInfo title={'Карточка информации'}>
          <div>Какой-то текст</div>
          <div>Какой-то текст</div>
          <div>Какой-то текст</div>
        </CardInfo>
        <CardInfo title={'Карточка информации'}>
          <div>Какой-то текст</div>
          <div>Какой-то текст</div>
          <div>Какой-то текст</div>
        </CardInfo>
      </div>
      <div className={styles.column}>
        <CardInfo title={'Карточка информации'}>
          <div>Какой-то текст</div>
        </CardInfo>
        <CardInfo title={'Карточка информации'}>
          <img
            src="/logo512.png"
            alt="картинка"
            style={{
              objectFit: 'contain',
              height: '150px',
              width: '100%',
            }}
          />
          <div>Какой-то текст</div>
        </CardInfo>
      </div>
    </div>
  );
};

export default BottomSide;
