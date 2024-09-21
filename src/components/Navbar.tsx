import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Icon and user */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        {/* User info */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col text-right">
            <span className="text-xs leading-3 font-medium">Can Gündüz</span>
            <span className="text-[10px] text-gray-500">Admin</span>
          </div>
          <Image
            src="/avatar.png"
            alt="user avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
