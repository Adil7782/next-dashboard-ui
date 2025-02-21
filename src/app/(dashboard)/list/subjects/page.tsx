import FormComponent from '@/app/components/FormComponent'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { parentsData, role, studentsData, subjectsData, teachersData } from '@/lib/data'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const columns = [
    {
        header:"Subject",
        accessor:"subject"
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className :"hidden md:table-cell"
    },
    
{
        header:"Action",
        accessor:"action"
    }
    
]

type Subject ={
    id:number;
    name:string;
    teachers:string[];
  
}

const Subjectlist = () => {
    
    const renderRow =(item:Subject) =>{
return( <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
          <td className='flex items-center p-3 gap-3'>
           

            <div className="flex flex-col">
              <h1 className="font-semibold">{item.name}</h1>
            
            </div>
          </td>

          <td className="hidden md:table-cell text-sm">{item.teachers.join(",")} </td>        
         
          <td>
            <div className="flex gap-2 items-center">
            { role === "admin" && 
              <>
              <Link href={`students/${item.id}`}>
              <FormComponent type='update' table='subjects' data={item} />

              </Link>

              
                                <FormComponent type='delete' table='subjects'  />
              </>

              }
            </div>
          </td>
        </tr>)
    }


  return (
    <>
    <div className='bg-white  mx-4 p-4  flex-1 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h1 className='text-lg  hidden md:block font-semibold '>All Subjects</h1>
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
                <FormComponent type='create' table='subjects'  />
}
        </div>
        </div>
        </div>
        <div>
        <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
        </div>
      
        <Pagination/>
        
    </div>
    </>
  )
}

export default Subjectlist