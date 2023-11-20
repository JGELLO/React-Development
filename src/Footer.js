import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#000000',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 JGELLO. All Rights Reserved.</p>
      <p>React Icon Resources: https://react-icons.github.io/react-icons/</p>
    </footer>
  );
};

export default Footer;
 