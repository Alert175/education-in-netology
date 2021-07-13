import { createSlice } from '@reduxjs/toolkit';

// создание начального значения среза глобального хранилища
const initialState = {
  value: 0,
};

// созданеи и экспорт среза глобального хранилища
export const slice = createSlice({
  // название среза
  name: 'counter',
  // объявление начального состояния
  initialState,
  // объект со всеми редъюсерами (методов управления состоянием среза глобального хранилища)
  reducers: {
    // метод изменения состояния среза ГХ
    increment: (state) => {
      state.value += 1;
    },
    // метод изменения состояния среза ГХ с полезной нагрузкой
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// экспорт экшенов (методов управления состоянием среза ГХ
export const { increment, incrementByAmount } = slice.actions;

// создание асинхронной функции создателя действия преобразователя, для упраления состоянием среза ГХ
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const incrementAsyncNotAmount = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

// экспорт селектора состояния среза ГХ
export const selectCount = (state) => state.counter.value;

export default slice.reducer;
