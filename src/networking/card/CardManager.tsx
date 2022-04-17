import { mainService } from "../endpoint"
import { ProfileService } from "../profiles/ProfileService"

export interface CardInfo {
    number: number;
    name: string;
    cvc: number;
    expiry: string;
}

export const CardManager = {

    addCard: async(cardInfo : CardInfo) =>  {
        let userToken = await ProfileService.getUserToken();

        return mainService.post('/card', cardInfo, { headers : { authorization : userToken as string }})
    }

}
