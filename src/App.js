import { Route, Routes } from 'react-router-dom';
import Login from './features/Login';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
