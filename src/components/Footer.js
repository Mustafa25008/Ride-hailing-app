import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f1f1f1',
      padding: '10px',
      textAlign: 'center',
      marginTop: '30px',
      borderTop: '1px solid #ccc',
      fontSize: '14px'
    }}>
      <p>© {new Date().getFullYear()} Mini Ride Booking System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
