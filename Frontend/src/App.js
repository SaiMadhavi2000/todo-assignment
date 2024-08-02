import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register setAuthToken={setAuthToken} />} />
          <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
          <Route path="/todos" element={<TodoList authToken={authToken} />} />
          <Route path="/todos/new" element={<TodoForm authToken={authToken} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
