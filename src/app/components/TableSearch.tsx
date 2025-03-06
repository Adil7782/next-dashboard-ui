"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const TableSearch = () => {

  
  const router = useRouter()


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const value = (e.currentTarget[0] as HTMLInputElement).value
    const params = new URLSearchParams(window.location.search)
    params.set("search",value.toString())
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
             <form onSubmit={handleSubmit}>
     <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">

             <Image src="/search.png" alt="" height={14} width={14} />
             <input type="text" placeholder="Search..." className="w-[150px] bg-transparent p-2 outline-none" />
              
             </div>
             </form>
            
  )
}

export default TableSearch