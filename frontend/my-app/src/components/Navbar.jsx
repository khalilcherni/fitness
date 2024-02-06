import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import Men from './Men';

import AboutUs from './AboutUs';



import Register from './Register';
import './Navbar.css';
import Lose from './lose';
import Gain from './gain';
import ContactForm from './ContactUs';

function BasicExample() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img className="op" src="https://cdn-icons-png.flaticon.com/128/11438/11438083.png" alt="" height="30" />
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
                <NavDropdown.Item href="#ContactForm">Healthy living</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Exercise" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Men" onClick={() => handleTabClick('Men')}>
                  Men
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add">Women</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#Register" onClick={() => handleTabClick('Register')}>
                Register
              </Nav.Link>

              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Proteins" onClick={() => handleTabClick('proteins')}>
                  Proteins
                </NavDropdown.Item>
                <NavDropdown.Item href="#AccessoireSport" onClick={() => handleTabClick('accessoireSport')}>
                  Accessoire Sport
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="3eljia" id="basic-nav-dropdown">
                <NavDropdown.Item href="# loss weight" onClick={() => handleTabClick('loss weight')}>
                  Loss weight
                </NavDropdown.Item>
                <NavDropdown.Item href="#gain Weight" onClick={() => handleTabClick('gain Weight')}>
                  Gain Weight
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Contact" onClick={() => handleTabClick('Contact')}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {activeTab === 'home' && <Home />}
      {activeTab === 'aboutUs' && <AboutUs />}
      {activeTab === 'Men' && <Men />}
      {activeTab === 'Register' && <Register />}
      {activeTab === 'loss weight' && <Lose />}
      {activeTab === 'gain Weight' && <Gain />}
      {activeTab === 'Contact' && <ContactForm />}
    </div>
  );
}

export default BasicExample;
