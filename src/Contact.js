import React from 'react';
import './App.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-info">Email: your.email@example.com</p>
      <p className="contact-info">LinkedIn: <a href="here">Your LinkedIn Profile</a></p>
      <button className="contact-button">Send Message</button>
    </div>
  );
};

export default Contact;
