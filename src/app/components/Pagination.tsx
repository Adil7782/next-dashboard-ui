"use client"
import { ITEM_PER_PAGE } from '@/lib/page'
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({page,count} : {page:number,count:number}) => {

  const router = useRouter();

  const changePage = (newPage:number) =>{
    const params = new URLSearchParams(window.location.search)
    params.set("page",newPage.toString())
    router.push(`${window.location.pathname}?${params}`)
  }

  const hasPrevious = ITEM_PER_PAGE* (page-1) > 0 ;
  const hasNext = ITEM_PER_PAGE* (page-1) +ITEM_PER_PAGE < count ;

  return (
    <div className=' p-4 flex justify-between items-center text-gray-500'>
    <button disabled = {!hasPrevious}   className='py-2 my-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed' onClick={()=>changePage(page-1)}>Preveious</button>
   
    <div className='flex gap-2 justify-center items-center'>

    {
      Array.from({
        length:Math.ceil(count/ ITEM_PER_PAGE)}
        , (_,index) =>
          { 
            const pageIndex = index+1
          return (
          
          <button key={index} className={`px-2 rounded-lg ${page === pageIndex ? "bg-lamaSky" :"" } `} onClick={()=>changePage(pageIndex)}>{pageIndex}</button>
        )}
      )
    }

    </div>

    <button  
    disabled={!hasNext}
     className='py-2 my-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed' onClick={()=>changePage(page+1)}>Next</button>

    </div>
  )
}

export default Pagination