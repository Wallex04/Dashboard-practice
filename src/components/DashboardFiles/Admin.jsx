import React from 'react'
import CustomRole from '../customRole/CustomRole'
import CustomSearchFilter from '../customSearchFilter/CustomSearchFilter'

const Admin = () => {
  return (
    <div>
      <CustomRole
            title="Administrators" 
            userName="Ann Jackson" 
            userRole="Super Admin" 
            userInitials="AJ"
      />
      <CustomSearchFilter
        Filter= 'Filter:'
        filterLabel = 'Status'
        filterLabel2 = 'Role'
      />
    </div>
  )
}

export default Admin
