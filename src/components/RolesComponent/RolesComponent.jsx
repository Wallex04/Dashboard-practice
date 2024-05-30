// // import React from 'react';
// // import Button from '../Button/CustomButton';
// // import { ButtonSize, ButtonState } from '../Button/ButtonStyles';

// // const RolesComponent= () => {
// //   const headers = ["Dashboard", "User management", "Admin management", "Payment", ,  "Settings", "Status"];
// //   const tableData = [
// //     ["Create", "Create", "Create", "Create", "Create", "Create"],
// //     ["View", "View", "View", "View", "View", "View"],
// //     ["Update", "Update", "Update", "Update", "Update", "Update"],
// //     ["Delete", "Delete", "Delete", "Delete", "Delete", "Delete"],
// //   ];

// //   return (
// //     <div className="flex flex-col items-center p-4">
// //       <h1 className='text-center font-semibold mb-8'>Role and permissions</h1>
// //       <h1 className='text-center mb-4'>Permissions</h1>

// //       <div className="overflow-x-auto">
// //         <div className="min-w-full">
// //           <div className="bg-gray-50 flex">
// //             {headers.map((header, index) => (
// //               <div key={index} className="px-6 py-3 text-left  text-xs font-medium text-gray-500 tracking-wider">
// //                 {header}
// //               </div>
// //             ))}
// //           </div>
// //           {tableData.map((row, rowIndex) => (
// //             <div key={rowIndex} className="flex flex-col">
// //               <div className="flex">
// //                 {row.map((cell, cellIndex) => (
// //                   <div key={cellIndex} className="w-1/6 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
// //                     <input type="checkbox" className="mr-2" />
// //                     {cell}
// //                   </div>
// //                 ))}
// //               </div>
// //               <hr className="border-gray-200" />
// //             </div>
// //           ))}
// //         </div>
// //         <div className='text-center mt-8'>
// //           <Button className="mx-auto"
// //             value='Save'
// //             size={ButtonSize.md}
// //             variant={ButtonState.PRIMARY}
// //           />
// //           </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RolesComponent;



// import React, { useState } from 'react';
// import Button from '../Button/CustomButton';
// import { ButtonSize, ButtonState } from '../Button/ButtonStyles';
// import { IoIosCheckmark } from "react-icons/io";
// import { IoIosClose } from "react-icons/io";

// const CreatedRole = ({ onClose }) => {
//   return (
//     <div className='fixed top-4 right-4'>
//       <div className='flex items-center justify-center gap-5 px-3 py-2 bg-green-500 border border-gray-300 rounded-md'>
//         <IoIosCheckmark className='bg-white p-1 text-2xl rounded-full text-green-800' />
//         <p className='opacity-90 text-white'>Role successfully created</p>
//         <div className='h-6 border-l border-white opacity-35 font-bold'></div>
//         <IoIosClose className='text-white text-2xl cursor-pointer' onClick={onClose} />
//       </div>
//     </div>
//   );
// };

// const RolesComponent = () => {
//   const [showNotification, setShowNotification] = useState(false);

//   const headers = ["Dashboard", "User management", "Admin management", "Payment", "Settings", "Status"];
//   const tableData = [
//     ["Create", "Create", "Create", "Create", "Create", "Create"],
//     ["View", "View", "View", "View", "View", "View"],
//     ["Update", "Update", "Update", "Update", "Update", "Update"],
//     ["Delete", "Delete", "Delete", "Delete", "Delete", "Delete"],
//   ];

//   const handleSave = () => {
//     setShowNotification(true);
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 3000); // Hide notification after 3 seconds
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       {showNotification && <CreatedRole onClose={() => setShowNotification(false)} />}
//       <h1 className='text-center font-semibold mb-8'>Role and permissions</h1>
//       <h1 className='text-center mb-4'>Permissions</h1>

//       <div className="overflow-x-auto">
//         <div className="min-w-full">
//           <div className="bg-gray-50 flex">
//             {headers.map((header, index) => (
//               <div key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
//                 {header}
//               </div>
//             ))}
//           </div>
//           {tableData.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex flex-col">
//               <div className="flex">
//                 {row.map((cell, cellIndex) => (
//                   <div key={cellIndex} className="w-1/6 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
//                     <input type="checkbox" className="mr-2" />
//                     {cell}
//                   </div>
//                 ))}
//               </div>
//               <hr className="border-gray-200" />
//             </div>
//           ))}
//         </div>
//         <div className='text-center mt-8'>
//           <Button
//             className="mx-auto"
//             value='Save'
//             size={ButtonSize.md}
//             variant={ButtonState.PRIMARY}
//             onClick={handleSave}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RolesComponent;


import React, { useState } from 'react';
import Button from '../Button/CustomButton';
import { ButtonSize, ButtonState } from '../Button/ButtonStyles';
import { IoIosCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const CreatedRole = ({ onClose }) => {
  return (
    <div className='fixed top-4 right-4'>
      <div className='flex items-center justify-center gap-5 px-3 py-2 bg-green-500 border border-gray-300 rounded-md'>
        <IoIosCheckmark className='bg-white p-1 text-2xl rounded-full text-green-800' />
        <p className='opacity-90 text-white'>Role successfully created</p>
        <div className='h-6 border-l border-white opacity-35 font-bold'></div>
        <IoIosClose className='text-white text-2xl cursor-pointer' onClick={onClose} />
      </div>
    </div>
  );
};

const RolesComponent = () => {
  const [showNotification, setShowNotification] = useState(false);

  const headers = ["Dashboard", "User management", "Admin management", "Payment", "Settings", "Status"];
  const tableData = [
    ["Create", "Create", "Create", "Create", "Create", "Create"],
    ["View", "View", "View", "View", "View", "View"],
    ["Update", "Update", "Update", "Update", "Update", "Update"],
    ["Delete", "Delete", "Delete", "Delete", "Delete", "Delete"],
  ];

  const handleSave = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      {showNotification && <CreatedRole onClose={() => setShowNotification(false)} />}
      <h1 className='text-center font-semibold mb-8'>Role and permissions</h1>
      <h1 className='text-center mb-4'>Permissions</h1>

      <div className="overflow-x-auto w-full">
        <div className="min-w-full">
          <div className="bg-gray-50 flex w-full">
            {headers.map((header, index) => (
              <div key={index} className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                {header}
              </div>
            ))}
          </div>
          {tableData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col w-full">
              <div className="flex w-full">
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {cell}
                  </div>
                ))}
              </div>
              <hr className="border-gray-200 w-full" />
            </div>
          ))}
        </div>
        <div className='text-center mt-8 w-full'>
          <Button
            className="mx-auto"
            value='Save'
            size={ButtonSize.md}
            variant={ButtonState.PRIMARY}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default RolesComponent;
