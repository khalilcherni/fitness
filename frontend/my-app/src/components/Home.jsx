import React,{useEffect,useState} from 'react';
import "./home.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import image from "./image/bodybuilder-puissant-elegant-tatouage-son-bras-faisant-exercices-biceps-halteres-regardez-camera-regard-confiant-isole-fond-sombre-removebg-preview.png"

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slideshow transition
  const handleSlideChange = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 images in the slideshow
  };

  // Automatically change the slide every 3 seconds (adjust as needed)
  useEffect(() => {
    const intervalId = setInterval(handleSlideChange, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const images = [
    "https://res.cloudinary.com/comparis-cms/image/upload/v1686125303/health%20/overviewpages/fitness/fitness_xptixd.jpg",
    "https://t4.ftcdn.net/jpg/02/43/13/15/360_F_243131531_jmNppYX9Ux2Hj2RV9yYR1swicwcYr8EQ.jpg",
    "https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0="
  ];

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
          <img className='p' src={image} alt="header" />
        </div>
      </header>

      <Splide
        options={{
          type: 'fade', // Use fade effect
          autoplay: true,
          interval: 2500, // Interval between slides
          pauseOnHover: true, // Pause autoplay on hover
          rewind: true, // Rewind to first slide after the last one
        }}
      >
        {images.map((url, index) => (
          <SplideSlide key={index}>
            <img src={url} alt={`header ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>


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
