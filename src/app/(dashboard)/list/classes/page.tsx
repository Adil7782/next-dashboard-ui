import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { classesData, parentsData, role, studentsData, teachersData } from '@/lib/data'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const columns = [
    {
        header:"Class Name",
        accessor:"className"
    },
    {
        header:"Capacity",
        accessor:"capacity",
        className :"hidden md:table-cell"
    },
    
    {
        header:"Grade",
        accessor:"grade",
        className :"hidden lg:table-cell"
    },
    {
        header:"Supervisor",
        accessor:"supervisor",
        className :"hidden lg:table-cell"
    },{
        header:"Action",
        accessor:"action"
    }
    
]

type Class ={

    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string[];
    
}

const ClassesList = () => {
    
    const renderRow =(item:Class) =>{
return( <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
          <td className='flex items-center p-3 gap-3'>
           

            <div className="flex flex-col">
              <h1 className="font-semibold">{item.name}</h1>
              
            </div>
          </td>

          <td className="hidden md:table-cell text-sm">{item.capacity} </td>        
          <td className="hidden md:table-cell text-sm"> {item.grade} </td>
          <td className="hidden md:table-cell text-sm"> {item.supervisor} </td>
          <td>
            <div className="flex gap-2 items-center">
              <Link href={`list/students/${item.id}`}>
                <button className="w-7 h-7 rounded-full flex items-center justify-center bg-lamaSky">
                  <Image src={"/edit.png"} alt="" width={16} height={16} />
                </button>
              </Link>

              { role === "admin" && 
                <button className="w-7 h-7 rounded-full flex items-center justify-center bg-lamaPurple">
                  <Image src={"/delete.png"} alt="" width={16} height={16} />
                </button>
              }
            </div>
          </td>
        </tr>)
    }


  return (
    <>
    <div className='bg-white  mx-4 p-4  flex-1 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h1 className='text-lg  hidden md:block font-semibold '>All Classes</h1>
        <div className='flex flex-col md:flex-row items-center gap-8 w-full md:w-auto'>
        <TableSearch/>
        <div className='flex gap-4'>
            <button className='bg-lamaYellow items-center justify-center h-8 w-8 rounded-full flex '>
        <Image src="/filter.png" alt='' width={14} height={14}/>

            </button>
            <button className='bg-lamaYellow items-center justify-center h-8 w-8 rounded-full flex '>
        <Image src="/sort.png" alt='' width={14} height={14}/>

            </button>
            {
                role === "admin" && 
                <button className='bg-lamaYellow items-center justify-center h-8 w-8 rounded-full flex '>
        <Image src="/plus.png" alt='' width={14} height={14}/>

            </button>}
        </div>
        </div>
        </div>
        <div>
        <Table columns={columns} renderRow={renderRow} data={classesData}/>
        </div>
      
        <Pagination/>
        
    </div>
    </>
  )
}

export default ClassesList