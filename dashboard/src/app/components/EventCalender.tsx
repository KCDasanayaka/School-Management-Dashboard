"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import more from "../../../public/moreDark.png"

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
      id: 1,
      title: "Team Meeting",
      time: "09:00:00",
      description: "Discuss project updates and milestones with the team."
    },
    {
      id: 2,
      title: "Doctor's Appointment",
      time: "14:30:00",
      description: "Annual health check-up at the clinic."
    },
    {
      id: 3,
      title: "Lunch with Sarah",
      time: "12:00:00",
      description: "Meet Sarah at Green Cafe for lunch."
    },
    {
      id: 4,
      title: "Workshop: Web Development",
      time: "10:00:00",
      description: "Attend a workshop on modern web development practices."
    }
  ];
  

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md text-black'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-black my-4'>Events</h1>
            <Image src={more} alt='' width={20} height={20}/>
            
        </div>
      <div className='flex flex-col gap-4'>
      {events.map(event => (
            <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-blue-950'>{event.title}</h1>
                        <span className='text-gray-500 text-xs font-bold '>{event.time}</span></div>
                    <p className='mt-2 text-gray-300 text-sm font-medium'>{event.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalender
