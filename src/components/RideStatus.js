import React from 'react';

function RideStatus({ ride }) {
  if (!ride) {
    return <p>No active ride. Please request a ride first.</p>;
  }

  const getMessageForStatus = (status) => {
    switch (status) {
      case 'Requested':
        return '🚕 Ride request sent! Waiting for driver to accept...';
      case 'Accepted':
        return '✅ Driver accepted your ride. Heading your way!';
      case 'In Progress':
        return '🛣️ Ride is in progress...';
      case 'Completed':
        return '🎉 Ride completed. Thank you for riding with us!';
      default:
        return '';
    }
  };

  return (
    <div>
      <h3>Ride Status</h3>
      <p><strong>Pickup:</strong> {ride.pickup}</p>
      <p><strong>Drop-off:</strong> {ride.dropoff}</p>
      <p><strong>Ride Type:</strong> {ride.type}</p>
      <p><strong>Status:</strong> {ride.status}</p>
      <p style={{ marginTop: '10px', color: '#333' }}>{getMessageForStatus(ride.status)}</p>
    </div>
  );
}

export default RideStatus;
