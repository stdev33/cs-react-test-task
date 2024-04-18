import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './thunks';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        action.payload.forEach(item => {
          if (
            !state.items.some(existingItem => existingItem._id === item._id)
          ) {
            state.items.push(item);
          }
        });
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
