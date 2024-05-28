import React from 'react';
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";

const CustomRole = ({ title, userName, userRole, userInitials }) => {
  return (
    <div className='w-full bg-white mb-8 py-6'>
      <div className='flex items-center justify-between mx-10'>
        <h1 className='font-semibold text-[#070808] text-[16px]'>{title}</h1>
        <div className='flex items-center justify-center gap-4'>
          <IoIosNotificationsOutline className='text-3xl border p-1 cursor-pointer border-[#ECEDEE] rounded-md text-[#444444]'/>
          <div className='h-6 border-l border-gray-400 opacity-35 font-bold'></div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#D9D9D9] -mr-2'>
            <h1 className='text-[#444444] font-semibold'>{userInitials}</h1>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-sm text-[#111111] -mb-1'>{userName}</p>
            <span className='text-[#0051CF] text-sm'>{userRole}</span>
          </div>
          <IoIosArrowDown className='cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}

export default CustomRole;
