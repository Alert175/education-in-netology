import PropTypes from 'prop-types';
import styles from './style.module.scss';

// Карточка с информацией в нижней части страницы
const CardInfo = ({ title, link, children }) => {
  return (
    <a href={link} className={styles.container}>
      <div className={styles.title}>{title}</div>
      {children}
    </a>
  );
};

CardInfo.defaultProps = {
  title: 'Example Title',
  link: '/',
  children: null,
};

CardInfo.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
};

export default CardInfo;
