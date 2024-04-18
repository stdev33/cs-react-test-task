import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/slice';
import { favoritesReducer } from './favorites/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
  },
});
