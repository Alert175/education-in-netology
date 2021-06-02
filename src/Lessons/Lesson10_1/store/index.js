import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from '../components/TasksContainer/tasksSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
