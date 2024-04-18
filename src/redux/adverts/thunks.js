import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://661b9cd765444945d04fe3ae.mockapi.io/api/v1/advert';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.log('error: ', error);
      return rejectWithValue(error.message || 'An unexpected error occurred');
    }
  }
);
