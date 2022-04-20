import React from "react";
import { MessageService } from "../../../../networking/chat/messages/MessageService";

export const PostMessageText = ({chatId, ...restProps}: any) => {
    const [message, setMessage] = React.useState("")

    const createMessage = async() => {
        const messageBody = {
            message: message
        }

        return await MessageService.postMessage(chatId, messageBody).then(() => {
            setMessage("")
        })
    };


    return (
        <div className="chat-page-message-container">
            <div style={{justifyContent: "space-between"}} className="chat-page-message-text">
                <div className="chat-page-input-box-padding ">
                    <input value={message} onChange={(text) => setMessage(text.target.value)} className="write-a-message-placeholder" placeholder="Write a message..." />
                </div>
                
                <div className="" style={{paddingRight: 20}}>
                    <button onClick={createMessage} className="send-message-btn"> Send </button>
                 </div>
                 
                 </div>       
            </div>
    )
}