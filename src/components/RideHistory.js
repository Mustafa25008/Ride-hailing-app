import React from 'react';

function RideHistory({ rides }) {
  if (rides.length === 0) {
    return <p>No ride history yet.</p>;
  }

  return (
    <div>
      <h3>Ride History</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {rides.map((ride, index) => (
          <li
            key={index}
            style={{
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            <p><strong>Pickup:</strong> {ride.pickup}</p>
            <p><strong>Drop-off:</strong> {ride.dropoff}</p>
            <p><strong>Type:</strong> {ride.type}</p>
            <p><strong>Status:</strong> {ride.status}</p>
            <p><strong>Date:</strong> {ride.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RideHistory;
