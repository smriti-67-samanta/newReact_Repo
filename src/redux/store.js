import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filters: filtersReducer
  }
});