import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Sample Book', author: 'John Doe', genre: 'Fiction', isRead: false }
  ]
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    toggleRead: (state, action) => {
      const book = state.books.find(b => b.id === action.payload);
      if (book) book.isRead = !book.isRead;
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(b => b.id === action.payload.id);
      if (index !== -1) state.books[index] = action.payload;
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(b => b.id !== action.payload);
    }
  }
});

export const { addBook, toggleRead, updateBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;