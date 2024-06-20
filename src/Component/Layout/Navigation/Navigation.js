// src/Component/Layout/Navigation/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { FaAngleDown } from '../../Icon/Icons';
import logo from '../../../assets/logo.jpeg'; // Adjust the path as needed

const Navigation = () => {
  return (
    <nav className="airport-nav">
      <ul>
        <li className="logo">
          <NavLink exact to="/" className="nav-link">
            <img src={logo} alt="Company Logo" className="nav-logo" />
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="nav-link">
            <FaAngleDown /> Terminal
          </NavLink>
        </li>
        <li>
          <NavLink to="/departures" className="nav-link">
            Departures
          </NavLink>
        </li>
        <li>
          <NavLink to="/arrivals" className="nav-link">
            Arrivals
          </NavLink>
        </li>
        <li>
          <NavLink to="/information-desk" className="nav-link">
            <FaAngleDown /> Information Desk
          </NavLink>
        </li>
        <li>
          <NavLink to="/lost-found" className="nav-link">
            Lost & Found
          </NavLink>
        </li>
        <li>
          <NavLink to="/baggage-track" className="nav-link">
            Baggage Track
          </NavLink>
        </li>
        <li>
          <NavLink to="/book-service" className="nav-link">
            Book Service
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
