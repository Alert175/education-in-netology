import ShopItem from '../ShopItem';
import style from './style.module.scss';

const ListView = ({ items }) => {
  return (
    <div className={style.container}>
      {items.map((element) => (
        <ShopItem key={`${element.img}`} content={element} />
      ))}
    </div>
  );
};

export default ListView;
