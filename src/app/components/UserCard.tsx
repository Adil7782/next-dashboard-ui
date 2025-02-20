import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px] shadow-md'>
        <div className='flex justify-between items-center' >
        <span className='text-[10px] text-green bg-green-200 px-2 py-1 rounded-full'>2024/02/25</span>
        <Image src="/more.png" alt='' height={20} width={20}/>
        </div>
        <div>
        <h1 className='text-xl font-semibold my-4'>1234</h1>
        <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
        </div>
    </div>
  )
}

export default UserCard