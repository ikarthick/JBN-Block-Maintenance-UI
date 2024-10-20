// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPortal from './components/AdminPortal'; 
import BlockDetails from './components/BlockDetails'; 
import DashboardPortal from './components/DashboardPortal';
import CreateMonthlyReport from './components/CreateMonthlyReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/portal" element={<DashboardPortal />} />
        <Route path="/block/:id" element={<BlockDetails />} />
        <Route path="/create-monthly-report" element={<CreateMonthlyReport />} />
      </Routes>
    </Router>
  );
}

export default App;
