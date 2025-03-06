import FormComponent from '@/app/components/FormComponent'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { parentsData, role, studentsData, teachersData } from '@/lib/data'
import { db } from '@/lib/db'
import { ITEM_PER_PAGE } from '@/lib/page'
import { Parent, Prisma, Student } from '@prisma/client'
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
        header:"Student Names",
        accessor:"students",
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

type ParentList = Parent & {students:Student []}
const renderRow =(item:ParentList) =>{
return (
<tr
key={item.id}
className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
>
<td className="flex items-center p-3 gap-3">
  <div className="flex flex-col">
    <h1 className="font-semibold">{item.name}</h1>
    <p className="text-xs text-gray-500">{item?.email}</p>
  </div>
</td>

<td className="hidden md:table-cell text-sm">{item.students.map((student)=>student.name).join(",")} </td>
<td className="hidden md:table-cell text-sm"> {item.phone} </td>
<td className="hidden md:table-cell text-sm"> {item.address} </td>
<td>
  <div className="flex gap-2 items-center">
  {role === "admin" && (
    <>
  
   
      {/* <button className="w-7 h-7 rounded-full flex items-center justify-center bg-lamaSky">
              <Image src={"/edit.png"} alt="" width={16} height={16} />
            </button> */}
      <FormComponent type="update" table="parent" data={item} />

   
      <FormComponent type="delete" table="parent" id={item.id} />
      </>
    )}
  </div>
</td>
</tr>
);
}

const ParentList =  async ({  searchParams}:{searchParams: {[key:string]:string | undefined };
}) => {

console.log(searchParams)
  const {page,...otherParams} = searchParams

  const p = page ? Number(page) : 1 // sets the default to 1st page

  const query : Prisma.ParentWhereInput = {}
  if (otherParams){
    for (const [key,value] of Object.entries(otherParams)){
      if (value !== undefined){
        switch (key){
         
            case "search":
              query.name = {
                contains: value,
                mode:'insensitive'
              }
              break;

              default:
              break;

        }
      }
    }
  }

  
    const [parents,count] = await db.$transaction(
      [
        db.parent.findMany({
          where:query,
          include: {
           students:true
          },
          take: ITEM_PER_PAGE,
          skip : ITEM_PER_PAGE*(p-1)  // think the ipp is 10. so 10 to our page think its 2 -1 = 10 so it skips first 10
        }),
        db.parent.count({
          where:query,
        })
        
      ]
    )



  return (
    <>
    <div className='bg-white  mx-4 p-4  flex-1 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h1 className='text-lg  hidden md:block font-semibold '>All Parents</h1>
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
                <FormComponent type='create' table='parent'  />
}
        </div>
        </div>
        </div>
        <div>
        <Table columns={columns} renderRow={renderRow} data={parents}/>
        </div>
      
        <Pagination page={p} count={count}  />
        
    </div>
    </>
  )
}

export default ParentList