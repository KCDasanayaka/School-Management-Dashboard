"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react';
import { calendarEvents } from '../lib/data';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);  // Set initial view to WORK_WEEK

    const handleOnChangeView = (selectedView: View)=>{
        setView(selectedView);
    };
    return (
        <div className='text-black'>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week","day"]}
                view={view}
                style={{ height: 500 }}
                onView={handleOnChangeView}
            />
        </div>
    );
};

export default BigCalendar;
