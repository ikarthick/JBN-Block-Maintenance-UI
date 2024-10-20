import React, { useState, useEffect } from 'react';
import './AdminPortal.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
function AdminPortal() {
  const [residences, setResidences] = useState([]);
  const navigate=useNavigate()
  // Fetch residences data from API
  useEffect(() => {
    const fetchResidences = async () => {
      try {
       // const response = await axios.get('http://localhost:8080/resident');
       const response = await fetch('http://localhost:8080/resident');
        if (!response.status.toString === 200) {
          throw new Error('Failed to fetch residences');
        }

        const jsonResponse = await response.json(); // Ensure JSON format
        if (!Array.isArray(jsonResponse)) {
          throw new Error('Unexpected response format: Not an array');
        }

        setResidences(jsonResponse);
      } catch (error) {
        console.error('Error fetching residences:', error);
      }
    }; 

    fetchResidences();
  }, []);

const handleNavigate=(item)=>{
  console.log("item are:",item)
  navigate(`/block/${item?.residentId}`)
  
}
  return (
    <div className="admin-portal">
      <h2>Admin Portal - Residences</h2>
      <div className="residences-grid">
        {residences  && residences .map(residence => (
          <div key={residence.residentId} onClick={()=>handleNavigate(residence)}ß className="residence-card" style={{border:'1px solid red',cursor:'pointer'}} >
            <h3 >Door No: {residence.doorNo}</h3>
            <p>
              <span>Name:</span> {residence.fullName}
            </p>
            <p>
              <span>Age:</span> {residence.age}
            </p>
            <p>
              <span>Phone No:</span> {residence.phoneNo}
            </p>
            <p>
              <span>Email ID:</span> {residence.emailId}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPortal;