import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const Clock = ({ content, deleteClock }) => {
  const [hour, sethour] = useState('00');
  const [minute, setminute] = useState('00');
  const [second, setsecond] = useState('00');

  const validHours = (value) => {
    if (Number(value) > 24) {
      const computedHour = Number(value) - 24;
      return String(computedHour).length < 2
        ? `0${computedHour}`
        : `${computedHour}`;
    }
    return String(value).length < 2 ? `0${value}` : `${value}`;
  };

  const handlerTick = () => {
    try {
      const currentHours = new Date().getHours() + (Number(content.time) - 2);
      const currentMinutes = new Date().getMinutes();
      const currentSeconds = new Date().getSeconds();
      sethour(`${validHours(currentHours)}`);
      setminute(
        `${
          String(currentMinutes).length < 2
            ? `0${currentMinutes}`
            : currentMinutes
        }`
      );
      setsecond(
        `${
          String(currentSeconds).length < 2
            ? `0${currentSeconds}`
            : currentSeconds
        }`
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const startUpdate = setInterval(() => {
      handlerTick();
    }, 1000);
    return () => {
      clearInterval(startUpdate);
    };
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.name}>{content.name}</span>
      <div className={styles.close} onClick={() => deleteClock(content.index)}>
        X
      </div>
      <div className={styles.clock}>
        <div className={styles.element}>{hour}</div>:
        <div className={styles.element}>{minute}</div>:
        <div className={styles.element}>{second}</div>
      </div>
    </div>
  );
};

Clock.defaultProps = {
  content: {},
  deleteClock: () => {},
};

Clock.propTypes = {
  content: PropTypes.object,
  deleteClock: PropTypes.func,
};

export default Clock;
