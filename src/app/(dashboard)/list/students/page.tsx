import FormComponent from '@/app/components/FormComponent'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { role, studentsData, teachersData } from '@/lib/data'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const columns = [
    {
        header:"Info",
        accessor:"info"
    },
    {
        header:"Student Id",
        accessor:"studentId",
        className :"hidden md:table-cell"
    },
    {
        header:"Grade",
        accessor:"grade",
        className :"hidden md:table-cell"
    },
  
    {
        header:"Phone",
        accessor:"phone",
        className :"hidden lg:table-cell"
    },
    {
        header:"Address",
        accessor:"address",
        className :"hidden lg:table-cell"
    },{
        header:"Action",
        accessor:"action"
    }
    
]

type Student ={
    id:number;
    studentId:string;
    email?:string;
    name:string;
    photo:string;
    phone?:string;
    grade:number ;
    class:string;
    address:string
}

const StudentList = () => {
    
    const renderRow =(item:Student) =>{
return( <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
          <td className='flex items-center p-3 gap-3'>
            <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block  w-10 h-10 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <h1 className="font-semibold">{item.name}</h1>
              <p className="text-xs text-gray-500">{item.class}</p>
            </div>
          </td>

          <td className="hidden md:table-cell text-sm">{item.studentId} </td>
          <td className="hidden md:table-cell text-sm">{item.grade}</td>
          
          <td className="hidden md:table-cell text-sm"> {item.phone} </td>
          <td className="hidden md:table-cell text-sm"> {item.address} </td>
          <td>
            <div className="flex gap-2 items-center">
              <Link href={`students/${item.id}`}>
                <button className="w-7 h-7 rounded-full flex items-center justify-center bg-lamaSky">
                  <Image src={"/view.png"} alt="" width={16} height={16} />
                </button>
              </Link>

              { role === "admin" && 
                // <button className="w-7 h-7 rounded-full flex items-center justify-center bg-lamaPurple">
                //   <Image src={"/delete.png"} alt="" width={16} height={16} />
                // </button>
                              <FormComponent type='delete' table='student' id={item.id}  />
                
              }
            </div>
          </td>
        </tr>)
    }


  return (
    <>
    <div className='bg-white  mx-4 p-4  flex-1 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h1 className='text-lg  hidden md:block font-semibold '>All Students</h1>
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
        //         <button className='bg-lamaYellow items-center justify-center h-8 w-8 rounded-full flex '>
        // <Image src="/plus.png" alt='' width={14} height={14}/>

        //     </button>
                      <FormComponent type='create' table='student'  />
        
        }
        </div>
        </div>
        </div>
        <div>
        <Table columns={columns} renderRow={renderRow} data={studentsData}/>
        </div>
      
        <Pagination/>
        
    </div>
    </>
  )
}

export default StudentList