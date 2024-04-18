import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteItems: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriteItems.findIndex(
        item => item._id === action.payload._id
      );
      if (index >= 0) {
        state.favoriteItems.splice(index, 1);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
