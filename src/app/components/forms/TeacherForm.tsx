"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
  userName: z.string().min(3, { message: 'User Name is Required' }).max(20),
  email: z.string().email({message:"Invalid Email"}),
  password:z.string().min(8,({message:"Password must be at least 8 characters long"})),
  firstName:z.string().min(1,({message:"First Name is Required"})),
  lastName :z.string().min(1,({message:"Last Name is Required"})),
  phone:z.string().min(10,({message:"Phone Number is Required"})),
  address:z.string().min(1,({message:"Phone Number is Required"})),
  bloodType:z.string().min(1,({message:"Phone Number is Required"})),
  birthday:z.date({message:"Phone Number is Required"}),
  sex:z.enum(["male","female"],{message:"Field is Required"}),
  img:z.instanceof(File,{message:"Image is Required"})
});

type inputs = z.infer<typeof schema>

const TeacherForm = ({type,data}:{type : "create" | "update",data?:any}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<inputs>({
        resolver: zodResolver(schema),
      });


        const onSubmit = handleSubmit((data)=>{
            console.log("first",data)
        })

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      

        <div className='flex justify-between gap-4 items-center w-full'>
        <InputField
          label="User Name"
          name="userName"
          defaultValue={data?.userName}
          error={errors.userName}
          register={register}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          defaultValue={data?.email}
          error={errors.email}
          register={register}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          defaultValue={data?.password}
          error={errors.password}
          register={register}
        />
        </div>

        <span className="text-xs text-gray-500 font-medium">
          Personal Information
        </span>
        <div className="">


        
       <div className='flex flex-wrap justify-between gap-4'>
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          error={errors.firstName}
          register={register}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          error={errors.lastName}
          register={register}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          error={errors.phone}
          register={register}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          error={errors.address}
          register={register}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          error={errors.bloodType}
          register={register}
        />
        <InputField
          label="Birthday"
          name="bloodType"
          type="date"
          defaultValue={data?.bloodType}
          error={errors.bloodType}
          register={register}
        />
       
       


       <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-gray-500  text-xs">Sex</label>
        <select className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full ' {...register("sex")} name="sex" defaultValue={data?.sex}>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
        </select>
       {errors.sex?.message && (
        <p className="text-xs text-red-400">{errors.sex?.message.toString()}</p>
      )}
      </div>


       <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center  ">
        <label className="text-gray-500  text-xs flex items-center gap-2 cursor-pointer" htmlFor='img'>
            <Image src={"/upload.png"} alt='' width={28} height={28}/>
            <span>Upload Photo</span>
        </label>
       <input type="file" {...register("img")} name="" className='hidden' id='img'/>
       {errors.img?.message && (
        <p className="text-xs text-red-400">{errors.img?.message.toString()}</p>
      )}
      </div>
      </div>

</div>
        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-md text-white shadow-md hover:bg-blue-500"
        >
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default TeacherForm