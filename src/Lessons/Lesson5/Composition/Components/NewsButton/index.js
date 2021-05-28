import PropTypes from 'prop-types';

import styles from './style.module.scss';

// Кнопка выбора типа отображаемых новостей
const NewsButton = ({ text, type, isActive, select }) => {
  return (
    <div
      className={`${styles.element} ${isActive && styles.activeElement}`}
      onClick={() => select(type)}
    >
      {text}
    </div>
  );
};

NewsButton.defaultProps = {
  text: '',
  type: '',
  isActive: false,
  select: () => {},
};

NewsButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  isActive: PropTypes.bool,
  select: PropTypes.func,
};

export default NewsButton;
