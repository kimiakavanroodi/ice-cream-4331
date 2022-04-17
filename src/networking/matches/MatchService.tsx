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

}