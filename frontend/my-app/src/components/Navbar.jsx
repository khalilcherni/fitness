import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function BasicExample() {
  // const [activeTab, setActiveTab] = useState('home');



  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand href="#home">
            <img className='op' src="https://cdn-icons-png.flaticon.com/128/7006/7006898.png" alt="" height="30" />
            Sicca Veneria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="èbasic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >
              
              </Nav.Link>
              <Nav.Link href="#weather">
                Weather
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
     

      {/* Render components based on activeTab */}
      {/* {activeTab === 'home' && < />} */}
    
    </div>
  );
}
  
  export default BasicExample;
