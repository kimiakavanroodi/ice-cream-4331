import React from "react";
import Calendar from "../../../assets/chat/calendar-today.svg";
import '../../../styles/chat/components/calendar-popover.css'

interface calendar_schema {
    start_date: '';
    end_date: '';
    title: '';
    description: '';
}

export const CalendarPopover = ({chat_calendars}: any, {...restProps}:any) => {
    const [open, setOpen] = React.useState(false);
    const [calendars, setCalendars] = React.useState([]);
    const [new_calendar, updateCalendar] = React.useState({start_date: '', end_date: '', title: '', description: ''});
    const [tab, setTab] = React.useState("Create")

    const onChangeCalendar = (key: string, value: string) => {
        const calObject = new_calendar;
        calObject[key as keyof calendar_schema] = value;
        updateCalendar(calObject)
    };
    
    console.log(new_calendar)
    return (
        <>
            <img id="calendar-icon" onClick={() => setOpen(true)} src={Calendar} />

            {
            open?
                <>
        
                    <div id="calendar-popover-container" className="calendar-popover-container">

                        <div className="calendar-popover-column" style={{flex: 1, padding: '27px', borderRight: '0.6px solid #CBCCD2'}}>
                            <p className="calendar-container-links" onClick={() => setTab("Create")}> + Invite </p>
                            <p className="calendar-container-links" onClick={() => setTab("View")}>  View all </p>
                        </div>

                        <div className="calendar-popover-column" style={{flex: 5}}>

                        {
                            tab == "Create" ? 

                            <>
                            <div className="calendar-popover-row" style={{borderBottom: '0.6px solid #CBCCD2', alignItems: 'center', justifyContent: "space-between"}}>
                                <p className="calendar-h1"> Add Calendar Invite </p>
                                <p style={{paddingRight: '20px'}}> X </p>
                            </div>

                            <div className="calendar-popover-column">
                                
                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> Title </p>
                                        <input onChange={(text) => onChangeCalendar('title', text.target.value)} placeholder="Enter title of the event" className="calendar-input" />
                                    </div>

                                </div>

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column" style={{marginRight: '20px'}}>
                                        <p className="calendar-h2"> Start date </p>
                                        <input onChange={(text) => onChangeCalendar('start_date', text.target.value)}  type="datetime-local" placeholder="e.g. 01/10/2010 1:15pm ET" className="calendar-input" />
                                    </div>

                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> End date </p>
                                        <input onChange={(text) => onChangeCalendar('end_date', text.target.value)}  type="datetime-local" placeholder="e.g. 01/10/2010 1:25pm ET " className="calendar-input" />
                                    </div>    
                                </div>

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> Description </p>
                                        <textarea onChange={(text) => onChangeCalendar('description', text.target.value)}  placeholder="Enter a description for your calendar invite" style={{height: '80px', resize: 'none'}} className="calendar-input" />
                                    </div>
                                </div>

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 24, justifyContent: "flex-end"}}>
                                    <div>
                                        <button className="reset-btn"> Reset </button>
                                        <button className="calendar-submit-btn" style={{marginLeft: '14px'}}> Submit </button>
                                    </div>      
                                </div>
                            </div>
                            </>
                        : null}
                        </div>
                    </div>
                </>
            : null}
        </>
    )

}