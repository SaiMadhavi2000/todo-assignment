import React, { useState } from 'react';
import { createTodo } from '../api';
import { useNavigate } from 'react-router-dom';

const TodoForm = ({ authToken }) => {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodo(authToken, text, completed);
      navigate('/todos');
    } catch (error) {
      alert('Failed to create to-do');
    }
  };

  return (
    <div>
      <h2>Create New To-Do</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To-Do Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <label>
          Completed
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TodoForm;
