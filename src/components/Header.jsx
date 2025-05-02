import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import '../App.css'; // Add styles specific to the header

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); // Access context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home page
  };

  return (
    <header className="header">
      <h1>
        <FaHotel style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Hotel Booking App
      </h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
