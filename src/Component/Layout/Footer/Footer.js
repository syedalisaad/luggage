// src/components/Layout/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo.jpeg'; // Update the path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <h2 className="footer-title">About Us</h2>
          <p>
            We are committed to providing the best services for our customers.
            Our airport is equipped with state-of-the-art facilities to ensure
            a pleasant experience.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/departures">Departures</a></li>
            <li><a href="/arrivals">Arrivals</a></li>
            <li><a href="/information-desk">Information Desk</a></li>
            <li><a href="/lost-found">Lost & Found</a></li>
            <li><a href="/baggage-track">Baggage Track</a></li>
            <li><a href="/book-service">Book Service</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <ul>
            <li>Email: info@airport.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Airport Rd, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Airport | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
