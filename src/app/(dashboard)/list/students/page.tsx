import FormComponent from '@/app/components/FormComponent'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { role, studentsData, teachersData } from '@/lib/data'
import { db } from '@/lib/db'
import { ITEM_PER_PAGE } from '@/lib/page'
import { Class, Lesson, Prisma, Student } from '@prisma/client'
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

type StudentList = Student & {class : Class}
const renderRow =(item:StudentList) =>{
return( <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center p-3 gap-3'>
        <Image
         src={item.img || "/avatar.png" }

          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block  w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item.class.name}</p>
        </div>
      </td>

      <td className="hidden md:table-cell text-sm">{item.username} </td>
      <td className="hidden md:table-cell text-sm">{item.class.name[0]}</td>
      
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
                          <FormComponent type='delete' table='student' id={(item.id.toString())}  />
            
          }
        </div>
      </td>
    </tr>)
}

const StudentList =  async ({  searchParams}:{searchParams: {[key:string]:string | undefined };
}) => {

console.log(searchParams)
  const {page,...otherParams} = searchParams

  const p = page ? Number(page) : 1 // sets the default to 1st page

  // const teachers = await db.teacher.findMany({
  //   include: {
  //     subjects: true,
  //     classes: true,
  //   },
  //   take: 5,
  //   skip : 5*(p-1)
  // });

  // const count = await db.teacher.count()
  const query : Prisma.StudentWhereInput = {}
  if (otherParams){
    for (const [key,value] of Object.entries(otherParams)){
      if (value !== undefined){
        switch (key){
          case "teacherId":
            query.class = {
              lessons:{

                some:{
                  teacherId:(value),
                }
              }
            }
            break;
            case "search":
              query.name = {
                contains: value,
                mode:'insensitive'
              }


        }
      }
    }
  }

  
    const [students,count] = await db.$transaction(
      [
        db.student.findMany({
          where:query,
          include: {
           class:true
          },
          take: ITEM_PER_PAGE,
          skip : ITEM_PER_PAGE*(p-1)  // think the ipp is 10. so 10 to our page think its 2 -1 = 10 so it skips first 10
        }),
        db.student.count({
          where:query,
        })
        
      ]
    )

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
        <Table columns={columns} renderRow={renderRow} data={students}/>
        </div>
      
        <Pagination page={p} count={count}/>
        
    </div>
    </>
  )
}

export default StudentList