import React from 'react';
import './AboutUs.css'; // Make sure to import your CSS file

const AboutUs = () => {
  return (
    <div>
      <section className="about" id="about">
       
        <img  classNament= 'coach_image' src='https://lioncoach.fr/wp-content/uploads/2021/08/Coachs_sportifs_Lioncoach-1024x671.jpg' alt="Coaches" />
          <p className="coach-paragraph">
            Meet our dedicated team of coaches, each specializing in a unique
            area. From strength training to mindfulness, our coaches are
            passionate about guiding you to achieve your fitness goals. Get to
            know each coach and their expertise to enhance your fitness
            experience.
          </p>
        <div className="content">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_vkKeGJQYBgidBJFrRr9jKX1VtKj121tLVdVcXsBFmrHSOPe8_9gyLwM0YgHVPKzePg&usqp=CAU"
            alt="Fitness Image"
          />
        </div>
          <h1 className="title">Every day is a chance to become better</h1>
          <p>
            Transform your body and mind with our fitness programs. We believe in
            providing a holistic approach to health, focusing on both physical and
            mental well-being. Our experienced trainers and cutting-edge
            strategies are here to guide you on your journey to a healthier life.
          </p>
          <div className="box-container">
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Body and Mind
              </h3>
              <p>
                Achieve balance in your life by nurturing both your body and mind.
                Our programs are designed to promote overall well-being,
                encompassing physical fitness and mental strength.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Healthy Life
              </h3>
              <p>
                Embrace a healthy lifestyle that goes beyond just working out. We
                provide guidance on nutrition, habits, and sustainable practices
                to help you lead a fulfilling and healthy life.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Strategies
              </h3>
              <p>
                Our expert trainers employ effective strategies that are tailored
                to your fitness goals. We believe in a personalized approach to
                ensure you get the most out of your fitness journey.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Workout
              </h3>
              <p>
                Engage in invigorating workouts designed to challenge and inspire.
                Whether you're a beginner or an experienced fitness enthusiast,
                our diverse workout programs cater to all levels.
              </p>
            </div>
          </div>
          
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>

   
    </div>
  );
};

export default AboutUs;
