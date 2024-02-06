// Import necessary components and styles
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import Men from './Men';
import AboutUs from './AboutUs';

import Register from './Register';

import './Navbar.css';


// Component definition
function BasicExample() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img className='op' src="https://cdn-icons-png.flaticon.com/128/11438/11438083.png" alt="" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handleTabClick('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#aboutUs" onClick={() => handleTabClick('aboutUs')}>
                AboutUs
              </Nav.Link>
              <NavDropdown title="Food" id="basic-nav-dropdown">
                <NavDropdown.Item href="#ContactForm">
                  Healthy living
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Exercise" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Men" onClick={() => handleTabClick('Men')}>
                  Men
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add">
                  Women
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#Register" onClick={() => handleTabClick('Register')}>
                Register 
              </Nav.Link>

              {/* Add the new NavDropdown for "Shop" with sub-menus */}
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Proteins" onClick={() => handleTabClick('proteins')}>
                  Proteins
                </NavDropdown.Item>
                <NavDropdown.Item href="#AccessoireSport" onClick={() => handleTabClick('accessoireSport')}>
                  Accessoire Sport
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      {/* Render the received data only if searchClicked is true */}
      {activeTab === 'home' && <Home />}
      {activeTab === 'aboutUs' && <AboutUs />}
      {activeTab === 'Men' && <Men />}

      {activeTab === 'Register' && <Register />}

      {/* Add more conditions for other tabs if needed */}

    </div>
  );
}

export default BasicExample;
