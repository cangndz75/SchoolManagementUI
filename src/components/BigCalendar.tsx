"use client";
import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import { calendarEvents } from "../lib/data"; // Make sure this path is correct
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<(typeof Views)[keyof typeof Views]>(
    Views.MONTH
  ); // Set initial view

  const handleOnChangeView = (newView: (typeof Views)[keyof typeof Views]) => {
    // Explicitly type newView
    console.log("View changed to:", newView);
    setView(newView);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]} // Include AGENDA if needed
        view={view} // Control the current view
        onView={handleOnChangeView} // Handle view change
        style={{ height: 500 }}
        defaultDate={new Date()} // Optional: Set the default date
        popup // Enables event popup on click
      />
    </div>
  );
};

export default BigCalendar;
