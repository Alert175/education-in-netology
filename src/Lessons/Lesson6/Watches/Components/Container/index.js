import { useState } from 'react';

import CreaterClock from '../CreaterClock';
import Clock from '../Clock';

import styles from './style.module.scss';

const Container = () => {
  const [clocks, setclocks] = useState([
    {
      name: 'Example',
      time: 0,
    },
  ]);

  const handlerDeleteClock = (deleteIndex) => {
    let updateClocks = [];
    for (const [index, value] of clocks.entries()) {
      console.log(index, deleteIndex);
      if (index !== deleteIndex) {
        updateClocks = [...updateClocks, value];
      }
    }
    setclocks([...updateClocks]);
  };

  return (
    <div className={styles.container}>
      <CreaterClock
        addClock={(value) => setclocks((prev) => [...prev, value])}
      />
      <div className={styles.clocksContainer}>
        {clocks.length > 0 &&
          clocks.map((element, index) => (
            <Clock
              key={index}
              content={{ ...element, index }}
              deleteClock={(value) => handlerDeleteClock(value)}
            />
          ))}
      </div>
    </div>
  );
};

export default Container;
