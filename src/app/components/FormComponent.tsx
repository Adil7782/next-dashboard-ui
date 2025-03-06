"use client"

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react'
// import TeacherForm from './forms/TeacherForm';
// import StudentForm from './forms/StudentForm';

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});


const forms : { [key:string]: (type:"create"  | "update",data:any) => JSX.Element;}={
  teacher:(type,data)=><TeacherForm type={type} data={data} />,
  student:(type,data)=><StudentForm type={type} data={data} />
}


const FormComponent = ({table,type,data,id}:{
    table: string ,
    type: "create" | "delete" | "update";
    data?:any;
    id?:string | number;
    
}) => 
  {


    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const color = type ==="create" ? "bg-lamaYellow" :type ==="update" ? "bg-lamaSky" : "bg-lamaPurple"

    const [open,setOpen] = useState <Boolean> (false)


    const Form = () => {
      return type === "delete" && id ? (
        <form action="" className='p-4 flex flex-col gap-4'>
          <span className='text-center font-medium'>Are You Sure You Want To Delete {table}?</span>
          <button className="bg-red-700 text-white p-4 rounded-md border-none w-max self-center">Delete</button>
        </form>
      )
       
      : type != "delete" && (

        forms [table] (type,data)
      )
    }


  return (
    <>
      <button
        className={`${size} ${color} flex items-center justify-center rounded-full `}
        onClick={() => setOpen(true)}
      >
        <Image alt="" src={`/${type}.png`} height={16} width={16} />
      </button>

      {open && (
        <>
          <div className="absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-60 z-50 flex justify-center items-center">
            <div className="bg-white p-4  rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]"> 

            <Form/>
            <div onClick={()=>{setOpen(false)}}>
              <Image
                src={"/close.png"}
                alt=""
                width={14}
                height={14}
                className="absolute top-2 right-2 cursor-pointer"
              />
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FormComponent