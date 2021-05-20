import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, incrementByAmount, selectCount } from './counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(incrementByAmount(10))}>{count}</div>;
};

export default Counter;
