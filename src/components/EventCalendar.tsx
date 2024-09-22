"use client";
import Image from "next/image";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "12:00 PM - 2:00 PM",
    description: "Description of event 1",
  },
  {
    id: 2,
    title: "Event 2",
    time: "2:00 PM - 4:00 PM",
    description: "Description of event 2",
  },
  {
    id: 3,
    title: "Event 3",
    time: "4:00 PM - 6:00 PM",
    description: "Description of event 3",
  },
];

const EventCalendar = () => {
  const [value, onChange] = React.useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} locale="en-US" />
      <div className="flex items-center justify-between">
        <h1>
          <span className="text-lg font-semibold">Events</span>
          <span className="text-sm text-gray-500 font-semibold">
            ({events.length})
          </span>
        </h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-lg font-semibold">{event.title}</h1>
            <p className="text-sm text-gray-500">{event.time}</p>
            <p className="text-sm text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
