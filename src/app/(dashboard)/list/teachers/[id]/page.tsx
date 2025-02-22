import Announcements from '@/app/components/Announcements';
import BigCalender from '@/app/components/BigCalender';
import FormComponent from '@/app/components/FormComponent';
import Performance from '@/app/components/Performance';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const TeacherPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row p-4 gap-4 ">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4 ">
          {/* user card */}
          <div className="bg-lamaSky p-4 rounded-md flex-1 flex gap-4 shadow-md">
            <div className="w-1/3">
              <Image
                src="/s.jpg"
                alt="nope"
                height={144}
                width={144}
                className="w-36 h-36/2   rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className='flex justify-between  items-center gap-4'>
              <h1 className="text-xl font-semibold">Adil Saaly</h1>
              
            
              <FormComponent table='teacher' type="update" data={
                {id: 1,
                  
                  userName: "John Doe",
                  email: "john@doe.com",
                  password:"12345678",
                  firstName:"john",
                  lastName:"doe",
                  bloodType:"ab+",
                  dateOfBirth:"2001/04/30",
                  sex:"male",

                  img:
                    "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  phone: "1234567890",
                  subjects: ["Math", "Geometry"],
                  classes: ["1B", "2A", "3C"],
                  address: "123 Main St, Anytown, USA",}
              } />
                </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-wrap justify-between items-center gap-2  text-xs font-medium">
                <div className=" flex w-full items-center md:w-1/3 xl:w-2/3   gap-2">
                  <Image src={"/blood.png"} alt=" " height={14} width={14} />
                  <span>AB+</span>
                </div>
                <div className=" flex w-full items-center md:w-1/3 xl:w-2/3  gap-2">
                  <Image src={"/date.png"} alt=" " height={14} width={14} />
                  <span>2001/04/30</span>
                </div>
                <div className=" flex w-full items-center md:w-1/3 xl:w-2/3  gap-2">
                  <Image src={"/mail.png"} alt=" " height={14} width={14} />
                  <span>adilsaaly@gmail.com</span>
                </div>
                <div className=" flex w-full items-center md:w-1/3 xl:w-2/3  gap-2">
                  <Image src={"/phone.png"} alt=" " height={14} width={14} />
                  <span>0783573226</span>
                </div>
              </div>
            </div>
          </div>

          {/* other cards */}
          <div className="flex-1 flex gap-4 flex-wrap justify-between">
            <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] shadow-md'>
              <Image
                src="/singleAttendance.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold ">90%</h1>
                <span className="text-xs text-gray-400">Attendance</span>
              </div>
            </div>
            

            <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] shadow-md'>
              <Image
                src="/singleBranch.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold ">2</h1>
                <span className="text-xs text-gray-400">Branches</span>
              </div>
            </div>

            <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] shadow-md'>
              <Image
                src="/singleLesson.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold ">6</h1>
                <span className="text-xs text-gray-400">Lessons</span>
              </div>
            </div>

            <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] shadow-md'>
              <Image
                src="/singleClass.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold ">7</h1>
                <span className="text-xs text-gray-400">Classes</span>
              </div>
            </div>

          </div>
        </div>
        {/* bottom */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px] shadow-md'>
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalender/>
        

        </div>
      </div>

      {/* Right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">


      <div className='bg-white p-4 rounded-md shadow-md'>
        <h1 className='text-xl font-semibold'> Shortcuts </h1>
        <div className='flex  gap-4 flex-wrap mt-4 text-xs text-gray-600'>
          <Link className='p-3 rounded-md shadow-sm bg-lamaSky' href={"/"} >Teacher&apos;s Classes </Link>
          <Link className='p-3 rounded-md shadow-sm bg-lamaPurple' href={"/"} >Teacher&apos;s Students </Link>
          <Link className='p-3 rounded-md shadow-sm bg-pink-200' href={"/"} >Teacher&apos;s Lessons </Link>
          <Link className='p-3 rounded-md shadow-sm bg-lamaYellowLight' href={"/"} >Teacher&apos;s Exams </Link>
          <Link className='p-3 rounded-md shadow-sm bg-green-200' href={"/"} >Teacher&apos;s Assignments </Link>
        
        </div>
      
      </div>
      <Performance/>
      <Announcements/>
      
      </div>
    </div>
  );
}

export default TeacherPage