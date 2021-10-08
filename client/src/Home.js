import React from 'react';
import './App.css';
import Vector from './frame-1@2x.svg';
import 'typeface-roboto';
import Vector2 from './frame@1x.svg'
import About from './About';
import AllCakes from './AllCakes';
import { Link } from 'react-router-dom'



function Home() {
  return (
    
    
      <div className="Home">
        <img src={Vector2}/>
        <div className="Rectangle2">
          <div className="Rectangle1">
            <div className="eclipse1"></div>
            <Link to="/login" className="text1"> Log In </Link>
            <div className="eclipse2"></div>
  
            <Link to="/aboutus" className="text2"> About Us </Link>
            <div className="eclipse3"></div>
         
            <Link to="/cakes" className="text3"> Cakes </Link>
            <div className="SamText">
            <p> Sam D. & Co.</p>
              <div className="Frame1">
                <img src={Vector}/>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}

export default Home;
