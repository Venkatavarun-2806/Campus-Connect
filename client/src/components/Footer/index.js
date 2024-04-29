import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer style={{ paddingTop: 75 }}>
      <Navbar
        className="shadow-sm justify-content-center"
        bg="light"
        variant="light"
        fixed="bottom"
      >
        <Navbar.Text>
          ©CAMPUS RECRUITMENT SYSTEM {' '}
          <a
          >
            @CAMPUS CONNECT
          </a>
        </Navbar.Text>
      </Navbar>
    </footer>
  );
};

export default Footer;
