"use client"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 92  , fill: '#c3ebfa'},
  { name: 'Group B', value: 8, fill: '#fae27c' },
  
];

import React from 'react'
import Image from 'next/image';

const Performance = () => {
  return (
    <div className='bg-white rounded-md p-4 shadow-md  h-80 relative'>
        <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Performence</h1>
        <Image alt='' src={"/moreDark.png"} width={16} height={16} />
        </div>
<ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
           
          />
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-3xl font-extrabold '>9.2</h1>
      
      </div>
      <h2 className='text-md font-medium absolute bottom-16 left-0 right-0 m-auto text-center'>1st Semester </h2>
    </div>
  )
}

export default Performance
