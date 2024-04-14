import { createSelector } from '@reduxjs/toolkit';
import { selectAdverts } from '../adverts/selectors';

export const selectFilter = state => state.filter;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter(advert =>
      advert.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
