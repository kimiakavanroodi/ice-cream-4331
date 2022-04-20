import React from "react"
import { mainService } from "../../endpoint";
import { ProfileService } from "../../profiles/ProfileService";
import { CreateCalendarInvite } from "../../types/CalendarTypes";


export const CalendarManager = {

    createCalendar: async(chat_id: string, calendarBody : CreateCalendarInvite) => {
        let userToken = await ProfileService.getUserToken();

        return await mainService.post(`/chats/${chat_id}/calendar`, calendarBody, { headers: { authorization: userToken as string } })
    }

}
