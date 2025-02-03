import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        {/* search  */}
        <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
          <Image src="/search.png" alt="" height={14} width={14} />
          <input type="text" placeholder="Search..." className="w-[200px] bg-transparent p-2 outline-none" />
        </div>

        <div className="flex items-center gap-6 justify-end w-full">
          <div className="rounded-full bg-white h-7 w-7 flex justify-center items-center cursor-pointer">
            <Image src="/message.png" alt="" height={20} width={20} />
          </div>
          <div className="rounded-full relative bg-white h-7 w-7 flex justify-center items-center cursor-pointer">
            <Image src="/announcement.png" alt="" height={20} width={20} />
            <div className="absolute -top-3 -right-3  bg-purple-400 rounded-full text-xs text-white w-5 h-5 flex items-center justify-center">
            1
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">Adil Saaly</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <Image
            src="/avatar.png"
            alt=""
            height={36}
            width={36}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
