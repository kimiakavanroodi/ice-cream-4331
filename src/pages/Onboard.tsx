import { logRoles } from '@testing-library/react';
import React from 'react';
import '../styles/Onboard.css';
import WhiteLogo from '../assets/onboarding/whitelogo.svg';
import Person from '../assets/onboarding/Person.svg';
import FirstRec from '../assets/onboarding/firstRectangle.svg';
import MoneyLogo from '../assets/onboarding/money.svg';
import foodLogo from '../assets/onboarding/food.svg';
import styleLogo from '../assets/onboarding/Style.svg';
import backgroundImg from '../assets/onboarding/backgroundimg.svg';
import { ProfileService, UserRole } from '../networking/profiles/ProfileService';
import { UploadPortfolioModal } from '../components/portfolio/UploadPortfolioModal';


export const OnBoard = ({...restProps}) => { 
  const [count, setCount] = React.useState(0);
  const [portfolioModal, setPortfolioModal] = React.useState(false);
  const [interests, setInterests] = React.useState([
    "less than 18", "$25 - $49", "Casual/Everyday", "nice"
  ]);

  const submitProfile = async() => {

    const role = await ProfileService.getUserRole() 

    console.log(role)

    if (role.role === "stylist") {
      setPortfolioModal(true)

    } else {
      const style_seeker_profile = {
        interests: interests
      }
      await ProfileService.createStyleSeekerProfile(style_seeker_profile).then((profile) => {
        if (profile.profile != null) {
          return window.location.href = '/feed'
        } else {
          alert('Something went wrong')
        }
      })
    }

  };

  //style={{ height: "100vh", background: "linear-gradient(140.42deg, #101214 11.23%, #131516 26.36%, #16161A 47.52%, #101214 66.88%, #1D1D23 84.53%)"}}
  return ( 
  <div style={{ height: "100vh", backgroundImage: `url(${backgroundImg})` }}> 
    <div className="OnboardContainer"> 
        <div className="OnboardCard">
          <div className="WhiteLogoContainer">
            <img src={WhiteLogo}/>           
          </div>
          <div className="iconsContainer">
             {
               count==0?
               <div className="personContainer">
                <img src={Person}/>
              </div>
              :
              <div className="personContainerOpac">
                <img src={Person}/>
              </div>
              }
              
            {
              count==0?
              <div className="AgeContainer">
                <div className="Age">
                  age
                </div>
              </div>
              :
              <div className="AgeContainer">
                <div className="AgeOpacity">
                  age
                </div>
              </div>
            }   
            {
              count!=1?
              <div className="RecOneContainerOpac">
              <img src={FirstRec}/>
              </div>
              :
              <div className="RecOneContainer">
              <img src={FirstRec}/>
              </div>
              }
              
              {
                count!=1?
                <div className="moneyContainerOpac">
                <img src={MoneyLogo}/> 
                </div>
                : 
                <div className="moneyContainer">
                <img src={MoneyLogo}/> 
                </div>
              }
              
              
              {
                count!=1?
                <div className="budgetOpacity">
                budget
                </div>
                :
                <div className="budget">
                budget
                </div>
              }

              {
                count !=2?
                <div className="RecOneContainerOpac">
                <img src={FirstRec}/>
                </div>
                :
                <div className="RecOneContainer">
                <img src={FirstRec}/> 
                </div>
              }

              {
                count !=2?
                <div className="foodContainerOpac">
                <img src={foodLogo}/> 
                </div>
                :
                <div className="foodContainer">
                <img src={foodLogo}/> 
                </div>
              }

              {
                count !=2?
                <div className="maturityOpacity">
                 clothing
                </div>
                :
                <div className="maturity">
                clothing
                </div>
               }
               
              {
                count !=3?
                <div className="RecOneContainerOpac">
                  <img src={FirstRec}/>
                </div>
                :
                <div className="RecOneContainer">
                  <img src={FirstRec}/>
                </div>
              }
              

              {
                count !=3?
              <div className="foodContainerOpac">
                <img src={styleLogo}/> 
              </div>
              :
              <div className="foodContainer">
                <img src={styleLogo}/> 
              </div>
              }
              
              {
                count != 3?
                <div className="styleOpacity">
                  style
                </div>
               :
                <div className="style">
                  style
                </div>
              }
                       
          </div>

          {
            count ==0? 
              <div className="questionBody">
                <div className="questions">
                  <h3>
                    What is your age group?
                  </h3>
                </div>
              </div>
              : null
          }

          {
            count ==1?
              <div className="questionBody">
                <div className="questions">
                  <h3>
                    What does your budget look like?
                  </h3> 
                </div>
              </div>
              : null
          }

          {
            count ==2?
            
              <div className="questionBody">
                <div className="questions">
                  <h3>
                    What type of clothing are you interested in?
                  </h3>
                  
                </div>
            </div>
              : null

          }

          {
            count ==3?
            
              <div className="questionBody">
                <div className="questions">
                  <h3>
                    How would you describe your style?
                  </h3>
                </div>
            </div>
              : null

          }
          {

          count ==0?
          <div className="dropdownBody">
          
            <select className= "select">
              <option value=" ">Select an age group</option>
              <option value="less than 18"> less than 18</option>
              <option value="18 to 34">18 to 34</option>
              <option value="35 to 50">35 to 50</option>
              <option value="51 to 69">51 to 69</option>
              <option value="greater than 69"> greater than 69</option>
            </select>
            

          </div>
          :null
          }

{

            count ==1?
            <div className="dropdownBody">

              <select className= "select">
                <option value=" ">Select a budget range</option>
                <option value="$25 - $49"> $25 - $49</option>
                <option value="$101 - $199">$101 - $199</option>
                <option value="$200 - $299">$200 - $299</option>
                <option value="$300 - $399">$300 - $399</option>
                <option value="$500 - $999"> $500 - $999</option>
                <option value="$1000+"> $1000+</option>
                
              </select>
              

            </div>
            :null
            }

            {

              count ==2?
              <div className="dropdownBody">

                <select className= "select">
                  <option value=" ">Select a type of clothing</option>
                  <option value="Casual/Everyday"> Casual/Everyday</option>
                  <option value="Work">Work</option>
                  <option value="Dressy">Dressy</option>
                  <option value="Seasonal Update">Seasonal Update</option>
                  <option value="Special Event"> Special Event</option>
                </select>
  

                </div>
                :null
            }
            
            {

            count ==3?
            <div className="dropdownBody">

              <select className= "select">
                <option value=" ">Select a fashion style</option>
                <option value="Vintage"> Vintage</option>
                <option value="Artsy">Artsy</option>
                <option value="Casual">Casual</option>
                <option value="Chic">Chic</option>
                <option value="Trendy"> Trendy</option>
                <option value="Vibrant"> Vibrant</option>
                <option value="Sporty"> Sporty</option>
              </select>
              

            </div>
            :null
            }

          
    
            {/* {
              count == 0?
              <div className="InnerBody">
              <input value={data.name} placeholder='enter a name' onChange={(text) => setData({...data, ["name"]: text.target.value})}/>
  
            </div>
              : null
            }  */}

            
              
            
           

          <div className="ButtonsContainer">
             <button className="BackBtn" onClick={(events) => { 
               if (count != 0) {
                setCount(count - 1)
               }
              } }>
               Back
               </button> 
               
               { count==3?
                 <button className="finishBtn" onClick={(events) => {
                  submitProfile()
                  if (count < 3 ) {
                   setCount(count + 1)
                  }
                } }>
                 Finish
                </button>
                : 
                <button className="NextStepBtn" onClick={(events) => {
                  if (count < 3 ) {
                   setCount(count + 1)
                  }
                } }>
                 Next Step
                </button>
                }

                <UploadPortfolioModal interests={interests} showModal={setPortfolioModal} modal={portfolioModal}   />
               
               
          </div>
        </div>
      </div>
  </div>

);
  
  
}


