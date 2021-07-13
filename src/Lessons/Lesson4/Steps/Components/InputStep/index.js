import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './style.module.scss';

const InputData = ({ addStep }) => {
  const [newDate, setnewDate] = useState('');
  const [newDist, setnewDist] = useState('');

  const handlerAddedData = () => {
    if (newDate !== '' && newDist !== '') {
      addStep(newDate, newDist);
      setnewDate('');
      setnewDist('');
      return;
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputElement}
        type="text"
        value={newDate}
        onChange={(event) => setnewDate(event.target.value)}
      />
      <input
        className={styles.inputElement}
        type="text"
        value={newDist}
        onChange={(event) => setnewDist(event.target.value)}
      />
      <button className={styles.button} onClick={handlerAddedData}>
        ОК
      </button>
    </div>
  );
};

InputData.defaultProps = {
  addStep: () => {},
};

InputData.propTypes = {
  addStep: PropTypes.func,
};

export default InputData;
