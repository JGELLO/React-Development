import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Your Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
 