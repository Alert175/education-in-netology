import TopSide from '../TopSide';
import MiddleSide from '../MiddleSide';
import BottomSide from '../BottomSide';

import styles from './style.module.scss';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <TopSide />
        <MiddleSide />
        <BottomSide />
      </div>
    </div>
  );
};

export default Page;
