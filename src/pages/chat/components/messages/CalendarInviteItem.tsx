import React from "react"
import { toast } from "react-toastify"


export const CalendarInviteItem = ({title, description, location, start_date, end_date, profile_img, ...restProps}: any) => {


    return (
        <>
        <div style={{marginBottom: 20}} className="gradient-card-outfit-row">
            <div className="purple-gradient-add-to-calendar-card">
                <div className="gradient-card-outfit-roww">
                    <div className="gradient-white-top-card-outfit"></div>
                    
                    <button style={{width: 150}} className="payment-button"> + Google Calendar </button>
                    <img className="purple-gradient-add-to-calendar-user-icon" src={profile_img} />
                     <div style={{flex: 2, alignItems: "flex-start"}} className="gradient-card-outfit-column">
                                            
                    <p className="purple-gradient-add-to-calendar-h1"> {title} </p>
                    <p className="purple-gradient-add-to-calendar-h2"> {location} </p>
                    <p className="purple-gradient-add-to-calendar-h2"> {start_date? new Date(start_date).toLocaleString() :""}-{start_date? new Date(end_date).toLocaleString() :""} </p>
                    <hr className="purple-gradient-add-to-calendar-hr" />
                    <p className="purple-gradient-add-to-calendar-p"> {description} </p>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}