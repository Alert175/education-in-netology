import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  incrementByAmount,
  incrementAsync,
  incrementAsyncNotAmount,
  selectCount,
} from './counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(incrementAsyncNotAmount())}>{count}</div>;
};

export default Counter;
