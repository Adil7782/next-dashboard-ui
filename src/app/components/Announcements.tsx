"use client"

import React from 'react'

const Announcements = () => {
  return (
    <div>
      <div className="bg-white p-4 shadow-md  rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Announcements</h1>
          <span className="text-sm text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="rounded-lg p-4 bg-[#c3e8f5]">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-sm">Lorem Ipsum asdasdasd</h2>
              <span className="text-xs text-gray-500 bg-white px-1  py-1 rounded-md">
                2025-02-01
              </span>
            </div>
              <p className='text-xs text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatibus fugiat perferendis. Necessitatibus explicabo quasi
                
              </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="rounded-lg p-4 bg-lamaPurpleLight">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-sm">Lorem Ipsum asdasdasd</h2>
              <span className="text-xs text-gray-500 bg-white px-1  py-1 rounded-md">
                2025-02-01
              </span>
            </div>
              <p className='text-xs text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatibus fugiat perferendis. Necessitatibus explicabo quasi
                
              </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="rounded-lg p-4 bg-lamaYellowLight">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-sm">Lorem Ipsum asdasdasd</h2>
              <span className="text-xs text-gray-500 bg-white px-1  py-1 rounded-md">
                2025-02-01
              </span>
            </div>
              <p className='text-xs text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatibus fugiat perferendis. Necessitatibus explicabo quasi
                
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements