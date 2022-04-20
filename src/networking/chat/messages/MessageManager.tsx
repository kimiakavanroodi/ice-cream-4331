
import React from "react"
import { mainService } from "../../endpoint";
import { ProfileService } from "../../profiles/ProfileService";
import { CreateMessage } from "../../types/MessageTypes"

export const MessageManager = {

    postMessage: async(chat_id: string, messageBody : CreateMessage) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post(`/chats/${chat_id}/message`, messageBody, { headers: { authorization: userToken as string } })
    }

}
