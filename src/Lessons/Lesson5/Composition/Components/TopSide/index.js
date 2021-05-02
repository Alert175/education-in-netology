import { useState } from 'react';

import styles from './style.module.scss';

import NewsButton from '../NewsButton';
import NewsElement from '../NewsElement';
import QuoteElement from '../QuoteElement';
import CurrentDate from '../CurrentDate';

// типы новостей
const typeNews = [
  {
    type: 'now',
    text: 'Сейчас в СМИ',
  },
  {
    type: 'germany',
    text: 'в Германии',
  },
  {
    type: 'recommended',
    text: 'Рекомендуемое',
  },
];

const news = [
  {
    type: 'now',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Блинкен обсудил «смертоносные» действия России с чешским премьером',
    link: '',
  },
  {
    type: 'now',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Блинкен обсудил «смертоносные» действия России с чешским премьером',
    link: '',
  },
  {
    type: 'now',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Блинкен обсудил «смертоносные» действия России с чешским премьером',
    link: '',
  },
  {
    type: 'now',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Блинкен обсудил «смертоносные» действия России с чешским премьером',
    link: '',
  },
  {
    type: 'now',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Блинкен обсудил «смертоносные» действия России с чешским премьером',
    link: '',
  },
  {
    type: 'germany',
    imageSource: '/Lesson5/logo-new.webp',
    text:
      'США и Чехия договорились ответить на «дестабилизирующие» действия России',
    link: '',
  },
  {
    type: 'germany',
    imageSource: '/Lesson5/logo-new.webp',
    text:
      'США и Чехия договорились ответить на «дестабилизирующие» действия России',
    link: '',
  },
  {
    type: 'germany',
    imageSource: '/Lesson5/logo-new.webp',
    text:
      'США и Чехия договорились ответить на «дестабилизирующие» действия России',
    link: '',
  },
  {
    type: 'germany',
    imageSource: '/Lesson5/logo-new.webp',
    text:
      'США и Чехия договорились ответить на «дестабилизирующие» действия России',
    link: '',
  },
  {
    type: 'germany',
    imageSource: '/Lesson5/logo-new.webp',
    text:
      'США и Чехия договорились ответить на «дестабилизирующие» действия России',
    link: '',
  },
  {
    type: 'recommended',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
    link: '',
  },
  {
    type: 'recommended',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
    link: '',
  },
  {
    type: 'recommended',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
    link: '',
  },
  {
    type: 'recommended',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
    link: '',
  },
  {
    type: 'recommended',
    imageSource: '/Lesson5/logo-new.webp',
    text: 'Госсекретарь США обсудил с премьером Чехии ситуацию с Россией',
    link: '',
  },
];

const quotes = [
  {
    name: 'USD',
    value: 76.5,
    shift: '-1,5',
  },
  {
    name: 'EUR',
    value: 84.5,
    shift: '+1,5',
  },
  {
    name: 'MNGO',
    value: 76.5,
    shift: '-1,54%',
  },
];

// Верхний блок с новостями и переключателем по типу новостей
const TopSide = () => {
  const [selectTypeNews, setselectTypeNews] = useState('now');

  return (
    <div className={styles.container}>
      <div className={styles.controlContainer}>
        {typeNews.map((element, index) => (
          <NewsButton
            key={index}
            text={element.text}
            type={element.type}
            isActive={element.type === selectTypeNews}
            select={(value) => setselectTypeNews(value)}
          />
        ))}
        <CurrentDate />
      </div>
      <div className={styles.newsContainer}>
        {news.map(
          (element, index) =>
            element.type === selectTypeNews && (
              <NewsElement
                key={index}
                text={element.text}
                link={element.link}
                imageSource={element.imageSource}
              />
            )
        )}
      </div>
      <div className={styles.quotesContainer}>
        {quotes.map((element, index) => (
          <QuoteElement
            key={index}
            name={element.name}
            value={element.value}
            shift={element.shift}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSide;
