import React from "react";
import Calendar from "../../../../assets/chat/calendar-today.svg";
import { CalendarService } from "../../../../networking/chat/calendar/CalendarService";
import { CreateCalendarInvite } from "../../../../networking/types/CalendarTypes";
import '../../../../styles/chat/components/calendar-popover.css'



export const CalendarPopover = ({chat_calendars, chat_id, ...restProps}:any) => {
    const [open, setOpen] = React.useState(false);
    const [calendars, setCalendars] = React.useState([]);
    const [new_calendar, updateCalendar] = React.useState({start_date: '', location: '', end_date: '', title: '', description: ''} as unknown as CreateCalendarInvite);
    const [tab, setTab] = React.useState("Create")

    const onChangeCalendar = (key: string, value: string) => {
        const calObject = {...new_calendar};
        // @ts-ignore: Unreachable code error
        calObject[key as keyof CreateCalendarInvite] = value;
        updateCalendar(calObject)
    };

    const submitCalendar = async() => {
        return await CalendarService.createCalendar(chat_id as string, new_calendar).then((calendars) => {
            alert("Successfully created an invite!")
            updateCalendar({start_date: '', location: '', end_date: '', title: '', description: ''})
            setOpen(false)
        })
    };

    const resetValues = () => {
        updateCalendar({start_date: '', end_date: '', location: '', title: '', description: ''})
    };
    
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
                                <p onClick={() => setOpen(false)} style={{paddingRight: '20px'}}> X </p>
                            </div>

                            <div className="calendar-popover-column">
                                
                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> Title </p>
                                        <input value={new_calendar.title} onChange={(text) => onChangeCalendar('title', text.target.value)} placeholder="Enter title of the event" className="calendar-input" />
                                    </div>

                                </div>

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column" style={{marginRight: '20px'}}>
                                        <p className="calendar-h2"> Start date </p>
                                        <input value={new_calendar.start_date} onChange={(text) => onChangeCalendar('start_date', text.target.value)}  type="datetime-local" placeholder="e.g. 01/10/2010 1:15pm ET" className="calendar-input" />
                                    </div>

                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> End date </p>
                                        <input value={new_calendar.end_date} onChange={(text) => onChangeCalendar('end_date', text.target.value)}  type="datetime-local" placeholder="e.g. 01/10/2010 1:25pm ET " className="calendar-input" />
                                    </div>    
                                </div>

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> Description </p>
                                        <textarea value={new_calendar.description} onChange={(text) => onChangeCalendar('description', text.target.value)}  placeholder="Enter a description for your calendar invite" style={{height: '80px', resize: 'none'}} className="calendar-input" />
                                    </div>
                                </div>

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 6}}>
                                    <div className="calendar-popover-column">
                                        <p className="calendar-h2"> Location </p>
                                        <input value={new_calendar.location} onChange={(text) => onChangeCalendar('location', text.target.value)} placeholder="Enter title of the event" className="calendar-input" />
                                    </div>

                                </div>
                                

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 24, justifyContent: "flex-end"}}>
                                    <div>
                                        <button onClick={resetValues} className="reset-btn"> Reset </button>
                                        <button onClick={submitCalendar} className="calendar-submit-btn" style={{marginLeft: '14px'}}> Submit </button>
                                    </div>      
                                </div>
                            </div>
                            </>
                        : tab === "View" ?
                            <>
                                <div className="calendar-popover-row" style={{borderBottom: '0.6px solid #CBCCD2', alignItems: 'center', justifyContent: "space-between"}}>
                                    <p className="calendar-h1"> View All Invites </p>
                                    <p onClick={() => setOpen(false)} style={{paddingRight: '20px'}}> X </p>
                                </div>
                
                                <div style={{height: '409px', overflowY: 'auto', contentVisibility: 'auto'}} className="calendar-popover-column">
                                        <div style={{justifyContent: "flex-end"}} className=""> 
                                            <p className="total-invite-number"> {chat_calendars.length} total invites </p>

                                            {chat_calendars? 
        // @ts-ignore: Unreachable code error
                                            chat_calendars.map((calendar, idx) => {
                                                return (
                                                    <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 5}}> 
                                                    <div className="calendar-invite-card">
                                                        <div className="calendar-invite-highlight"></div>
                                                        <p className="calendar-invite-card-h1"> {calendar.title} </p>
                                                        <p className="calendar-invite-card-h2"> {calendar.location} </p>
                                                        <p className="purple-gradient-add-to-calendar-h2"> {calendar.start_date? new Date(calendar.start_date).toLocaleString() :""}-{calendar.start_date? new Date(calendar.end_date).toLocaleString() :""} </p>
        
                                                        <hr className="calendar-invite-card-hr" />
        
                                                        <p className="calendar-invite-card-p"> {calendar.description} </p>
                                                        
                                                    </div>
        
                                                </div>
                                                )
                                            })
                                        :null}
                                        
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