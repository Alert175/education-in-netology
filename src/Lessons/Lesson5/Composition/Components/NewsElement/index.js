import PropTypes from 'prop-types';

import styles from './style.module.scss';

// Элемент новости
const NewsElement = ({ imageSource, text, link }) => {
  return (
    <a href={link} className={styles.containerElement}>
      <img className={styles.newsImage} src={imageSource} alt={text} />
      <span className={styles.newsText}>{text}</span>
    </a>
  );
};

NewsElement.defaultProps = {
  imageSource: '',
  text: '',
  link: '',
};

NewsElement.propTypes = {
  imageSource: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default NewsElement;
