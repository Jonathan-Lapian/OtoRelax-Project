
import React from 'react';
import '../../../assets/css/style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 OtoRelax Car Salon. All rights reserved.</p>
      <p>
        <a href="#about">About Us</a> | 
        <a href="#services">Services</a> | 
        <a href="#contact">Contact</a>
      </p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
