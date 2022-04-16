import React from "react";
import Logo from '../../../assets/chat/match-it-logo.svg'
import SearchIcon from '../../../assets/chat/search-icon.svg'


export const MainHeader = ({userInfo}: any, {...restProps}) => {

    return (
        <div className="match-it-header">

        <div className="match-it-header--top-left-corner">
            <div className="match-it-header--logo">
                <img src={Logo} />
            </div>
            <div style={{position: "relative"}}>
                <div style={{position: "absolute", top: '10px', left: '15px'}}> <img src={SearchIcon} /> </div>
                <div>
                    <input className="match-it-header--input" placeholder="Search for chats & anything you want." />
               </div>
            </div>

        </div>

        <div className="match-it-header--top-right-corner">
            <div className="match-it-header--top-right-corner-menu">
                <div className="match-it-header--top-right-corner-menu--item">
                    
                </div>
                <div>
                    asdas
                </div>
            </div>

            <div>
                Kimia K.
            </div>

            
        </div>

    </div>
    )
}