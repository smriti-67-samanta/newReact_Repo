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
  );
}

export default App;