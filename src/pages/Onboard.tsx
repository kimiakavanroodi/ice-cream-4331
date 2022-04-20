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

interface key_values {
  age: string;
  money: string;
  clothing: string;
  style: string;
}

export const OnBoard = ({...restProps}) => { 
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState({
    age: "", money: "0", clothing: "", style: ""
  });

  const onChangeDataHandler = (key: any, value: any) => {
    const copiedObject = {...data};
    const str = key as string;

    copiedObject[str as keyof key_values] = value;
    setData(copiedObject);
  };

  console.log(data)

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
                  <h5>
                    What is your age group?
                  </h5>
                </div>
              </div>
              : null
          }

          {
            count ==1?
              <div className="questionBody">
                <div className="questions">
                  <h5>
                    What does your budget look like?
                  </h5> 
                </div>
              </div>
              : null
          }

          {
            count ==2?
            
              <div className="questionBody">
                <div className="questions">
                  <h5>
                    What type of clothing are you interested in?
                  </h5>
                  
                </div>
            </div>
              : null

          }

          {
            count ==3?
            
              <div className="questionBody">
                <div className="questions">
                  <h5>
                    How would you describe your style?
                  </h5>
                </div>
            </div>
              : null

          }
          {

          count ==0?
            <div className="dropdownBody">
            
              <select value={data['age']} onChange={(event) => onChangeDataHandler('age', event.target.value)} className= "select">
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

          <select value={data['money']} onChange={(event) => onChangeDataHandler('money', event.target.value)} className= "select">
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

          <select value={data['clothing']} onChange={(event) => onChangeDataHandler('clothing', event.target.value)} className= "select">
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

            <select value={data['style']} onChange={(event) => onChangeDataHandler('style', event.target.value)} className= "select">
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
               
               
          </div>
        </div>
      </div>
  </div>

);
  
  
}


