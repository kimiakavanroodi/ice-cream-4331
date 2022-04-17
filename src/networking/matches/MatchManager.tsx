import React from "react"
import { mainService } from "../endpoint";
import { ProfileService } from "../profiles/ProfileService";
import { CreateMatch } from "../types/MatchType"

export const MatchManager = {

    createMatch: async(stylist_id: CreateMatch) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post('/matches', stylist_id, { headers: { authorization: userToken as string } })
    }

}