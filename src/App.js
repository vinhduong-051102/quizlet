import { Route, Routes } from 'react-router-dom';
import Register from './features/Register';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Register />} />
    </Routes>
  );
};

export default App;
