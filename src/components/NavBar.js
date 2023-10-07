import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './static/navi.css';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar expand="lg" className="bg-body">
      <Navbar.Brand href="/" className="logoO" style={{ marginLeft: '13px' }}>
        <table cellPadding={'0px'} style={{ color: 'darkslateblue', marginTop: '-2vw', marginBottom: '-5vw', fontWeight: '600', fontSize: '18px' }}>
          <tbody>
            <tr><td>SteganoGraphic Secure</td></tr>
            <tr><td>File Storage System</td></tr>
          </tbody>
        </table>
      </Navbar.Brand>

      <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className={`${isNavExpanded ? 'show' : ''}`}>
        <Nav variant="tabs" defaultActiveKey="/home" style={{ marginRight: '0.25vw' }}>
          <Nav.Item>
            <Nav.Link href="/" className="my-custom-button">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link1" className="text-white nav-Link">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link2" className="text-white nav-Link">Log Out</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" className="text-white nav-Link" disabled hidden>
              Log In
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
