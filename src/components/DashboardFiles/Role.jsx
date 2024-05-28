import React from 'react'
import RoleData from '../roleData/RoleData';
import CustomSearchFilter from '../customSearchFilter/CustomSearchFilter';
import CustomRole from '../customRole/CustomRole';

const Role = () => {
  return (
    <div>
         <div className='flex-1 bg-[#F7FBFD]' >
        <CustomRole
        title="Roles Management" 
        userName="Ann Jackson" 
        userRole="Super Admin" 
        userInitials="AJ" 
        />
    <div className='flex flex-col'>
     <CustomSearchFilter
      filterLabel='Filtel'
     />
     <RoleData/>
     </div>
    </div>
    </div>
  )
}

export default Role;
