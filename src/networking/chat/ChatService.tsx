import React from "react";
import { AllChats, Chat } from "../types/ChatTypes";
import { ChatManager } from "./ChatManager";

export const ChatService = {

    getAllChat: async() : Promise<AllChats | null> => {
        try {
            const getChatDetails = new Promise(async(resolve) =>  {
                await ChatManager.getAllChats().then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.chat);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getChatDetails as AllChats
        } catch (err) {
            return null
        }
    },

    getChat: async(chat_id: string) : Promise<Chat | null> => {
        try {
            const getChatDetails = new Promise(async(resolve) =>  {
                await ChatManager.getChat(chat_id).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.chat);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getChatDetails as Chat
        } catch (err) {
            return null
        }
    }

}