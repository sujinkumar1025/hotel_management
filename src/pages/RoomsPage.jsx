import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import the AuthContext
import './RoomsPage.css';

const RoomsPage = () => {
  const { user } = useContext(AuthContext); // Access user data from context
  const [filterPrice, setFilterPrice] = useState('');
  const [price, setPrice] = useState(600); // Default price to be in the middle (600)
  const [flippedCard, setFlippedCard] = useState(null); // Track which card is flipped
  const navigate = useNavigate(); // Navigate function for redirection

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      image: './images/room1.jpeg',
      price: 120,
      description: 'A cozy deluxe room with a queen bed and modern amenities.',
      facilities: 'Free Wi-Fi, Queen Bed, 24/7 Room Service',
    },
    {
      id: 2,
      name: 'Super Deluxe Room',
      image: './images/room2.webp',
      price: 180,
      description: 'Spacious super deluxe room with premium interiors and a king bed.',
      facilities: 'Free Wi-Fi, King Bed, Complimentary Breakfast',
    },
    {
      id: 3,
      name: 'Luxury Suite',
      image: './images/room3.webp',
      price: 600,
      description: 'Experience unparalleled luxury with a private balcony and Jacuzzi.',
      facilities: 'Private Balcony, Jacuzzi, All-Day Dining',
    },
    {
      id: 4,
      name: 'Standard Room',
      image: './images/room4.webp',
      price: 90,
      description: 'Perfect for budget travelers with basic facilities.',
      facilities: 'Free Wi-Fi, Single Bed, Room Heater',
    },
    {
      id: 5,
      name: 'Family Suite',
      image: './images/room5.webp',
      price: 450,
      description: 'Ideal for families with two bedrooms and a living area.',
      facilities: 'Two Bedrooms, Living Area, Kitchenette',
    },
    {
      id: 6,
      name: 'Business Room',
      image: './images/room6.jpeg',
      price: 550,
      description: 'Designed for business travelers with a work desk and conference facilities.',
      facilities: 'Work Desk, Conference Facilities, Free Wi-Fi',
    },
    {
      id: 7,
      name: 'Penthouse Suite',
      image: './images/room7.webp',
      price: 400,
      description: 'An opulent penthouse with panoramic views of the city.',
      facilities: 'Panoramic Views, Private Terrace, Personalized Services',
    },
    {
      id: 8,
      name: 'Garden View Room',
      image: './images/room8.jpeg',
      price: 140,
      description: 'A serene garden view room with a calming atmosphere.',
      facilities: 'Garden View, Free Wi-Fi, Balcony',
    },
    {
      id: 9,
      name: 'Poolside Room',
      image: './images/room9.jpeg',
      price: 200,
      description: 'Enjoy direct access to the pool with this stylish room.',
      facilities: 'Pool Access, Lounge Chair, Complimentary Drinks',
    },
    {
      id: 10,
      name: 'Heritage Room',
      image: './images/room10.webp',
      price: 220,
      description: 'Experience history with antique furnishings and artwork.',
      facilities: 'Antique Furnishings, Free Wi-Fi, Minibar',
    },
    {
      id: 11,
      name: 'Spa Room',
      image: './images/room11.jpeg',
      price: 280,
      description: 'Relax with an in-room spa and soothing interiors.',
      facilities: 'In-Room Spa, Aromatherapy, Jacuzzi',
    },
    {
      id: 12,
      name: 'Executive Room',
      image: './images/room12.jpeg',
      price: 170,
      description: 'A blend of comfort and elegance for executives.',
      facilities: 'King Bed, Work Desk, Complimentary Breakfast',
    },
  ];

  const handleFilterChange = (e) => {
    const newPrice = e.target.value;
    setFilterPrice(newPrice);
    setPrice(newPrice === '' ? 600 : Number(newPrice)); // Adjust the slider when the dropdown changes
  };

  const handleRangeChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    setFilterPrice(newPrice === 600 ? '' : newPrice.toString()); // Adjust the dropdown when the slider changes
  };

  const filteredRooms = rooms.filter(
    (room) => (filterPrice ? room.price <= parseInt(filterPrice) : true) && room.price <= price
  );

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id); // Toggle flip state
  };

  const handleBookNow = (roomName) => {
    if (!user) {
      alert('You must be logged in to book a room!');
      navigate('/login'); // Redirect to login if not logged in
    } else {
      alert(`You have booked the ${roomName}!`);
      // Add logic to proceed with booking, if needed
    }
  };

  return (
    <div className="rooms-container">
      <div className="filter-container">
        <div>
          <label htmlFor="price-filter">Filter by Price:</label>
          <select id="price-filter" value={filterPrice} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="100">Up to $100</option>
            <option value="150">Up to $150</option>
            <option value="200">Up to $200</option>
            <option value="300">Up to $300</option>
            <option value="400">Up to $400</option>
            <option value="500">Up to $500</option>
            <option value="600">Up to $600</option>
          </select>
        </div>

        <div>
          <label htmlFor="price-range">Price Range:</label>
          <input
            type="range"
            id="price-range"
            value={price}
            onChange={handleRangeChange}
            min="0"
            max="600"
          />
          <span className="price-range-display">${price}</span> {/* Display the selected value */}
        </div>

        {/* Conditionally display message if the slider value is 0 */}
        {price === 0 && (
          <div className="centered-message">
            You have selected $0. Please choose a valid price range above $0.
          </div>
        )}
      </div>

      <div className="rooms-grid">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className={`room-card ${flippedCard === room.id ? 'flipped' : ''}`}
            onClick={() => handleCardClick(room.id)}
          >
            <div className="room-card-inner">
              {/* Front Side */}
              <div className="room-card-front">
                <img src={room.image} alt={room.name} className="room-image" />
                <h3 className="room-name">{room.name}</h3>
                <p className="room-price">${room.price}</p>
                <p className="room-booking-text">(Click here to book)</p>
              </div>

              {/* Back Side */}
              <div className="room-card-back">
                <p className="room-description">{room.description}</p>
                <button className="book-now-btn" onClick={() => handleBookNow(room.name)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
