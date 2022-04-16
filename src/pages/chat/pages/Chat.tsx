import React from "react";
import "../../../styles/chat/chat-page.css"

import ClothingHanger from "../../../assets/chat/clothing-hanger.svg";
import SampleUserIcon from "../../../assets/chat/sample-user0-icon.svg";
import FloatingDiamond from "../../../assets/chat/floating-diamond.svg"

import { CalendarPopover } from "../components/popover/CalendarPopover";
import { OutfitModal } from "../components/modals/OutfitModal";
import { MainHeader } from "../../../components/layout/header/MainHeader";
import { BgLayout } from "../../../components/layout/BgLayout"


export const ChatPage = ({...restProps} : any) => {
    const [outfitModal, isOutfitModal] = React.useState(false)

    return (
        <div className="chat-page-background">

            {outfitModal ? 
                    <OutfitModal setOpen={isOutfitModal} />
                : null
            }

            <MainHeader />
            
           <BgLayout title="All Chats" subtitle="Let's look at your chat." />
           
           <div style={{top: '276px', height: '500px'}} className="chat-page--middle-section"></div>

            <div className="chat-page-container">
                
                <div className="chat-page-centerpiece">

                    <div className="chat-page-user-list-container">

                        <div className="chat-page-user-list">

                            <div className="chat-page-user-list--item "> <img style={{width: '35px', filter: "drop-shadow(18px 20px 13px rgba(0, 0, 0, 0.94))"}} src={FloatingDiamond} /> </div>
                           
                           <div style={{overflowY: 'auto', height: '80vh'}}>
                                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} className="profile-pic-url" />

                                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} className="profile-pic-url" />

                                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} className="profile-pic-url" />
                                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} className="profile-pic-url" />

                                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} className="profile-pic-url" />

                                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} className="profile-pic-url" />
                            </div>

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
                                    <CalendarPopover /> 
                                </div>

                                <div onClick={() => isOutfitModal(true)} className="chat-page-top-banner-right-container-icons"> 
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
                            <div style={{justifyContent: "space-between"}} className="chat-page-message-text">

                                <div className="chat-page-input-box-padding ">
                                    <input className="write-a-message-placeholder" placeholder="Write a message..." />
                                </div>

                                <div style={{paddingRight: 20}}>
                                    <button> Send </button>
                                </div>
                            </div>
                           
                        </div>


                    </div>



                </div>


            </div>

         


        </div>
    )
    
}