// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPortal from './components/AdminPortal'; // Corrected import path
import BlockDetails from './components/BlockDetails'; // Corrected import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/block/:id" element={<BlockDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
