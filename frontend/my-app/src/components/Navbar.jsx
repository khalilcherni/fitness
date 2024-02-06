import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Home from './Home';
import "./Navbar.css"
import Men from './Men';

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
          <Navbar.Toggle aria-controls="èbasic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >
              
              </Nav.Link>
              <Nav.Link href="#Home" onClick={() => handleTabClick('home')}>
                Home 
              </Nav.Link>
              <NavDropdown title="Food" id="basic-nav-dropdown">
              <NavDropdown.Item href="#ContactForm">
                Healthy living 
                </NavDropdown.Item>
              </NavDropdown>
            
              <NavDropdown title="Exercice" id="basic-nav-dropdown">
           
                <NavDropdown.Item href="#Men" onClick={() => handleTabClick('Men')}>
                  Men 
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add" >
                  Women
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {/* Render the received data only if searchClicked is true */}
     

   
      {activeTab === 'home' && <Home />}
      {activeTab === 'Men' && <Men />}
    </div>
  );
}
  
  export default BasicExample;
