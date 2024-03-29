// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import Men from './Men';
import AccessoireSport from './AccessoireSport';
import Register from './Register';
import './Navbar.css';
import Lose from './lose';
import Gain from './gain';
import ContactForm from './ContactUs';
import AboutUs from './AboutUs';
import Proteine from './Proteins';
import CartList from './CartList';
import Add from './AddForMen';
import Women from './Women';
import AddForWomen from './AddForWomen';
import AddLose from './AddLose';
import AddGain from './AddGain';
import PrivateCoach from './PrivateCoach';
import Advices from './Advices';
import ProteinCalculator from './ProteinCalculator';
import AddProtein from './AddProtein';
import AddAccessories from './Addaccessoiresport';
function NavbarComponent() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('light');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`theme-${theme}`}>
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
        About 
            </Nav.Link>
  
            <NavDropdown title="Exercise" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Men" onClick={() => handleTabClick('Men')}>
                Men
              </NavDropdown.Item>
              <NavDropdown.Item href="#Women" onClick={() => handleTabClick('Women')}>
                Women
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Proteins" onClick={() => handleTabClick('proteins')}>
                Proteins
              </NavDropdown.Item>
              <NavDropdown.Item href="#AccessoireSport" onClick={() => handleTabClick('accessoireSport')}>
                Accessoire Sport
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Healthy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#loss weight" onClick={() => handleTabClick('loss weight')}>
                Loss weight
              </NavDropdown.Item>
              <NavDropdown.Item href="#gain Weight" onClick={() => handleTabClick('gain Weight')}>
                Gain Weight
              </NavDropdown.Item>
              <NavDropdown.Item href="#ProteinCalculator" onClick={() => handleTabClick('ProteinCalculator')}>
                Proteins you need
              </NavDropdown.Item>
              <NavDropdown.Item href="#Radio" onClick={() => handleTabClick('Advices')}>
         Advices
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact" onClick={() => handleTabClick('Contact')}>
              Contact
            </Nav.Link>
            <NavDropdown title="Add" id="basic-nav-dropdown">
              <NavDropdown className="khalil" title="Exercice">
                <NavDropdown.Item href="#Men" onClick={() => handleTabClick('AddForMen')}>
                  Men
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleTabClick('AddForWomen')} href="#Women">
                  Women
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="khalil" title="Healthy">
                <NavDropdown.Item href="#loss weight" onClick={() => handleTabClick('Add loss weight')}>
                  loss weight
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleTabClick('Add gain Weight')} href="#gain Weight">
                  gain Weight
                </NavDropdown.Item>
               
              </NavDropdown>
              <NavDropdown className="khalil" title="Shop">
                <NavDropdown.Item onClick={() => handleTabClick('AddProtein')} href="#AddProtein">
              Add Protein
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleTabClick('AddAccessories')} href="#AddAccessories">
            Add accessoiresport
            </NavDropdown.Item>
            </NavDropdown>
            </NavDropdown>
            
            <Nav.Link href="#Private Coach" onClick={() => handleTabClick('Private Coach')}>
              private_Coach
            </Nav.Link>
            <Nav.Link id="nb" href="#User" onClick={() => handleTabClick('Register')}>
              <img className="op" src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" alt="" height="30" />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
        <Nav.Link id="a" href="#Cart" onClick={() => handleTabClick('Cart')}>
          <img className="o" src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png" alt="" height="30" />
        </Nav.Link>
      </Container>
    </Navbar>
    <hr />

      {activeTab === 'home' && <Home />}
      {activeTab === 'aboutUs' && <AboutUs />}
      {activeTab === 'Men' && <Men />}
      {activeTab === 'Register' && <Register />}
      {activeTab === 'Women' && <Women />}
      {activeTab === 'AddForWomen' && <AddForWomen />}
      {activeTab === 'Add loss weight' && <AddLose />}
      {activeTab === 'Add gain Weight' && <AddGain />}
      {activeTab === 'AddForMen' && <Add onAddToCart={handleAddToCart} />}
      {activeTab === 'Register' && <Register />}
      {activeTab === 'proteins' && <Proteine onAddToCart={handleAddToCart} />}
      {activeTab === 'accessoireSport' && <AccessoireSport onAddToCart={handleAddToCart} />}
      {activeTab === 'Cart' && <CartList cart={cart} />}
      {activeTab === 'loss weight' && <Lose />}
      {activeTab === 'gain Weight' && <Gain />}
      {activeTab === 'Contact' && <ContactForm />}
      {activeTab === 'Private Coach' && <PrivateCoach />}
      {activeTab === 'Advices' && <Advices />}
      {activeTab === 'ProteinCalculator' && <ProteinCalculator />}
      {activeTab === 'AddProtein' && <AddProtein />}
      {activeTab === ' AddAccessoires' && <AddAccessories />}
    </div>
  );
}

export default NavbarComponent;
