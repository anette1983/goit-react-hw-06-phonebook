import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';

const filterInitialState = '';

// const persistConfig = {
//   key: 'filter',
//   storage,
//   //   если хотм=им сохр неск значение
//   //   whitelist: ['value', 'a'],
//   // блеклист - если все, кроме одного
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
export const filterReducer = filterSlice.reducer;
