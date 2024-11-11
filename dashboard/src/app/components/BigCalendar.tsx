"use client";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';
import { calendarEvents } from '../lib/data';

console.log("Loaded Events:", calendarEvents);
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState(Views.WORK_WEEK);  // Set initial view to WORK_WEEK

    const handleOnChangeView = (selectedView) => {
        setView(selectedView);
    };

    return (
        <div className='text-black'>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day", "week"]} // Added "week" for testing
                view={view}
                onView={handleOnChangeView}
                style={{ height: 500 }}
            />
        </div>
    );
};

export default BigCalendar;
