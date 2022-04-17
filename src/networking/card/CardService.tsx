import React from "react";
import { CardInfo, CardManager } from "./CardManager";

export const CardService = {

    addCard: async(cardInfo : CardInfo) => {
        return new Promise(async(resolve) => {
            await CardManager.addCard(cardInfo).then((card) => {
                console.log(card)
                if (card != null && card.status == 200) {
                    resolve(card.data.card)
                } else {
                    resolve(null)
                }
            })
        })
    }

}