"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {

  const events = [
    {
        id: '1',
        title: 'Team Meeting',
        time: 'October 1, 2023, 10:00 AM',
        description: 'Monthly team meeting to discuss project updates and goals.',
    },
    {
        id: '2',
        title: 'Project Deadline',
        time: 'October 15, 2023, 5:00 PM',
        description: 'Final deadline for submitting the project deliverables.',
    },
    {
        id: '3',
        title: 'Client Presentation',
        time: 'October 20, 2023, 2:00 PM',
        description: 'Presentation to the client showcasing the project progress and next steps.',
    },
];


    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4  rounded-lg shadow-md'>
              <Calendar onChange={onChange} value={value} />
              <div className='flex justify-between items-center'>
              <h1 className='font-semibold text-xl my-4'>Events</h1>
              <Image src="/moreDark.png" alt='' height={20} width={20}></Image>
              </div>
              <div className='flex flex-col gap-4'>
                {
                  events.map((event)=>{
                    return (
                      <div key={event.id} className='border-t-4 ring-gray-100 p-3 odd:border-t-lamaSky even:border-t-lamaPurple'>
                        <div className='flex items-center justify-between '>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-xs text-slate-500'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-500 text-sm'>{event.description}</p>
                      </div>
                    )
                  })
                }
              
              </div>
    </div>
  )
}

export default EventCalender