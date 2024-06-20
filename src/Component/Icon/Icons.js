// src/Icons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee, faSmile,faArrowDown, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';


// Custom icon components
export const FaArrowRight =(props) => <FontAwesomeIcon icon={faArrowRight}  {...props}/>;
export const FaCoffee =(props)=> <FontAwesomeIcon icon={faCoffee}  {...props}/>;
export const FaSmile = (props) => <FontAwesomeIcon icon={faSmile} {...props} />;
export const FaTwitter = (props) => <FontAwesomeIcon icon={faTwitter} {...props} />;
export const FaArrowDown = (props) => <FontAwesomeIcon icon={faArrowDown} {...props} />;
export const FaAngleDown = (props) => <FontAwesomeIcon icon={faAngleDown} {...props} />;

