import React from "react";
import { CreateMatch, MatchInformation } from "../types/MatchType";
import { MatchManager } from "./MatchManager";

export const MatchService = {

    createMatch: async(match_info : CreateMatch): Promise<MatchInformation | null>  => {
        try {
            const getMatch = new Promise(async(resolve, reject) =>  {
                await MatchManager.createMatch(match_info).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.match);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getMatch as MatchInformation

        } catch (err) {
            return null;
        }
    },

    getAllMatches: async() => {
        try {
            const getMatch = new Promise(async(resolve, reject) =>  {
                await MatchManager.getAllMatches().then((user) => {
                    if (user.status == 200 && user != null) {
                        console.log(user.data)
                        resolve(user.data.matches);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getMatch as MatchInformation

        } catch (err) {
            return null;
        }
    },

    approveMatch: async(match_id: string) => {
        try {
            const getMatch = new Promise(async(resolve, reject) =>  {
                await MatchManager.approveMatch(match_id).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.match);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getMatch as MatchInformation

        } catch (err) {
            return null;
        }
    }

}