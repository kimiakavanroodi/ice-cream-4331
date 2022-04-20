import React from "react"
import { mainService } from "../endpoint";
import { ProfileService } from "../profiles/ProfileService";
import { CreateMatch } from "../types/MatchType"

export const MatchManager = {

    createMatch: async(stylist_id: CreateMatch) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post('/matches', stylist_id, { headers: { authorization: userToken as string } })
    },

    approveMatch: async(match_id: string) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post(`/matches/${match_id}`, {}, { headers: { authorization: userToken as string } })
    },

    getAllMatches: async() => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.get(`/matches`, { headers: { authorization: userToken as string } })
    }

}