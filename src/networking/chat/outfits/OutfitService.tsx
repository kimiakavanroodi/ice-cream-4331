import React from "react"
import { CreateOutfitType } from "../../types/OutfitTypes";
import { OutfitManager } from "./OutfitManager";


export const OutfitService = {

    createOutfit: async(chat_id: string, outfitBody: CreateOutfitType) => {
        try {
            const getChatDetails = new Promise(async(resolve) =>  {
                await OutfitManager.createOutfit(chat_id, outfitBody).then((user) => {
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
    },

    seeOutfit: async(chat_id: string, outfit_id: string) => {
        try {
            const getChatDetails = new Promise(async(resolve) =>  {
                await OutfitManager.seeOutfit(chat_id, outfit_id).then((user) => {
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