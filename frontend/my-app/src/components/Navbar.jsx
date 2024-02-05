import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Home from './Home';


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
            <img className='op' src="https://cdn-icons-png.flaticon.com/128/7006/7006898.png" alt="" height="30" />
           Fitness
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="èbasic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >
              
              </Nav.Link>
              <Nav.Link href="#Home" onClick={() => handleTabClick('home')}>
                Home 
              </Nav.Link>
              <Nav.Link href="#Tourism">
                Tourism
              </Nav.Link>
              <Nav.Link href="#Culture">
                Culture
              </Nav.Link>
              <Nav.Link href="#Historic" >
                Historic
              </Nav.Link>
              <NavDropdown title="Details" id="basic-nav-dropdown">
                <NavDropdown.Item href="#ContactForm">
                  Book
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add" >
                  Add
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {/* Render the received data only if searchClicked is true */}
     

   
      {activeTab === 'home' && <Home />}
    
    </div>
  );
}
  
  export default BasicExample;
