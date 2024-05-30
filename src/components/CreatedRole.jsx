import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
const CreatedRole = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-5 px-3 py-2 bg-green-500 border border-gray-300 rounded-md'>
        <IoIosCheckmark className='bg-white p-1 text-2xl rounded-full text-green-800'/>
        <p className='opacity-90 text-white'>Role succesfully created</p>
        <div className='h-6 border-l border-white opacity-35 font-bold'></div>
        <IoIosClose className='text-white text-2xl'/>
      </div>
    </div>
  )
}

export default CreatedRole
