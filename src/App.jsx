<<<<<<< HEAD
import { Box, Heading } from '@chakra-ui/react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import BookFilters from './components/BookFilters';

function App() {
  return (
    <Box maxWidth="1200px" margin="0 auto" p={8}>
      <Heading mb={8}>Book Library</Heading>
      <AddBook />
      <BookFilters />
      <BookList />
    </Box>
=======
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import TodoList from './components/Todolist';
import AddTodo from './components/Addtodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
>>>>>>> dfa3e013da58f959b10a3ff06bd586455ebbd671
  );
}

export default App;