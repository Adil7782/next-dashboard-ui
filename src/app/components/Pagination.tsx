import React from 'react'

const Pagination = () => {
  return (
    <div className=' p-4 flex justify-between items-center text-gray-500'>
    <button disabled  className='py-2 my-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Preveious</button>
   
    <div className='flex gap-2 justify-center items-center'>
    <button className='px-2 rounded-lg bg-lamaSky'>1</button>
    <button className='p-2 '>2</button>
    <button className='p-2 '>3</button>
    ...
    <button className='p-2 '>10</button>
    </div>

    <button   className='py-2 my-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>

    </div>
  )
}

export default Pagination