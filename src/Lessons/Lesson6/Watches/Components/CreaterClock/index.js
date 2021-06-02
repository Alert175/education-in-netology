import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './style.module.scss';

const CreaterClock = ({ addClock }) => {
  const [name, setname] = useState('');
  const [time, settime] = useState('');

  const handlerCreate = () => {
    if (name !== '' && !isNaN(Number(time))) {
      addClock({ name, time: Number(time) });
    }
    setname('');
    settime('');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Название"
        className={styles.element}
        value={name}
        onChange={(event) => setname(event.target.value)}
      />
      <input
        type="text"
        placeholder="Временная зона"
        className={styles.element}
        value={time}
        onChange={(event) => settime(event.target.value)}
      />
      <button className={styles.btn} onClick={handlerCreate}>
        Добавить
      </button>
    </div>
  );
};

CreaterClock.defaultProps = {
  addClock: () => {},
};

CreaterClock.propTypes = {
  addClock: PropTypes.func,
};

export default CreaterClock;
