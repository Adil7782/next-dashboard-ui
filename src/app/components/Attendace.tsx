"use client"
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AttendaceChart = () => {
    const data = [
        {
          name: 'Mon',
          present: 12,
          absent: 20    ,
          
        },
        {
          name: 'Tue',
          present: 12,
          absent: 32,
          
        },
        {
          name: 'Wed',
          present: 42,
          absent: 23,
          
        },
        {
          name: 'Thu',
          present: 23,
          absent: 1,
          
        },
        {
          name: 'Fri',
          present: 12,
          absent: 1,
          
        },
        {
          name: 'Sat',
          present: 42,
          absent: 23,
          
        },
        {
          name: 'Sun',
          present: 34,
          absent: 2,
          
        },
      ];

  return (
    <div className='bg-white rounded-lg p-4 h-full shadow-md'>
      <div>
        <div className='flex justify-between  items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image alt='' src="/moreDark.png" width={20}   height={20}/>

        </div>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#ddd"}} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#83a6ed"  legendType='circle' radius={[5,5,0,0]} />
          <Bar dataKey="absent" fill="#FAE27C" legendType='circle'  radius={[5,5,0,0]} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendaceChart