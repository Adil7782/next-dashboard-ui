"use client"
import Image from 'next/image'

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceChart = () => {

    const data = [
        { name: 'Jan', income: '5000', expense: '3000' },
        { name: 'Feb', income: '6000', expense: '3500' },
        { name: 'Marh', income: '2000', expense: '4000' },
        { name: 'Apr', income: '8000', expense: '4500' },
        { name: 'May', income: '9000', expense: '5000' },
        { name: 'Jun', income: '4000', expense: '2500' },
        { name: 'Jul', income: '11000', expense: '6000' },
        { name: 'Aug', income: '12000', expense: '6500' },
        { name: 'Sep', income: '13000', expense: '7000' },
        { name: 'Oct', income: '14000', expense: '7500' },
        { name: 'Nov', income: '15000', expense: '8000' },
        { name: 'Dec', income: 16000, expense: '8500' },
    ];
  return (
    <div className="bg-white w-full h-full rounded-2xl p-4 shadow-md">
          <div>
            {/* title */}
            <div className="flex justify-between items-center">
              <h1 className='text-lg font-semibold'>Finance</h1>
              <Image src="/moreDark.png" alt="" height={20} width={20} />
            </div>
            <ResponsiveContainer width="100%" height={450}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#ddd"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#ddd"}} tickLine={false}/>
          <Tooltip />
                   <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"20px"}} />
         
          <Line type="monotone" dataKey="income" stroke="#C3BDEA" strokeWidth={2} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
            </div>
            </div>
  )
}

export default FinanceChart