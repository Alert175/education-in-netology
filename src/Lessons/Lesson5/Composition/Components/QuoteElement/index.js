import PropTypes from 'prop-types';
import styles from './style.module.scss';

// компонент котировки валюты
const QuoteElement = ({ name, value, shift }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.shift}>{shift}</div>
    </div>
  );
};

QuoteElement.defaultProps = {
  name: 'USD',
  value: 76.42,
  shift: '+ 1,49%',
};

QuoteElement.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  shift: PropTypes.string,
};

export default QuoteElement;
