// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Custom CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to Our Luxury Hotel</h1>
            <p>Your perfect getaway awaits. Explore rooms, book now, and enjoy a luxurious stay.</p>
            <a href="/rooms" className="cta-button">Explore Rooms</a>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>
          We provide a world-class hospitality experience. Our rooms are designed with comfort in mind, offering state-of-the-art amenities
          for every guest. Whether you’re here for business or leisure, our hotel has everything you need for a memorable stay.
        </p>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="./images/spa.jpg" alt="Spa" />
            <h3>Spa & Wellness</h3>
            <p>Relax and unwind at our exclusive spa, offering rejuvenating treatments.</p>
          </div>
          <div className="service-card">
            <img src="./images/restaurant.jpeg" alt="Restaurant" />
            <h3>Gourmet Dining</h3>
            <p>Enjoy a variety of gourmet dishes at our world-class restaurant.</p>
          </div>
          <div className="service-card">
            <img src="./images/pool.jpeg" alt="Swimming Pool" />
            <h3>Swimming Pool</h3>
            <p>Take a refreshing swim in our luxurious pool with a scenic view.</p>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Guests Say</h2>
        <p>"The experience at this hotel was nothing short of amazing. The rooms were comfortable, and the staff was exceptionally friendly."</p>
        <p>- Jane Doe</p>
      </div>
    </div>
  );
};

export default HomePage;
