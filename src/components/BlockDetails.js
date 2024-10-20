// src/components/BlockDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlockDetails.css'; // Import CSS file for styling

function BlockDetails() {
  const { id } = useParams();
  const [blockDetails, setBlockDetails] = useState(null);

  // Simulated data for block details
  useEffect(() => {
    // Fetch block details data from API or use static data
    const data = {
      id: id,
      name: `Residence ${id}`,
      description: `Description of Residence ${id}`,
      address: `123 Main Street, Residence ${id}`,
      // Add more properties as needed (e.g., payment details)
    };
    setBlockDetails(data);
  }, [id]);

  if (!blockDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="block-details">
      <h2>Block Details</h2>
      <div className="details-card">
        <h3>{blockDetails.name}</h3>
        <p>{blockDetails.description}</p>
        <p>Address: {blockDetails.address}</p>
        {/* Add more details here (e.g., payment details) */}
      </div>
    </div>
  );
}

export default BlockDetails;
