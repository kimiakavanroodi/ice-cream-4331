import React from "react";
import "../../styles/chat/chat-page.css"

import ClothingHanger from "../../assets/chat/clothing-hanger.svg";
import CredCard from "../../assets/chat/credit-card.svg";
import Calendar from "../../assets/chat/calendar-today.svg";
import VideoChat from "../../assets/chat/video-cam.svg";


export const ChatPage = ({...restProps} : any) => {

    return (
        <div className="chat-page-background">

            <div className="chat-page-container">
                
                <div className="chat-page-centerpiece">

                    <div className="chat-page-user-list-container">

                        <div className="chat-page-user-list">

                            <div> hey </div>
                            <div> hey </div>
                            <div> hey </div>


                        </div>


                    </div>

                    <div className="chat-page-main-body">

                        <div className="chat-page-top-banner">

                            <div className="chat-page-top-banner-left-container">

                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <div className="chat-page-top-container-left-container-user-icon-bg">
                                        <img className="chat-page-top-container-left-container-user-icon" style={{borderRadius: '100%'}} src={require('../../assets/chat/user-icon-sample.jpg')} />
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

                                <div>
                                    I<img src={require("../../assets/chat/vector.svg")} />
                                </div>

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