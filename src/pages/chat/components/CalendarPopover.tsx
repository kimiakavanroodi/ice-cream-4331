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
        const calObject = {...new_calendar};
        calObject[key as keyof calendar_schema] = value;
        updateCalendar(calObject)
    };

    const resetValues = () => {
        updateCalendar({start_date: '', end_date: '', title: '', description: ''})
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

                                <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 24, justifyContent: "flex-end"}}>
                                    <div>
                                        <button onClick={resetValues} className="reset-btn"> Reset </button>
                                        <button className="calendar-submit-btn" style={{marginLeft: '14px'}}> Submit </button>
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
                                        <div style={{justifyContent: "flex-end"}} className="calendar-popover-row"> 
                                            <p className="total-invite-number"> 24 total invites </p>
                                        
                                        </div>

                                        <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 5}}> 
                                            <div className="calendar-invite-card">
                                                <div className="calendar-invite-highlight"></div>
                                                <p className="calendar-invite-card-h1"> Clothing Advice </p>
                                                <p className="calendar-invite-card-h2"> Today at 3:00PM ET </p>

                                                <hr className="calendar-invite-card-hr" />

                                                <p className="calendar-invite-card-p"> This is a chat where we would talk about
                                                    clothes and discuss what is needed. </p>
                                                
                                            </div>

                                        </div>

                                        <br></br>

                                        <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 5}}> 
                                            <div className="calendar-invite-card">
                                                <div className="calendar-invite-highlight"></div>
                                                <p className="calendar-invite-card-h1"> Clothing Advice </p>
                                                <p className="calendar-invite-card-h2"> Today at 3:00PM ET </p>

                                                <hr className="calendar-invite-card-hr" />

                                                <p className="calendar-invite-card-p"> This is a chat where we would talk about
                                                    clothes and discuss what is needed. </p>
                                                
                                            </div>

                                        </div>

                                        <div className="calendar-popover-row" style={{padding: 15, paddingBottom: 5}}> 
                                            <div className="calendar-invite-card">
                                                <div className="calendar-invite-highlight"></div>
                                                <p className="calendar-invite-card-h1"> Clothing Advice </p>
                                                <p className="calendar-invite-card-h2"> Today at 3:00PM ET </p>

                                                <hr className="calendar-invite-card-hr" />

                                                <p className="calendar-invite-card-p"> This is a chat where we would talk about
                                                    clothes and discuss what is needed. </p>
                                                
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