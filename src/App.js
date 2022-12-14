import { Route, Routes } from 'react-router-dom';
import Register from './features/Register';
import React from 'react';
import Login from './features/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
