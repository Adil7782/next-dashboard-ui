"use client"
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const CountChart = () => {

const data = [
  {
    name: 'Total',
    count: 106,
    
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    
    fill: '#83a6ed',
  },
  
];



  return (
    <div className="bg-white w-full h-full rounded-2xl p-4 shadow-md">
      <div>
        {/* title */}
        <div className="flex justify-between items-center">
          <h1 className='text-lg font-semibold'>Students</h1>
          <Image src="/moreDark.png" alt="" height={20} width={20} />
        </div>
        {/* chart  */}
        <div className=' relative w-full h-[200px]'>
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="30%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar
                
                // label={{ position: "insideStart", fill: "#fff" }}
                background
                
                dataKey="count"
              />
            
            </RadialBarChart>
          </ResponsiveContainer>
          
          <Image  alt='' src={'/maleFemale.png'} height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
       
        </div>
        {/* bottom  */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="h-5 w-5 rounded-full bg-lamaSky" />
            <h1 className="font-bold ">1234</h1>
            <h2 className="text-xs text-gray-500">Boys (12%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-5 w-5 rounded-full bg-lamaYellow" />
            <h1 className="font-bold ">1234</h1>
            <h2 className="text-xs text-gray-500">Girls (12%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountChart