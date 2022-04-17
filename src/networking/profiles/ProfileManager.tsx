import React from "react"
import { mainService } from "../endpoint"
import { NewUserBody, UploadStyleSeekerProfile, UploadStylistProfile } from "../types/ProfileTypes"
import { ProfileService } from "./ProfileService"


export const ProfileManager = {

    getBulkStylists: async() => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.get('/bulk-stylists', { headers: { authorization: userToken as string } })
    },

    addStyleSeekerProfile: async(style_seeker_info: UploadStyleSeekerProfile) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post('/style-seeker', style_seeker_info, { headers: { authorization: userToken as string } })
    },

    addStylistProfile: async(stylistDetails: UploadStylistProfile) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post('/stylist', stylistDetails, { headers: { authorization: userToken as string } })
    },

    getUserRole: async() => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.get('/role', { headers: { authorization: userToken as string } })
    },

    isNewUser: async() => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.get('/new-user', { headers: { authorization: userToken as string } })
    },

    createAccount: async(userBody: NewUserBody) => {
        return await mainService.post('/account', userBody)
    }

}