// src/components/CreateMonthlyExpenses.js
import React, { useState } from 'react';
import './CreateMonthlyExpenses.css';

function CreateMonthlyExpenses() {
  const [maintenanceCharges, setMaintenanceCharges] = useState({});
  const [totalEBCharges, setTotalEBCharges] = useState('');
  const [totalExpenses, setTotalExpenses] = useState({
    sweeperSalary: '',
    pumpOperatorCharges: '',
    otherExpenses: '',
  });
  const [totalWaterCharges, setTotalWaterCharges] = useState({
    metroWater: '',
    privateTank: '',
  });
  const [electricityBill, setElectricityBill] = useState({
    pump2: '',
    commonSump: '',
    staircase: '',
  });

  const handleInputChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      maintenanceCharges,
      totalEBCharges,
      totalExpenses,
      totalWaterCharges,
      electricityBill,
    };
    console.log('Form Data:', formData);
    alert('Expense details submitted successfully!');
  };

  return (
    <div className="create-monthly-expenses-container">
      <header>
        <h1>Monthly Maintenance & Expenses Report</h1>
      </header>
      <form className="monthly-expenses-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="maintenanceCharges">Maintenance Charges per House</label>
            <input
              type="number"
              id="maintenanceCharges"
              name="maintenanceCharges"
              value={maintenanceCharges}
              onChange={(e) => setMaintenanceCharges(e.target.value)}
              placeholder="Enter charges"
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalEBCharges">Total EB Charges</label>
            <input
              type="number"
              id="totalEBCharges"
              name="totalEBCharges"
              value={totalEBCharges}
              onChange={(e) => setTotalEBCharges(e.target.value)}
              placeholder="Enter EB charges"
            />
          </div>
          {/* Total Expenses Section */}
          <div className="form-group">
            <label htmlFor="sweeperSalary">Sweeper Salary</label>
            <input
              type="number"
              id="sweeperSalary"
              name="sweeperSalary"
              value={totalExpenses.sweeperSalary}
              onChange={(e) => handleInputChange(e, setTotalExpenses)}
              placeholder="Enter sweeper salary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pumpOperatorCharges">Pump Operator Charges</label>
            <input
              type="number"
              id="pumpOperatorCharges"
              name="pumpOperatorCharges"
              value={totalExpenses.pumpOperatorCharges}
              onChange={(e) => handleInputChange(e, setTotalExpenses)}
              placeholder="Enter operator charges"
            />
          </div>
          <div className="form-group">
            <label htmlFor="otherExpenses">Other Expenses</label>
            <input
              type="number"
              id="otherExpenses"
              name="otherExpenses"
              value={totalExpenses.otherExpenses}
              onChange={(e) => handleInputChange(e, setTotalExpenses)}
              placeholder="Enter other expenses"
            />
          </div>
          {/* Total Water Charges Section */}
          <div className="form-group">
            <label htmlFor="metroWater">Metro Water Charges</label>
            <input
              type="number"
              id="metroWater"
              name="metroWater"
              value={totalWaterCharges.metroWater}
              onChange={(e) => handleInputChange(e, setTotalWaterCharges)}
              placeholder="Enter Metro Water charges"
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateTank">Private Tank Charges</label>
            <input
              type="number"
              id="privateTank"
              name="privateTank"
              value={totalWaterCharges.privateTank}
              onChange={(e) => handleInputChange(e, setTotalWaterCharges)}
              placeholder="Enter Private Tank charges"
            />
          </div>
          {/* Electricity Bill Section */}
          <div className="form-group">
            <label htmlFor="pump2">Electricity Bill - Pump 2</label>
            <input
              type="number"
              id="pump2"
              name="pump2"
              value={electricityBill.pump2}
              onChange={(e) => handleInputChange(e, setElectricityBill)}
              placeholder="Enter Pump 2 EB"
            />
          </div>
          <div className="form-group">
            <label htmlFor="commonSump">Electricity Bill - Common Sump</label>
            <input
              type="number"
              id="commonSump"
              name="commonSump"
              value={electricityBill.commonSump}
              onChange={(e) => handleInputChange(e, setElectricityBill)}
              placeholder="Enter Common Sump EB"
            />
          </div>
          <div className="form-group">
            <label htmlFor="staircase">Electricity Bill - Staircase</label>
            <input
              type="number"
              id="staircase"
              name="staircase"
              value={electricityBill.staircase}
              onChange={(e) => handleInputChange(e, setElectricityBill)}
              placeholder="Enter Staircase EB"
            />
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateMonthlyExpenses;
