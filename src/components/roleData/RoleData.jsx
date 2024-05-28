// import React, { useState } from 'react';
// import { BiDotsVerticalRounded } from "react-icons/bi";


// const RoleData = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

//   const handleEditClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   }
//   const data = [
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
//     { RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated:'15 Nov, 2022' },
  

//   ];

//   return (
//     <div className="overflow-x-auto px-14 bg-[#F7F7F8]">
//       <table className="min-w-full">
//         <thead className="">
//           <tr>
//             <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Role name</th>
//             <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Description</th>
//             <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Email address</th>
//             <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Date created</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td className="px-6 py-4 whitespace-nowrap">{item.RoleName}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{item.Description}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{item.EmailAddress}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{item.DateCreated}</td>
//               <td className="px-6 py-4 whitespace-nowrap opacity-40 relative" onClick={handleEditClick}><BiDotsVerticalRounded className='inline-block'/></td>
//             </tr>
            
//           ))}
//               {isDropdownOpen && (
//           <div className='absolute right-0 mt-2 w-36 bg-white border border-[#ECEDEE] rounded-md shadow-lg z-10'>
//             <div className='p-2'>
//               <label className='block text-sm font-normal text-[#4B5563] pl-4'>Edit Role</label>
//             </div>
//             <div className='p-2'>
//               <label className='block text-sm font-normal text-[#4B5563] pl-4'>Delete Role</label>
//             </div>
//           </div>
//         )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoleData;

import React, { useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";

const RoleData = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleEditClick = (index) => {
    if (dropdownIndex === index) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setIsDropdownOpen(true);
      setDropdownIndex(index);
    }
  };

  const data = [
    { id: 1, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
    { id: 2, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
    { id: 3, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
    { id: 4, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
    { id: 5, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
    { id: 6, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
    { id: 7, RoleName: 'Super admin', Description: 'John Doe', EmailAddress: 'john@example.com', DateCreated: '15 Nov, 2022' },
  ];

  return (
    <div className="overflow-x-auto px-14 bg-[#F7F7F8]">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Role name</th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Email address</th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider">Date created</th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#9CA3AF] tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.RoleName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.Description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.EmailAddress}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.DateCreated}</td>
              <td className="px-6 py-4 whitespace-nowrap opacity-40 relative">
                <div className="relative inline-block">
                  <BiDotsVerticalRounded className='inline-block cursor-pointer' onClick={() => handleEditClick(index)} />
                  {isDropdownOpen && dropdownIndex === index && (
                    <div className='absolute left-4 bottom-2 mt-2 w-28 bg-white border border-[#ECEDEE] rounded-md shadow-lg z-10'>
                      <div className='p-2'>
                        <label className='block text-sm font-normal text-[#4B5563] pl-4'>Edit Role</label>
                      </div>
                      <div className='p-2'>
                        <label className='block text-sm font-normal text-[#4B5563] pl-4'>Delete Role</label>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleData;
