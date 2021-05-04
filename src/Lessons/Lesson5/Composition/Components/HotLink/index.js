import PropTypes from 'prop-types';
import styles from './style.module.scss';

// Ссылка на самые частые запросы
const HotLink = ({ text, link }) => {
  return (
    <a href={link} className={styles.linkElement}>
      {text}
    </a>
  );
};

HotLink.defaultProps = {
  text: 'Example text',
  link: '',
};

HotLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default HotLink;
