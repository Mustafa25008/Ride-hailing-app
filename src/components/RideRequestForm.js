import React, { useState } from 'react';

function RideRequestForm({ onRequestRide }) {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [type, setType] = useState('Bike');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup.trim() && dropoff.trim()) {
      onRequestRide({ pickup, dropoff, type });
      setPickup('');
      setDropoff('');
    }
  };

  return (
    <div>
      <h3>Request a Ride</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Pickup Location: </label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Enter Drop-off Location: </label>
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Select Ride Type: </label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="Rickshaw">Rickshaw</option>
          </select>
        </div>
        <br />
        <button type="submit">Request Ride</button>
      </form>
    </div>
  );
}

export default RideRequestForm;
