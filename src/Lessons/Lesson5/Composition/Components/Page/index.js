import TopSide from '../TopSide';

import styles from './style.module.scss';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <TopSide />
      </div>
    </div>
  );
};

export default Page;
