import React from 'react';
import { Header }from "../components/login/Header"
import "../styles/Login.css"
import whiteLogo from "../assets/login/whitelogo.svg";
export const Login = ({...restProps}) => 
{ 
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState({
    email : "", password: ""
  });
  console.log(count, data);
    return ( 
    <div style={{ height: "100vh", background: "linear-gradient(140.42deg, #101214 11.23%, #131516 26.36%, #16161A 47.52%, #101214 66.88%, #1D1D23 84.53%)"}}> 
        <div className="LogoContainer">
                    <img src={whiteLogo}/>
                </div>
            <div className="LoginContainer">
                <div className="LoginCard">
                    <div className="Loginfirsttext">
                        Login
                    </div>
                    <div className="Loginsecondtext">
                         become a user of match-it
                    </div>
                <div className="email">
                    Email
                </div>
                <div className="emailInput">
                    <input className="inputBox" value={data.email} placeholder='Please enter an email' onChange={(text) => setData({...data, ["email"]: text.target.value})}/>
    
                </div>

                <div className="email">
                    Password
                </div>
                <div className="emailInput">
                    <input className="inputBox" value={data.password} placeholder='Please enter a password' onChange={(text) => setData({...data, ["password"]: text.target.value})}/>
                </div>
                
                <div className="btnContainer">
                    <button className="loginBtn">
                        Log In
                    </button> 
                </div>
              
                    
                
                

                    

                </div>

            </div>

        <div/>    
    </div>     
    );
}