import React from "react";
import "../../styles/chat/chat-page.css"

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

                        </div>

                        <div className="chat-page-messages-body">

                                <div className="chat-page-text-recipient-container">
                                    <div className="chat-page-text-recipient">
                                        <p className="chat-page-text-recipient-message "> Unfortunately, I cannot change it from now. You could always schedule another session to change the outfits. </p>
                                        <p className="chat-page-text-recipient-date"> 10:42 AM </p>
                                    </div>
                                </div>

                                <div className="chat-page-text-sender-container">
                                    <div className="chat-page-text-recipient">
                                        <p className="chat-page-text-recipient-message "> Unfortunately, I cannot change it from now. You could always schedule another session to change the outfits. </p>
                                        <p className="chat-page-text-recipient-date"> 10:42 AM </p>
                                    </div>
                                </div>

                            <div className="chat-page-text-recipient">
                                <p className="chat-page-text-recipient-message "> Unfortunately, I cannot change it from now. You could always schedule another session to change the outfits. </p>
                                <p className="chat-page-text-recipient-date"> 10:42 AM </p>
                            </div>

                            <div className="">

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
                                    Icon
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