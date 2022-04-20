import React from "react";
import { CreateMessage } from "../../types/MessageTypes";
import { MessageManager } from "./MessageManager";

export const MessageService = {

    postMessage: async(chat_id: string, messageBody: CreateMessage) => {
        try {
            const getChatDetails = new Promise(async(resolve) =>  {
                await MessageManager.postMessage(chat_id, messageBody).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.chat);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getChatDetails; 

        } catch (err) {
            return null
        }
    }

}