import React from "react"
import { CreateCalendarInvite } from "../../types/CalendarTypes";
import { CalendarManager } from "./CalendarManager";


export const CalendarService = {

    createCalendar: async(chat_id: string, calendarBody: CreateCalendarInvite) => {
        try {
            const getChatDetails = new Promise(async(resolve) =>  {
                await CalendarManager.createCalendar(chat_id, calendarBody).then((user) => {
                    if (user.status == 200 && user != null) {
                        resolve(user.data.chat);
                    } else {
                        resolve(null)
                    }
                })
            }).then((user) => user)

            return await getChatDetails; 

        } catch (err) {
            return null
        }
    }

}