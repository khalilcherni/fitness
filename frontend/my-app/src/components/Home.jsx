import React from 'react';
import "./home.css";

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
          <img src="https://fitnessvolt.com/wp-content/uploads/2022/04/Superset-guide.jpg" alt="header" />
        </div>
      </header>

      <div className="header__images-container">
        <div className="header__image">
          <img src="https://img.freepik.com/premium-photo/portrait-muscular-woman-plank-position_484651-9812.jpg?size=626&ext=jpg" alt="header" />
        </div>
        <div className="header__image">
          <img src="https://static.toiimg.com/thumb/msid-95450287,imgsize-1285219,width-400,resizemode-4/95450287.jpg" alt="header" />
        </div>
        <div className="header__image">
          <img src="https://www.shutterstock.com/image-photo/woman-man-training-together-doing-260nw-1033122217.jpg" alt="header" />
        </div>
        <div className="header__image">
          <img src="https://contents.mediadecathlon.com/p1999580/k$20477ad61d910403d68d061afdce1a31/1800x0/2738pt2054/5476xcr4107/fitness%2520quel%2520sport%2520choisir%2520%25C3%25A0%2520la%2520rentr%25C3%25A9e.jpg?format=auto" alt="header" />
        </div>
      </div>

      <footer className="section__container footer__container">
        <span className="bg__blur"></span>
        <span className="bg__blur footer__blur"></span>
        <div className="footer__col">
    
          <p>
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer together!
          </p>
          <div className="footer__socials">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </div>
        </div>
       
        <div className="footer__col">
          <h4>About Us</h4>
          <a href="#">Blogs</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          
        </div>
      </footer>
      
      <div className="footer__bar">
        Copyright © 2024 Web fitness.
      </div>
    </div>
  );
};

export default Home;
