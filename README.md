# 🚕 Mini Ride Booking System

A simple web-based ride booking system prototype designed for small city testing. This lightweight app allows users to simulate booking a ride, track ride status in real time, and view ride history — all without requiring GPS, real drivers, or a backend server.

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework for dynamic UI and component-based structure
- **HTML5 & CSS3** – Page layout and styling
- **JavaScript (ES6)** – Application logic and state handling
- **LocalStorage** – Used to store user session and ride history data
- **Create React App** – Toolchain used for bootstrapping the project

---

## ✨ Features

- 🔐 Dummy user login (enter any username to log in)
- 🚗 Book a ride by entering pickup & drop-off locations and selecting a ride type (Bike, Car, Rickshaw)
- 📈 Automated ride status progression:
  - `Requested` → `Accepted` → `In Progress` → `Completed`
- 📄 View real-time ride status updates with friendly messages
- 🕓 See past completed rides in the **Ride History** section
- 🧭 Simple header and footer layout for structure

---

## 📦 Project Structure
mini-ride-booking-system/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── Login.js
│ │ ├── RideRequestForm.js
│ │ ├── RideStatus.js
│ │ └── RideHistory.js
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json

Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser to use the app.

📌 Assumptions
No real authentication, GPS, driver matching, or backend is implemented

Data is only stored in localStorage, so clearing browser data resets history

All status transitions are simulated and happen automatically

💡 Future Enhancements (Optional Ideas)
Add a real backend using Node.js/Express and MongoDB

Replace dummy login with Firebase or JWT auth

Add driver/user roles with separate views

Improve mobile responsiveness and design polish

📄 License
This project is for educational and demonstration purposes only.
