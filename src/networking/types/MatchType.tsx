
export interface CreateMatch {
    stylist_uid: string;
}

export interface MatchInformation {
    stylist_uid: string;
    style_seeker_uid: string;
    stylist_profile: string;
    style_seeker_profile: any;
    approved: boolean;
}

