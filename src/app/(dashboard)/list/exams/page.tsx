import FormComponent from '@/app/components/FormComponent'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { examsData, parentsData, role, studentsData, teachersData } from '@/lib/data'
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
        header:"Class",
        accessor:"class",
        className :"hidden md:table-cell"
    },
    
    {
        header:"Teacher",
        accessor:"teacher",
        className :"hidden lg:table-cell"
    },
    {
        header:"Date",
        accessor:"date",
        className :"hidden lg:table-cell"
    },{
        header:"Action",
        accessor:"action"
    }
    
]

type Exam ={
    id: number,
    subject: string,
    class: string,
    teacher: string,
    date: string,
}

const ExamList = () => {
    
    const renderRow =(item:Exam) =>{
return( <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
          <td className='flex items-center p-3 gap-3'>
           

            <div className="flex flex-col">
              <h1 className="font-semibold">{item.subject}</h1>
    
            </div>
          </td>

          <td className="hidden md:table-cell text-sm">{item.class} </td>        
          <td className="hidden md:table-cell text-sm"> {item.teacher} </td>
          <td className="hidden md:table-cell text-sm"> {item.date} </td>
          <td>
            <div className="flex gap-2 items-center">
             { role === "admin" && 
               <>
                <Link href={`list/students/${item.id}`}>
                <FormComponent type='update' table='exams'  data={item} />

              </Link>

              
                               <FormComponent type='delete' table='exams' id={item.id} />
               
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
        <h1 className='text-lg  hidden md:block font-semibold '>All Exams</h1>
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
                                <FormComponent type='create' table='exams'  />
                }
        </div>
        </div>
        </div>
        <div>
        <Table columns={columns} renderRow={renderRow} data={examsData}/>
        </div>
      
        <Pagination/>
        
    </div>
    </>
  )
}

export default ExamList