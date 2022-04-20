import React from "react"
import { mainService } from "../../endpoint";
import { ProfileService } from "../../profiles/ProfileService";
import { CreateOutfitType } from "../../types/OutfitTypes";



export const OutfitManager = {

    createOutfit: async(chat_id: string, outfitBody : CreateOutfitType) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post(`/chats/${chat_id}/outfit`, outfitBody, { headers: { authorization: userToken as string } })
    },

    seeOutfit: async(chat_id: string, outfit_id: string) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post(`/chats/${chat_id}/outfit/${outfit_id}/pay`, {}, { headers: { authorization: userToken as string } })
    }
  
  

}