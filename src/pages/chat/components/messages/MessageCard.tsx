import React from "react"
import { ProfileService } from "../../../../networking/profiles/ProfileService"

var uid = ProfileService.getUID();

export const MessageCard = ({uid, sender, description, date, ...restProps}: any) => {

    return (
        <>
        {sender.uid == uid?
        <div className="chat-page-text-recipient-container">
            <div className="chat-page-text-recipient">
                <p className="chat-page-text-recipient-message "> {description} </p>
                <p className="chat-page-text-recipient-date"> {new Date(date).toLocaleString()} </p>
            </div>
        </div>
        :
        <div className="chat-page-text-sender-container">
        <div className="chat-page-text-sender">
            <p className="chat-page-main-text-sender"> {description} </p>
            <p className="chat-page-text-sender-date"> {new Date(date).toLocaleString()} </p>
        </div>
    </div>}
        </>
    )
}