import React, { useState, useEffect } from 'react';
import './CreateMonthlyReport.css';

function CreateMonthlyReport() {
  const [meterReadings, setMeterReadings] = useState({});
  const [notWorkingMeters, setNotWorkingMeters] = useState({});
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get previous month and year
  const date = new Date();
  date.setMonth(date.getMonth() - 1); // Go back one month
  const previousMonth = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Fetch residents from the API
  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await fetch('http://localhost:8080/resident');
        const data = await response.json();
        setResidents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching residents:', error);
        setLoading(false);
      }
    };

    fetchResidents();
  }, []);

  const handleInputChange = (e, residentId) => {
    const { value } = e.target;
    setMeterReadings({
      ...meterReadings,
      [residentId]: value,
    });
  };

  const handleNotWorkingChange = (e, residentId) => {
    const { checked } = e.target;
    if (checked) {
      // If checked, clear the reading
      setMeterReadings({
        ...meterReadings,
        [residentId]: '', // Clear the reading if not working
      });
    }
    setNotWorkingMeters({
      ...notWorkingMeters,
      [residentId]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const readingsToSubmit = residents.map((resident) => ({
      residentId: resident.residentId,
      reading: notWorkingMeters[resident.residentId]
        ? 'Not Working'
        : meterReadings[resident.residentId] || '',
    }));
    console.log('Water Meter Readings:', readingsToSubmit);
    alert('Water meter readings submitted successfully');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="create-monthly-report-container">
      <header>
        <h1>Create Maintenance Report - {previousMonth} {year}</h1>
      </header>
      <form className="monthly-report-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          {residents.map((resident) => (
            <div key={resident.residentId} className="form-group">
              <label htmlFor={`house-${resident.residentId}`}>
                Door No - {resident.doorNo}
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id={`house-${resident.residentId}`}
                  name={`house-${resident.residentId}`}
                  value={meterReadings[resident.residentId] || ''}
                  onChange={(e) => handleInputChange(e, resident.residentId)}
                  required={!notWorkingMeters[resident.residentId]} // Make it required if not marked as not working
                />
                <label className="nw-label">
                  <input
                    type="checkbox"
                    checked={notWorkingMeters[resident.residentId] || false}
                    onChange={(e) => handleNotWorkingChange(e, resident.residentId)}
                  />
                  NW
                </label>
              </div>
            </div>
          ))}
        </div>
        <button type="submit">Submit Readings</button>
      </form>
    </div>
  );
}

export default CreateMonthlyReport;
