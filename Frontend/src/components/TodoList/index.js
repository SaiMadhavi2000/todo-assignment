import React, { useEffect, useState } from 'react';
import { getTodos, deleteTodo } from '../api';
import { useNavigate } from 'react-router-dom';

const TodoList = ({ authToken }) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(authToken);
        setTodos(response.data.todos);
      } catch (error) {
        alert('Failed to fetch to-dos');
      }
    };

    fetchTodos();
  }, [authToken]);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(authToken, id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      alert('Failed to delete to-do');
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <button onClick={() => navigate('/todos/new')}>Add New To-Do</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
