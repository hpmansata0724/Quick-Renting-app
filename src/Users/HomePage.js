import React from 'react';
import p1 from '../images/porperty1.jpg';
import p2 from '../images/property2.jpg';
import p3 from '../images/property3.jpg';
import p4 from '../images/property2.jpg';
import p5 from '../images/property5.jpg';
import p6 from '../images/property6.jpg';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to our Quick Renting</h1>
        <p>Find the best property at the most
           affordable rate around the city.</p>
      </div>

      <div className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-list">
          <div className="property">
           
           <img src={p1} alt="Property 5" />
            <div className="property-details">
              <h3>Rushang pg
                <h4>Address:: Falgun Society, 17, 
                    Commerce Six Rd, opp. Hanuman Temple, Roads, 
                    Navrangpura, Ahmedabad, Gujarat 38000</h4>
              </h3>

              <p>2 bed, 2 bath apartment in downtown</p>
              <p>Monthly rent: 8000</p>
            </div>
          </div>

          <div className="property">
          <img src={p2} alt="Property 5" />
            <div className="property-details">
              <h3>Sahil pg<h4>
              9, Harsiddha Park Society, Behind Kameshwar School,
               Ramdevnagar, Satellite, Ahmedabad, Gujarat 380015</h4></h3>
              <p>3 bed, 2 bath house in suburbs</p>
              <p>Monthly rent: 5000</p>
            </div>
            <div className="property">
            <img src={p3}/>
                <div className='property-details'>
                <h3>Kripal Homes<h4>
                2, 2nd Floor, Viram Arcade, Anand Nagar Cross Road,
                 Satellite, Ahmedabad, Gujarat 380015</h4></h3>
              <p>3 bed, 2 bath house in suburbs</p>
              <p>Monthly rent: 9000</p>  
                </div>
            </div>

            <div className="property">
                <img src={p4}></img>
                <div className='property-details'>
                <h3>Sonam Housing<h4>
                F 1, HJ House, Opposite Sangath Mall,
                 Motera Road, Motera, Ahmedabad, Gujarat 380005</h4></h3>
              <p>3 bed, 2 bath house in suburbs</p>
              <p>Monthly rent: 12,500</p>  
                </div>
            </div>

            <div className="property">
                <img src={p6}></img>
                <div className='property-details'>
                <h3>Shiv Homes<h4>
                F 1, HJ House, Opposite Sangath Mall,
                 Motera Road, Motera, Ahmedabad, Gujarat 380005</h4></h3>
              <p>3 bed, 2 bath house in suburbs</p>
              <p>Monthly rent: 8000</p>  
                </div>
            </div>

            <div className="property">
                <img src={p5}></img>
                <div className='property-details'>
                <h3>Shri Ram Housing<h4>
                - B/101, Siddharth Apartment, Near Shalby Hospital, S.G.
                 Road, Ahmedabad, Gujarat 380054
</h4></h3>
              <p>3 bed, 2 bath house in suburbs</p>
              <p>Monthly rent: 7000</p>  
                </div>
            </div>

            

            
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
