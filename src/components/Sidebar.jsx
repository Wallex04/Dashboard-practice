import React from 'react'
import carduvy from '../assets/carduvy.png'
import Admin from '../assets/Admin.png'
import Audit from '../assets/audit-trail.png'
import bills from '../assets/bills.png'
import customer from '../assets/customer.png'
import leading from '../assets/leading dropdown.png'
import payment from '../assets/payment.png'
import referrals from '../assets/referrals.png'
import roles from '../assets/role.png'
import transaction from '../assets/transaction-history.png'
import category from '../assets/category.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Sidebar = () => {
  return (
    <div className='hidden md:block'>
      <div className='bg-[#01247B] w-[271px] h-[900px] m-w-[250px] py-4'>
        <NavLink className='flex text-white items-center p-5 gap-1' to= '/Home'>
        <img className='' src={carduvy} alt="CarduvyImg" />
        <h1 className='font-bold text-2xl'>Carduvy</h1>  
        </NavLink>

        <div className='flex flex-col gap-2'>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={category} alt="" />
            Dashboard
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="/Admin">
            <img src={Admin} alt="" />
            Admin
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="/Role">
            <img src={roles} alt="" />
            Role
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={customer} alt="" />
            Customer
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={Audit} alt="" />
           Audit-Trial
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={payment} alt="" />
          Payment
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={bills} alt="" />
            Bills
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={referrals} alt="" />
           Referrals
          </NavLink>
          <NavLink className='flex items-center gap-2 pl-6 py-2 text-white' to="">
            <img src={transaction} alt="" />
            Transaction-History
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
