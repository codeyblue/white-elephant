import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const navBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        White Elephant
      </Navbar.Brand>
    </Navbar>
  );
}

export default navBar;