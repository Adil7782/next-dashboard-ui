import FormComponent from '@/app/components/FormComponent'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { classesData, parentsData, role, studentsData, teachersData } from '@/lib/data'
import { db } from '@/lib/db'
import { ITEM_PER_PAGE } from '@/lib/page'
import { Class, Prisma, Teacher } from '@prisma/client'
import { count } from 'console'
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

type ClassesList = Class & {supervisor:Teacher}
const renderRow =(item:ClassesList) =>{
return( <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center p-3 gap-3'>
       

        <div className="flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          
        </div>
      </td>

      <td className="hidden md:table-cell text-sm">{item.capacity} </td>        
      <td className="hidden md:table-cell text-sm"> {item.name[0]} </td>
      <td className="hidden md:table-cell text-sm"> {item.supervisor.name} </td>
      <td>
        <div className="flex gap-2 items-center">
         { role === "admin" && 

            <> <Link href={`list/students/${item.id}`}>
                          <FormComponent type='update' table='classes' data={item} />

          </Link>

          
            <FormComponent type='delete' table='classes'  id={item.id}/>

            </>
          }
        </div>
      </td>
    </tr>)
}

const ClassesList =  async ({  searchParams}:{searchParams: {[key:string]:string | undefined };
}) => {

console.log(searchParams)
  const {page,...otherParams} = searchParams

  const p = page ? Number(page) : 1 // sets the default to 1st page

  const query : Prisma.ClassWhereInput = {}
  if (otherParams){
    for (const [key,value] of Object.entries(otherParams)){
      if (value !== undefined){
        switch (key){
         
            case "supervisorId":
              query.supervisorId = value
              break;

              default:
              break;

        }
      }
    }
  }

  
    const [classes,count] = await db.$transaction(
      [
        db.class.findMany({
          where:query,
          include: {
           supervisor:true
          },
          take: ITEM_PER_PAGE,
          skip : ITEM_PER_PAGE*(p-1)  // think the ipp is 10. so 10 to our page think its 2 -1 = 10 so it skips first 10
        }),
        db.class.count({
          where:query,
        })
        
      ]
    )
console.log(classes)

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
                <FormComponent type='create' table='classes'  />
}
        </div>
        </div>
        </div>
        <div>
        <Table columns={columns} renderRow={renderRow} data={classes}/>
        </div>
      
        <Pagination page={p} count={count}/>
        
    </div>
    </>
  )
}

export default ClassesList