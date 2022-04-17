import React from 'react';
import { Header }from "../components/login/Header"
import "../styles/Login.css"
import colorLogo from "../assets/login/colorLogo.svg";
import background from "../assets/login/signupBackground.svg";
import { ProfileService } from '../networking/profiles/ProfileService';
import { CardUploadModal } from '../components/card/CardUploadModal';

export const Login = ({...restProps}) => { 
    const [login, setLogin] = React.useState(true)
    const [steps, setSteps] = React.useState(0)
    const [data, setData] = React.useState({
        email : "", password: ""
    });
    const [new_user_data, setNewData] = React.useState({
        email: "", password: "", name: "", age: "", role: "", profile_img: ""
    });

    const onLogin = async() => {
        if (data.email === "" || data.password === "") return;

        return await ProfileService.loginFlow(data.email, data.password)
    };

    const onSignUp = async() => {
        await ProfileService.createAccount(new_user_data).then(async(resp) => {
            if (resp) {
                await ProfileService.loginFlow(new_user_data.email, new_user_data.password).then(() => {
                    setSteps(steps + 1)
                })
            }
        })
    };

    const resetValues = () => {
        setData({
            email : "", password: ""
        });
        setNewData({
            email: "", password: "", name: "", age: "", role: "", profile_img: ""
        })
    };

    return ( 
    <div className ="login-background" style={{ height: "100vh", backgroundImage: `url(${background})` }}> 
        <div className="LogoContainer">
                    <img src={colorLogo}/>
                </div>

                <div className="LoginContainer">
                        <div className="LoginCard">
                    { login ?
                            <>
             
                                <div className="Loginfirsttext">
                                    Login
                                </div>
                                <div className="Loginsecondtext">
                                    become a user of match-it
                                </div>
                            <div style={{paddingTop: 20}} className="email">
                                Email
                            </div>
                            <div className="emailInput">
                                <input className="inputBox" value={data.email} placeholder='Please enter an email' onChange={(text) => setData({...data, ["email"]: text.target.value})}/>
                
                            </div>

                            <div style={{paddingTop: 20}} className="email">
                                Password
                            </div>
                            <div className="emailInput">
                                <input className="inputBox" value={data.password} placeholder='Please enter a password' onChange={(text) => setData({...data, ["password"]: text.target.value})}/>
                            </div>
                            
                            <div className="btnContainer">
                                <button onClick={onLogin} className="loginBtn">
                                    Log In
                                </button> 
                            </div>
                            <div className="noAccountContainer">
                            <div className="noAccount">
                                Don't have an account? 
                            </div>
                            <div onClick={(event) => { setLogin(false); resetValues() }} className="noAccountSign">
                                   Sign up
                            </div>
                            </div>
                                
                            
                            </>
                  
                    
            : 

            <>
    
                { steps === 0 ? <>
                    <div className="Loginfirsttext"> Sign-Up </div>
                <div className="Loginsecondtext"> become a user of match-it </div>

                    <div  style={{paddingTop: 20}} className="email"> Email </div>
                    <div className="emailInput"> <input className="inputBox" value={new_user_data.email} placeholder='Please enter an email' onChange={(text) => setNewData({...new_user_data, ["email"]: text.target.value})}/> </div>

                    <div style={{paddingTop: 20}} className="email"> Password </div>
                    <div className="emailInput"> <input className="inputBox" value={new_user_data.password} placeholder='Please enter a password' onChange={(text) => setNewData({...new_user_data, ["password"]: text.target.value})}/> </div>

                    <div style={{paddingTop: 20}} className="email"> Profile Picture </div>
                    <div className="emailInput"> <input className="inputBox" value={new_user_data.profile_img} placeholder='Please enter a link to your profile picture' onChange={(text) => setNewData({...new_user_data, ["profile_img"]: text.target.value})}/> </div>

                    <div style={{paddingTop: 20}} className="email"> Name </div>
                    <div className="emailInput"> <input className="inputBox" value={new_user_data.name} placeholder='Please enter a name' onChange={(text) => setNewData({...new_user_data, ["name"]: text.target.value})}/> </div>

                    <div className="sign-up-group-row">
                        <div style={{flex: 2}} className="sign-up-group-column">
                            <div style={{paddingTop: 20, marginRight: 10, flex: 3}} className="email"> Role </div>
                            <div className="emailInput"> <input className="inputBox" value={new_user_data.role} placeholder='Please enter a role' onChange={(text) => setNewData({...new_user_data, ["role"]: text.target.value})}/> </div>
                        </div>

                        <div style={{flex: 1}} className="sign-up-group-column">
                            <div style={{paddingTop: 20}} className="email"> Age </div>
                            <div className="emailInput"> <input type="number" className="inputBox" value={new_user_data.age}  onChange={(text) => setNewData({...new_user_data, ["age"]: text.target.value})}/> </div>
                        </div>
                        
                    </div>
                    <div className="signupbtnContainer">
                            <button onClick={onSignUp} className="signupBtn">
                                Next Step
                            </button>
                        </div>

                        <div className="noAccountContainer">
                        <div className="noAccount">
                                Have an account? 
                        </div>
                        <div  onClick={(event) => { setLogin(true); resetValues() }} className="noAccountSign">
                                Login
                        </div>
                    </div>
                
                    </>
                : 
                <>
                <div className="Loginfirsttext"> Add your Card </div>
                <div className="Loginsecondtext"> Enter the details of your card to continute </div>
                <br />

                <div className="card-button-row-container">
                    <CardUploadModal />
                </div>

                </>
                
                }
               


                </>
            }

            </div>
        </div>
        
        <div/>    
    </div>     
    );
}