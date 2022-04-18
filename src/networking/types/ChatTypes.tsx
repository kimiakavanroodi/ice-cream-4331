

export interface Chat {
    _id: string
    stylist_uid: string,
    style_seeker_uid: string,
    recip_profile: object,
    messages: Array<any>,
    calendar_invites: Array<any>,
    stylist_rate: number,
    outfits: Array<any>,
    video_chats: Array<any>
}

export interface AllChats {
    chat_id: string;
    profile: any;
}


