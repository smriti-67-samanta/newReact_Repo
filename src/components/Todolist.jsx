import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../Redux/Actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span 
            style={{ 
              textDecoration: todo.status ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.title}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;