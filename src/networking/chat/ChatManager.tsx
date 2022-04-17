import React from "react";
import { mainService } from "../endpoint";
import { ProfileService } from "../profiles/ProfileService";

export const ChatManager = {

    getAllChats: async() => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.get('/chats', { headers: { authorization: userToken as string } })
    },

    getChat: async(chat_id: string) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.get(`/chats/${chat_id}`, { headers: { authorization: userToken as string } })
    }

}