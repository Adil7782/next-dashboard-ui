import Announcements from "@/app/components/Announcements";
import AttendaceChart from "@/app/components/Attendace";
import CountChart from "@/app/components/CountChart";
import EventCalender from "@/app/components/EventCalender";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";
import React from "react";
import Calendar from "react-calendar";

const AdminPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* left */}
        <div className="w-full  lg:w-2/3 flex flex-col gap-4">
          {/* user card */}
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="teacher" />
            <UserCard type="student" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>

          {/* middle /#  */}
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[350px]">
              <CountChart />
            </div>
            <div className="w-full lg:w-2/3 h-[350px]"><AttendaceChart/></div>
          </div>
          {/* bottom / */}
          <div className="flex justify-center h-[500px]">
            <div className="w-full">
              <FinanceChart/>

            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 px-2">
        <EventCalender/>
        <Announcements/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
