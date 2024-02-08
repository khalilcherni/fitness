import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import Men from './Men';
import AccessoireSport from './Accessoire Sport';
import Register from './Register';
import './Navbar.css';
import Lose from './lose';
import Gain from './gain';
import ContactForm from './ContactUs';
import ProfilePage from './ProfilePage';
import AboutUs from './AboutUs';




import CartList from './CartList';
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
    
              <NavDropdown title="Exercise" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Men" onClick={() => handleTabClick('Men')}>
                  Men
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add">Women</NavDropdown.Item>
              </NavDropdown>

          

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
                Contact 
              </Nav.Link>
              <Nav.Link href="#aboutUs" onClick={() => handleTabClick('aboutUs')}>
                About Us
          About 
              </Nav.Link>

              <Nav.Link id='nb' href="#User" onClick={() => handleTabClick('Register')}>
              <img className="op" src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" alt="" height="30" />
</Nav.Link>
{/* <Nav.Link href="#ProfilePage" onClick={() => handleTabClick('ProfilePage')}>
ProfilePage 
              </Nav.Link> */}
  
    
            </Nav>
          
            <Nav className="ms-auto">
              
            </Nav>
          </Navbar.Collapse>
          <Nav.Link id='a'  href="#Cart" onClick={() => handleTabClick('Cart')}>
              <img className="op" src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png" alt="" height="30" />
</Nav.Link>
        </Container>
 
      </Navbar>
      <hr />

      {activeTab === 'home' && <Home />}
      {activeTab === 'aboutUs' && <AboutUs />}
      {activeTab === 'Men' && <Men />}
      {activeTab === 'Register' && <Register />}
      {activeTab === 'proteins' && <Proteine />}
      {activeTab === 'accessoireSport' && <AccessoireSport />}
      
      {activeTab === 'loss weight' && <Lose />}
      {activeTab === 'gain Weight' && <Gain />}
      {activeTab === 'Contact' && <ContactForm />}
      {activeTab === 'Cart' && <CartList />}

      {/* {activeTab === 'User' && <Register />} */}
    </div>
  );
}

export default BasicExample;

