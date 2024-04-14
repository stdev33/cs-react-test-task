import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
  },
});
