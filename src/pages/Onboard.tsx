import { logRoles } from '@testing-library/react';
import React from 'react';
import '../styles/Onboard.css';
import WhiteLogo from '../assets/onboarding/whitelogo.svg';


function OnBoard() {
  
  return ( 
  <div style={{height: "100vh", background: "linear-gradient(140.42deg, #101214 11.23%, #131516 26.36%, #16161A 47.52%, #101214 66.88%, #1D1D23 84.53%)"}}>
      <div className="OnboardContainer"> 
        <div className="OnboardCard">
          <div className="WhiteLogoContainer">
            <img src={WhiteLogo}/>            
          </div>
          <div className="ButtonsContainer">
             <button className="BackBtn">
               Back
               </button> 
               <button className="NextStepBtn">
                Next Step
               </button>
          </div>
        </div>
      </div>
  </div>

);
  
  
}

export default OnBoard;
