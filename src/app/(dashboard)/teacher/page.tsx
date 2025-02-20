import Announcements from '@/app/components/Announcements'
import BigCalender from '@/app/components/BigCalender'
import EventCalender from '@/app/components/EventCalender'
import React from 'react'

const TeacherPage
 = () => {
  return (
    <>
    <div className='flex flex-col xl:flex-row gap-4 p-4'>
    <div className='w-full xl:w-2/3'>
      
      <div className='h-full rounded-md bg-white p-4 shadow-md'>
      <h1 className='text-lg font-semibold'>Shedule </h1>
      <BigCalender/>
      </div>
    </div>

    <div className="w-full xl:w-1/3 flex flex-col gap-8 px-2">
       
        <Announcements/>
        </div>
    </div>
    </>
  )
}

export default TeacherPage
