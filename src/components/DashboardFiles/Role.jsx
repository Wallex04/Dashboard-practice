import React, { useState } from 'react';
import RoleData from '../roleData/RoleData';
import CustomSearchFilter from '../customSearchFilter/CustomSearchFilter';
import CustomRole from '../customRole/CustomRole';
import CreateAdmin from '../../components/modal/CreateAdmin'; // Ensure the correct path

const Role = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='flex-1 bg-[#F7FBFD]'>
        <CustomRole
          title="Roles Management" 
          userName="Ann Jackson" 
          userRole="Super Admin" 
          userInitials="AJ" 
        />
        <div className='flex flex-col'>
          <CustomSearchFilter
            filterLabel='Filter'
            buttonText='Create role'
            onButtonClick={handleButtonClick}
          />
          <RoleData />
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg'>
            <CreateAdmin />
            <button
              className='mt-4 text-xl text-[#212529] font-normal float-right'
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Role;
