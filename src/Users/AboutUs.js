import React from 'react';
import classes from './AboutUs.module.css';
import p from '../images/myimg.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';


const AboutUs = () => {
  return (
    <div className={classes.container}>
      <h1>About Us</h1>
      <p>Welcome to our website! We are a group of college students who have created this platform to help fellow students find the perfect paying guest accommodation.
                 We understand how challenging it can be to find safe and affordable accommodation when you are a student, and we wanted to create a solution to make the process
                  easier.
                  </p>
                  <p>

Our team is made up of students from different backgrounds, studying different subjects, but with a common
 goal in mind - to create a user-friendly platform that provides reliable and up-to-date information about 
 paying guest options in your city. We have worked hard to create a website that is easy to navigate, with 
 filters that allow you to search for accommodation based on your preferences, such as location, budget, and 
 amenities.
</p>
<p>
Our team has personally visited and verified the listings on our website, to ensure that they meet our high standards 
of safety and comfort. We also encourage our users to leave reviews and ratings, to help other students make informed 
decisions about their accommodation.
</p>
<p>
We know that being a student can be stressful, and finding the right place to live can mak
e a huge difference in your overall experience. That's why we are passionate about helping 
you find the perfect paying guest accommodation, so that you can focus on your studies and 
enjoy your time as a student.

Thank you for choosing our platform, and we hope that it helps you find the perfect home away from home.
 If you have any questions or feedback, please do not hesitate to contact us.</p>
      
      <div className={classes.card}>
        <img className={classes.photo} src={p} alt="Harpreet Mansata" />
        <div>
          <h2 className={classes.name}>Harpreet Mansata</h2>
          <p className={classes.role}>CEO</p>
          <div className={classes.social}>
          <a href="https://www.facebook.com/harpreet.mansata/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/hp__thakkar/"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <img className={classes.photo}  alt="Jane Doe" />
        <div>
          <h2 className={classes.name}>Jane Doe</h2>
          <p className={classes.role}>CTO</p>
          <div className={classes.social}>
          <a href="https://www.facebook.com/harpreet.mansata/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/hp__thakkar/"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
