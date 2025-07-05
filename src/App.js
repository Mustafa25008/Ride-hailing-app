import './App.css'; // Assuming you have some basic styles in App.css
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import RideRequestForm from './components/RideRequestForm';
import RideStatus from './components/RideStatus';
import RideHistory from './components/RideHistory';

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('ride'); // 'ride', 'status', 'history'
  const [currentRide, setCurrentRide] = useState(null);
  const [rideHistory, setRideHistory] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedHistory = JSON.parse(localStorage.getItem('rideHistory')) || [];
    if (savedUser) setUser(savedUser);
    setRideHistory(savedHistory);
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
  };

  const handleRequestRide = (ride) => {
    const newRide = { ...ride, status: 'Requested' };
    setCurrentRide(newRide);
    setCurrentView('status');

    // Simulate auto status updates
    setTimeout(() => {
      setCurrentRide((prev) => prev && { ...prev, status: 'Accepted' });
    }, 3000); // after 3s

    setTimeout(() => {
      setCurrentRide((prev) => prev && { ...prev, status: 'In Progress' });
    }, 6000); // after 6s

    setTimeout(() => {
      const completedRide = {
        ...ride,
        status: 'Completed',
        date: new Date().toLocaleString(),
      };
      const updatedHistory = [completedRide, ...rideHistory];
      setRideHistory(updatedHistory);
      localStorage.setItem('rideHistory', JSON.stringify(updatedHistory));
      setCurrentRide(null);
      setCurrentView('ride');
    }, 10000); // after 10s
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setCurrentRide(null);
    setCurrentView('ride');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Welcome, {user}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setCurrentView('ride')}>Request Ride</button>
        <button onClick={() => setCurrentView('status')}>Ride Status</button>
        <button onClick={() => setCurrentView('history')}>Ride History</button>
      </div>

      {currentView === 'ride' && <RideRequestForm onRequestRide={handleRequestRide} />}
      {currentView === 'status' && <RideStatus ride={currentRide} />}
      {currentView === 'history' && <RideHistory rides={rideHistory} />}
    </div>
  );
}

export default App;
