import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import './Login.css';


// Carousel Component
const Carousel = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/carousel1.jpg`,
    `${process.env.PUBLIC_URL}/images/carousel2.jpg`,
    `${process.env.PUBLIC_URL}/images/carousel3.jpg`,
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide functionality (changes the image every 6 seconds)
  React.useEffect(() => {
    const interval = setInterval(goToNext, 6000); // 6000 ms = 6 seconds
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
};

// Login Component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const navigate = useNavigate();

  // Validate form input
  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!email) {
      isValid = false;
      errors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      isValid = false;
      errors.password = 'Please enter your password.';
    } else if (password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const userData = { email, loginTime: new Date().toISOString() };
      login(userData); // Log the user in and store their data
      alert('Login Successful!');
      navigate('/rooms'); // Redirect to dashboard
    }
  };

  return (
    <div className="login-container">
      <Carousel />
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
