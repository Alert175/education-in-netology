import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 0,
      text: 'Тормоза',
      cost: 21000,
    },
    {
      id: 1,
      text: 'Цепь ГРМ',
      const: 15000,
    },
    {
      id: 2,
      text: 'Цепь ГРМ',
      const: 15000,
    },
    {
      id: 3,
      text: 'Цепь ГРМ',
      const: 15000,
    },
    {
      id: 4,
      text: 'Цепь ГРМ',
      const: 15000,
    },
  ],
  status: 'add',
  activeTask: null,
};

export const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    changeTask: (state, action) => {
      let newTasks = [];
      for (const task of state.value) {
        let tempTask = task;
        if (Number(task.id) === Number(state.activeTask)) {
          tempTask = {
            id: state.activeTask,
            text: action.payload.text,
            cost: action.payload.cost,
          };
        }
        newTasks = [...newTasks, tempTask];
      }
      state.value = [...newTasks];
      state.activeTask = null;
      state.status = 'add';
    },
    deleteTask: (state, action) => {
      state.value = [
        ...state.value.filter((element) => element.id !== action.payload),
      ];
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    setActiveTask: (state, action) => {
      state.activeTask = action.payload;
    },
  },
});

export const { addTask, changeTask, deleteTask, changeStatus, setActiveTask } =
  slice.actions;

export const selectTasks = (state) => state.tasks.value;
export const selectStatus = (state) => state.tasks.status;
export const selectActiveTask = (state) => state.tasks.activeTask;

export default slice.reducer;
