import React from "react";
import "../../../styles/chat/chat-page.css"

import ClothingHanger from "../../../assets/chat/clothing-hanger.svg";
import SampleUserIcon from "../../../assets/chat/sample-user0-icon.svg";
import FloatingDiamond from "../../../assets/chat/floating-diamond.svg"
import { FadeIn } from 'ts-react-fade';

import { CalendarPopover } from "../components/popover/CalendarPopover";
import { OutfitModal } from "../components/modals/OutfitModal";
import { MainHeader } from "../../../components/layout/header/MainHeader";
import { BgLayout } from "../../../components/layout/BgLayout"
import { ChatService } from "../../../networking/chat/ChatService";
import { AllChats, Chat } from "../../../networking/types/ChatTypes";
import { io } from "socket.io-client"
import { CalendarInviteItem } from "../components/messages/CalendarInviteItem";
import { MessageCard } from "../components/messages/MessageCard";
import { ProfileService } from "../../../networking/profiles/ProfileService";
import { PostMessageText } from "../components/messages/PostMessageText";
import { OutfitMessage } from "../components/messages/OutfitMessage";

let socket = io("http://localhost:8080")

export const ChatPage = ({...restProps} : any) => {
    const [outfitModal, isOutfitModal] = React.useState(false)
    const [chatId, setCurrChat] = React.useState({profile:  { name : "" }} as unknown);
    const [chats, setAllChats] = React.useState([] as unknown as AllChats[]);
    const [loading, isLoading] = React.useState(true)
    const [allItems, setItems] = React.useState([] as unknown)
    const [uid, setUID] = React.useState("")

    const getAllChats = async() => {
        await ChatService.getAllChat().then((chatsInfo) => {
            if (chatsInfo !== null) {
                setAllChats(chatsInfo as unknown as AllChats[])
                    // @ts-ignore: Unreachable code error
                getChat(chatsInfo[0].chat_id)
                
            }
        })
    };

    const getUID = async() => {
        await ProfileService.getUID().then((uid: any) => {
            setUID(uid)
        })
    };

    const sortChat = (chat: any) => {
        // @ts-ignore: Unreachable code error
        const totalSentItems = [...chat.messages.map(v => ({...v, type: "message"})), ...chat.calendar_invites.map(v => ({...v, type: "calendar_invite"})), ...chat.outfits.map(v => ({...v, type: "outfits"}))];
        // @ts-ignore: Unreachable code error
        totalSentItems.sort((a, b) => (new Date(b.date_time) - new Date(a.date_time)))
                // @ts-ignore: Unreachable code error
        setItems(totalSentItems)
    };

    const updateChat = (value: any) => {
        // @ts-ignore: Unreachable code error
        const copiedObject = value
                // @ts-ignore: Unreachable code error
        setCurrChat(copiedObject)
        sortChat(copiedObject)

    };

    const disconnectSocket = async() => {
        return socket.close()
    };

    const getChat = async(chatId : string) => {
        isLoading(true)
        disconnectSocket().then(() => {
            socket.connect();
            socket.emit("chats", `chats-${chatId}`);
        })
        await ChatService.getChat(chatId).then((chat) => {
            if (chat != null) {
                setCurrChat(chat)
                isLoading(false)
                sortChat(chat)
            }
        })
    }

    React.useEffect(() => {

        getAllChats();
        getUID()

    }, [])


    // @ts-ignore: Unreachable code error
    React.useEffect(() => {
            // @ts-ignore: Unreachable code error
          
        socket.on('UPDATE_MESSAGE', (data) => {
                        // @ts-ignore: Unreachable code error
            updateChat(data)
        })

        socket.on('UPDATE_CALENDAR', (data) => {
                        // @ts-ignore: Unreachable code error
            updateChat(data)
        })

        socket.on('UPDATE_OUTFIT', (data) => {
            // @ts-ignore: Unreachable code error
            console.log(data)
        updateChat(data)
        })

        return () => {
            socket.close();
          };

          
    }, []);

    console.log(chatId)
   
    return (
        <div className="chat-page-background">

            {outfitModal ? 
                                                        // @ts-ignore: Unreachable code error
                    <OutfitModal chat_id={chatId._id} setOpen={isOutfitModal} />
                : null
            }

            <MainHeader />
            
           <BgLayout title="All Chats" subtitle="Let's look at your chat." />
           
           <div style={{top: '276px', height: '500px'}} className="chat-page--middle-section"></div>

            <div className="chat-page-container">
                
                <div className="chat-page-centerpiece">

                {!loading?
                
                <>
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
                                        {                                            // @ts-ignore: Unreachable code error
                                        <img className="chat-page-top-container-left-container-user-icon" style={{borderRadius: '100%', position: "absolute", width: '55px', height: '55px', top: '10px', left: '8px'}} src={chatId.profile.profile_img? chatId.profile.profile_img: ""} />
                                    }
                                    </div>
                                </div>

                                <div className="chat-page-top-banner-left-container--p">
                                    <p className="chat-page-top-banner-left-container--name"> {
                                            // @ts-ignore: Unreachable code error
                                    chatId.profile.name
                                    } </p>
                                </div>

                            </div>


                            <div className="chat-page-top-banner-right-container">

                                <div className="chat-page-top-banner-right-container-icons">
                                    {// @ts-ignore: Unreachable code error
                                    <CalendarPopover chat_calendars={chatId.calendar_invites} chat_id={chatId._id} /> }
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

                            {
                                    // @ts-ignore: Unreachable code error
                    
                                allItems.map((item, idx) => {
                                        // @ts-ignore: Unreachable code error
                                    console.log(chatId.profile.cost)
                                    if (item.type === "calendar_invite") {
                                        return <CalendarInviteItem 
                                            title={item.title}
                                            location={item.location}
                                            description={item.description}
                                            profile_img={item.sender.profile_pic}
                                            start_date={item.start_date}
                                            end_date={item.end_date}
                                            />
                                        
                                    } else if (item.type === "message") {
                                        return  <MessageCard
                                        uid={uid}
                                        sender={item.sender}
                                        description={item.message}
                                        date={item.date_time}
                                        />
                                    } else {
                                    
                                        return  <OutfitMessage
                                        uid={uid}
                                        id={item._id}
                                        // @ts-ignore: Unreachable code error
                                       
                                        cost={chatId.profile.cost ? chatId.profile.cost : 0}
                                        // @ts-ignore: Unreachable code error
                                        chat_id={chatId._id}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        has_seen={item.has_paid}
                                        pieces={item.pieces}
                                        />
                                    }
                                })
                            }
                        
                        </div>

                    
                    {// @ts-ignore: Unreachable code error
                    <PostMessageText chatId={chatId._id} />}

                        
                    </div>
                    </>
                : null}
                </div>

            </div>
        </div>
    )
    
}