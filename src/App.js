import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import { FaHotel } from 'react-icons/fa';
import Header from './components/Header'; // Moved header logic to a separate component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <footer>
          <p>&copy; 2024 Hotel Booking App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
