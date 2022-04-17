import React from "react";
import Logo from '../../../assets/chat/match-it-logo.svg'
import SearchIcon from '../../../assets/chat/search-icon.svg'

import HomeIcon from '../../../assets/header/home-icon.svg';
import MessageIcon from '../../../assets/header/message-icon.svg';
import { ProfileService, UserRole } from "../../../networking/profiles/ProfileService";


export const MainHeader = ({...restProps}: any) => {
    const [name, setName] = React.useState("")
    const [role, setRole] = React.useState({ role : "" } as UserRole)

    const getName = async() => {
        await ProfileService.getUserName().then((name) => {
            setName(name)
        })
    };

    const getRole = async() => {
        await ProfileService.getUserRole().then((role) => {
            setRole(role.role as unknown as UserRole)
        })

    };

    React.useEffect(() => {

        getName()
        getRole()

    }, [])

    return (
        <div className="match-it-header">

        <div className="match-it-header--top-left-corner">
            <div style={{marginRight: 0}} className="match-it-header--logo">
                <img src={Logo} />
            </div>

            <div className="header-vertical-gray-line"></div>

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

                <div className="menu-icon-row">
                    <img onClick={() => {
                        if (role.role == "stylist") {
                            window.location.href = '/dashboard'
                        } else {
                            window.location.href = '/feed'
                        }
                     }} style={{marginRight: 9}} src={HomeIcon} />
                    <img onClick={() => window.location.href = '/chat' } src={MessageIcon} />
                </div>

            </div>

            <div className="header-vertical-gray-line"></div>

            <div className="user-profile-header-row">
                <img className="user-profile-header-icon" src="https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_400_400/0/1607291489330?e=1655337600&v=beta&t=57XnUhGnnr9TT_xBXeaS_Jxsy33vuxdAa9Z8JanjoJw" />
                <p className="user-profile-header-name"> {name} </p>
            </div>

            <div style={{marginRight: 0}} className="header-vertical-gray-line"></div>

            
        </div>

    </div>
    )
}