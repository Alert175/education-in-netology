import PropTypes from 'prop-types';

import '../../styles/main.css';

const Listing = ({ items }) => {
  const validTitle = (inputValue) => {
    if (inputValue.length > 50) {
      let resultValue = '';
      for (const [index, value] of inputValue.split('').entries()) {
        if (index < 50) {
          resultValue += `${value}`;
        }
      }
      return (resultValue += '...');
    }
    return inputValue;
  };

  const validCurrencyCode = (value) => {
    if (value === 'USD') {
      return '$';
    }
    if (value === 'EUR') {
      return '€';
    }
    return value;
  };

  return (
    <div className="item-list">
      {items.map((element) => (
        <div className="item" key={element.listing_id}>
          <div className="item-image">
            <a href={element.url}>
              <img src={element.MainImage.url_570xN} alt={element.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{validTitle(element.title)}</p>
            <p className="item-price">
              {validCurrencyCode(element.currency_code)}
              {element.price}
            </p>
            <p
              className={`item-quantity 
                ${Number(element.quantity) < 10 && 'level-low'}
                ${
                  Number(element.quantity) >= 10 &&
                  Number(element.quantity) <= 20 &&
                  'level-medium'
                }
                ${Number(element.quantity) > 20 && 'level-high'}`}
            >
              {element.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  count: PropTypes.array,
};

export default Listing;
