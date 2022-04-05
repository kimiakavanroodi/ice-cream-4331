import React from "react";
import "../../styles/chat/chat-page.css"

import ClothingHanger from "../../assets/chat/clothing-hanger.svg";
import CredCard from "../../assets/chat/credit-card.svg";
import Calendar from "../../assets/chat/calendar-today.svg";
import VideoChat from "../../assets/chat/video-cam.svg";
import SampleUserIcon from "../../assets/chat/sample-user0-icon.svg";
import File from "../../assets/chat/attatch-file.svg"

import FloatingDiamond from "../../assets/chat/floating-diamond.svg"
import PinkDiamond from "../../assets/chat/pink-diamond.svg"
import Logo from '../../assets/chat/match-it-logo.svg'
import SearchIcon from '../../assets/chat/search-icon.svg'

export const ChatPage = ({...restProps} : any) => {

    return (
        <div className="chat-page-background">

            <div className="match-it-header">

                <div className="match-it-header--top-left-corner">
                    <div className="match-it-header--logo">
                        <img src={Logo} />
                    </div>
                    <div style={{position: "relative"}}>
                        <div style={{position: "absolute", top: '15px', left: '15px'}}> <img src={SearchIcon} /> </div>
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

            <br></br>

            <div className="chat-page--top-section"></div>
            <div className="chat-page--middle-section"></div>
            <div className="chat-page--last-section"></div>

            <div className="chat-page-header-container">

                <p className="chat-page-header--title"> All Chats <span style={{marginLeft: '13px', mixBlendMode: "color-dodge"}}> <img src={PinkDiamond} /> </span> </p>
                <p className="chat-page-header--subtitle"> Let’s look at your chats. </p>


            </div>


            <div className="chat-page-container">
                
                <div className="chat-page-centerpiece">

                    <div className="chat-page-user-list-container">

                        <div className="chat-page-user-list">

                            <div className="chat-page-user-list--item "> <img style={{width: '35px', filter: "drop-shadow(18px 20px 13px rgba(0, 0, 0, 0.94))"}} src={FloatingDiamond} /> </div>
                           
                            <div className="chat-page-user-list--item "> hey </div>
                            
                            <div className="chat-page-user-list--item "> hey </div>

                        </div>


                    </div>

                    <div className="chat-page-main-body">

                        <div className="chat-page-top-banner">

                            <div className="chat-page-top-banner-left-container">

                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <div className="chat-page-top-container-left-container-user-icon-bg">
                                        <img className="chat-page-top-container-left-container-user-icon" style={{borderRadius: '100%', position: "absolute", top: '10px', left: '8px'}} src={SampleUserIcon} />
                                    </div>
                                </div>

                                <div className="chat-page-top-banner-left-container--p">
                                    <p className="chat-page-top-banner-left-container--name"> Jason Times </p>
                                    <p className="chat-page-top-banner-left-container--last-seen"> Last seen 16 minutes ago </p>
                                </div>

                            </div>


                            <div className="chat-page-top-banner-right-container">

                                <div className="chat-page-top-banner-right-container-icons"> 
                                    <img src={Calendar} />
                                </div>

                                <div className="chat-page-top-banner-right-container-icons"> 
                                    <img src={VideoChat} />
                                </div>          
                                
                                <div className="chat-page-top-banner-right-container-icons"> 
                                    <img src={CredCard} />
                                </div>

                                <div className="chat-page-top-banner-right-container-icons"> 
                                    <img src={ClothingHanger} />
                                </div>

                            </div>

                        </div>

                        <div className="chat-page-messages-body">

                        <div className="chat-page-text-sender-container">
                                <div className="chat-page-text-sender">
                                    <p className="chat-page-main-text-sender"> Unfortunately, I cannot change it from now. You could always schedule another session to change the outfits. </p>
                                    <p className="chat-page-text-sender-date"> 10:42 AM </p>
                                </div>
                            </div>
                            

                                <div className="chat-page-text-recipient-container">
                                    <div className="chat-page-text-recipient">
                                        <p className="chat-page-text-recipient-message "> is it possible to change some of the outfits now? I have new inspirational photos that can help out. </p>
                                        <p className="chat-page-text-recipient-date"> 9:32 AM </p>
                                    </div>
                                </div>

                                <div className="chat-page-text-recipient-container">
                                    <div className="chat-page-text-recipient">
                                        <p className="chat-page-text-recipient-message "> hey, is there any update with the outfits? </p>
                                        <p className="chat-page-text-recipient-date"> 10:42 AM </p>
                                    </div>
                                </div>

                            <div className="chat-page-large-date-container">
                                <div className="chat-page-date-background"> 
                                    <p className="chat-page-date--text"> March 15 </p>
                                </div>
                            </div>
                            
                            <div className="chat-page-text-sender-container">
                                <div className="chat-page-text-sender">
                                    <p className="chat-page-main-text-sender"> Hey, just an update: I have created the last outfit. I’ll upload it later in the chat tomorrow night. </p>
                                    <p className="chat-page-text-sender-date"> 5:32 PM </p>
                                </div>
                            </div>

                            <div className="chat-page-text-sender-container">
                                <div className="chat-page-text-sender">
                                    <p className="chat-page-main-text-sender"> Great! I love hearing that. </p>
                                    <p className="chat-page-text-sender-date"> 5:30 PM </p>
                                </div>
                            </div>

                            <div className="chat-page-text-recipient-container">
                                <div className="chat-page-text-recipient">
                                    <p className="chat-page-text-recipient-message ">Love the second outfit. it looks amazing - cannot wait to get it. </p>
                                    <p className="chat-page-text-recipient-date"> 3:42 PM </p>
                                </div>
                            </div>


                        </div>

                    
                        <div className="chat-page-message-container">
                            <div className="chat-page-message-text">

                                <div className="chat-page-input-box-padding ">
                                    <input className="write-a-message-placeholder" placeholder="Write a message..." />
                                </div>
                                


                            </div>
                        </div>


                    </div>



                </div>


            </div>


        </div>
    )
    
}