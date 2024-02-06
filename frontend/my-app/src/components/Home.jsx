import React from 'react';
import "./home.css"
import AboutUsComponent from './AboutUs';
const Home = () => {
  return (
    <div>
      <nav>
        {/* Navigation code */}
      </nav>

      <header className="section__container header__container">
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>BEST FITNESS IN THE TOWN</h4>
          <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
          <p>
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape' now
            and witness the incredible transformation your body is capable of!
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="header__image">
          <img className='p' src="https://fitnessvolt.com/wp-content/uploads/2022/04/Superset-guide.jpg" alt="header" />
        </div>
      </header>

   
      <footer className="section__container footer__container">
    
      </footer>

      <div className="footer__bar">
        Copyright © 2024 Web fitness.
      </div>
      {/* <AboutUsComponent/> */}
    </div>
  );
};

export default Home;
