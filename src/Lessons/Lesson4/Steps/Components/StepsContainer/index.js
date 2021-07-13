import InputData from '../InputStep';
import OutputSteps from '../OutputSteps';
import { useState } from 'react';

import styles from './style.module.scss';

const StepsContainer = () => {
  const [steps, setsteps] = useState([]);

  const handlerAddStep = (date = '', dist = 0) => {
    const searchIndex = steps.findIndex((element) => element.date === date);
    if (searchIndex !== -1) {
      const updateElement = {
        date,
        steps: Number(steps[searchIndex].dist) + Number(dist),
      };
      const tmpSteps = steps;
      tmpSteps.splice(searchIndex, 1, updateElement);
      setsteps([]);
      setsteps([...tmpSteps]);
      return;
    }
    setsteps((prev) => [...prev, { date, dist: Number(dist) }]);
  };

  const handlerDeleteStep = (value) => {
    const searchIndex = steps.findIndex((element) => element.date === value);
    const tmpSteps = steps;
    tmpSteps.splice(searchIndex, 1);
    setsteps([]);
    setsteps([...tmpSteps]);
  };

  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.contentContainer}>
        <span className={styles.headerElement}>Дата (ДД.ММ.ГГ)</span>
        <span className={styles.headerElement}>Пройдено км</span>
        <span className={styles.headerElement}></span>
      </div>
      <InputData addStep={handlerAddStep} />
      <div className={styles.contentContainer}>
        <span className={styles.headerElement}>Дата (ДД.ММ.ГГ)</span>
        <span className={styles.headerElement}>Пройдено км</span>
        <span className={styles.headerElement}>Действия</span>
      </div>
      <OutputSteps stepsList={steps} deleteStep={handlerDeleteStep} />
    </div>
  );
};

export default StepsContainer;
