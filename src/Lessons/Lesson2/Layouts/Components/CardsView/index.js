import ShopCard from '../ShopCard';

import style from './style.module.scss';

const CardsView = ({ cards }) => {
  return (
    <div className={style.container}>
      {cards.map((element) => (
        <ShopCard key={`${element.img}`} content={element} />
      ))}
    </div>
  );
};

export default CardsView;
