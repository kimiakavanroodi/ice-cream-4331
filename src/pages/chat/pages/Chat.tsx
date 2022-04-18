import React from "react";
import "../../../styles/chat/chat-page.css"

import ClothingHanger from "../../../assets/chat/clothing-hanger.svg";
import SampleUserIcon from "../../../assets/chat/sample-user0-icon.svg";
import FloatingDiamond from "../../../assets/chat/floating-diamond.svg"

import { CalendarPopover } from "../components/popover/CalendarPopover";
import { OutfitModal } from "../components/modals/OutfitModal";
import { MainHeader } from "../../../components/layout/header/MainHeader";
import { BgLayout } from "../../../components/layout/BgLayout"
import { ChatService } from "../../../networking/chat/ChatService";
import { AllChats, Chat } from "../../../networking/types/ChatTypes";
import { ProfileService, UserRole } from "../../../networking/profiles/ProfileService";
import { io } from "socket.io-client"

let socket = io("http://localhost:8080")

export const ChatPage = ({...restProps} : any) => {
    const [outfitModal, isOutfitModal] = React.useState(false)
    const [chatId, setCurrChat] = React.useState({profile:  { name : "" }} as unknown);
    const [chats, setAllChats] = React.useState([] as unknown as AllChats[]);
    const [role, setRole] = React.useState("" as unknown as UserRole);
    const [message, setMessage] = React.useState("")

    const getAllChats = async() => {
        await ChatService.getAllChat().then((chatsInfo) => {
            if (chatsInfo !== null) {
                setAllChats(chatsInfo as unknown as AllChats[])
                    // @ts-ignore: Unreachable code error
                getChat(chatsInfo[0].chat_id)
                
            }
        })
    };

    const updateChat = (key: string, value: any) => {

    };

    const getRole = async() => {
        await ProfileService.getUserRole().then((role) => {
            setRole(role.role as unknown as UserRole)
        })
    };

    const getChat = async(chatId : string) => {
        await ChatService.getChat(chatId).then((chat) => {
            if (chat != null) {
                setCurrChat(chat)
            }
        })
    }

        // @ts-ignore: Unreachable code error
    React.useEffect(() => {

                // @ts-ignore: Unreachable code error
        socket.on('connect', (ok) => { 
            console.log('love')

            socket.emit("chats", "chats-625c9e3a46889398cc7fb863");
          
            socket.on('UPDATE_CHAT', (data) => {
              console.log(data.messages)
            })
          });
          
    }, [socket]);



    React.useEffect(() => {

        getAllChats();

    }, [])

    console.log(chats)
   
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
                               {chats.map((chat) => {
                                   return <img onClick={() => getChat(chat.chat_id)} src={chat.profile.profile_img} className="profile-pic-url" />

                               })}
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
                                    <p className="chat-page-top-banner-left-container--name"> {
                                            // @ts-ignore: Unreachable code error
                                    chatId.profile.name
                                    } </p>
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

                            <br></br>
                            <br></br>
                            <br></br>

                            <div style={{marginBottom: 20}} className="gradient-card-outfit-row">
                                <div className="purple-gradient-add-to-calendar-card">
                                    <div className="gradient-card-outfit-roww">

                                        <div className="gradient-white-top-card-outfit"></div>
                                        <button style={{width: 150}} className="payment-button"> + Google Calendar </button>

                                        <img className="purple-gradient-add-to-calendar-user-icon" src="https://styles.redditmedia.com/t5_206tw0/styles/profileIcon_snoo9436956f-e57e-4bac-8f9f-d525e82406b9-headshot.png?width=256&height=256&crop=256:256,smart&s=976637d0b945aac26e7d625acbf5eabfa0a7f857" />
                                        
                                        <div style={{flex: 2, alignItems: "flex-start"}} className="gradient-card-outfit-column">
                                            <p className="purple-gradient-add-to-calendar-h1"> Rediscuss outfit ideas </p>
                                            <p className="purple-gradient-add-to-calendar-h2"> Tomorrow at 3:45 PM ET </p>
                                            <hr className="purple-gradient-add-to-calendar-hr" />
                                            <p className="purple-gradient-add-to-calendar-p"> looking through new portfolio photos & setting a time to discuss possible alternatives to the outfits currently send and offered. </p>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-card-outfit-row">
                                <div className="gradient-card-outfit">
                                    <div className="gradient-card-outfit-roww">
                                        <div style={{flex: 1, alignItems: "flex-end", marginRight: '15px', alignSelf: "normal"}} className="gradient-card-outfit-column">
                                           <img className="gradient-card-outfit-img blur" src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91oV4aPvNdL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png" />
                                        </div>

                                        <div className="gradient-white-top-card-outfit"></div>
                                        <button className="payment-button"> Pay Outfit </button>
                                        
                                        <div style={{flex: 2, alignItems: "flex-start"}} className="gradient-card-outfit-column">
                                            <p className="gradient-card-outfit-h1"> Casual outdoor outfit 1# </p>
                                            <p className="gradient-card-outfit-cost"> $143.21 total cost </p>
                                            <hr className="gradient-card-outfit-hr" style={{marginTop: '15px'}} />

                                            <p className="gradient-card-outfit-p"> looking through new portfolio photos & setting a time to discuss possible alternatives to the outfits currently send and offered. </p>        

                                            <p className="gradient-card-outfit-total-pieces"> 6 total pieces </p>                                
                                        </div>

                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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

                                <div className="" style={{paddingRight: 20}}>
                                    <button className="send-message-btn"> Send </button>
                                </div>
                            </div>
                           
                        </div>


                    </div>



                </div>


            </div>

         


        </div>
    )
    
}