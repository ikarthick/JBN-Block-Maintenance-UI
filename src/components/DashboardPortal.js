import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPortal.css';

function DashboardPortal() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-portal-container">
      <header>
        <h1>Block Maintenance Portal</h1>
      </header>
      <div className="dashboard-portal-content">
        <h2>Select a Portal</h2>
        <div className="button-group">
          <button onClick={() => navigate('/admin')}>Admin Residences Portal</button>
          <button onClick={() => navigate('/create-monthly-report')}>
            Create Monthly Maintenance Report
          </button>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Block Maintenance Inc.</p>
      </footer>
    </div>
  );
}

export default DashboardPortal;
