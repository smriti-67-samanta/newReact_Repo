import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: '',
  author: '',
  readStatus: 'all'
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenreFilter: (state, action) => {
      state.genre = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setReadStatusFilter: (state, action) => {
      state.readStatus = action.payload;
    }
  }
});

export const { setGenreFilter, setAuthorFilter, setReadStatusFilter } = filtersSlice.actions;
export default filtersSlice.reducer;