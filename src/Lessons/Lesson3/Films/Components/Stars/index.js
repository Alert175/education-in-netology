import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

const Stars = ({ count }) => {
  const [starIndexes, setStarIndexes] = useState([]);

  useEffect(() => {
    setStarIndexes([]);
    for (let index = 0; index < count; index++) {
      setStarIndexes((prevElements) => [...prevElements, index]);
    }
  }, [count]);

  return (
    <ul className="card-body-stars u-clearfix">
      {starIndexes.map((element) => (
        <li key={`star-${element}`}>
          <svg
            fill="#D3BCA2"
            height="28"
            viewBox="0 0 18 18"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
          </svg>
        </li>
      ))}
    </ul>
  );
};

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
