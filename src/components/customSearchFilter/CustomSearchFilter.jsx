import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Button from '../Button/CustomButton';
import { ButtonState } from '../Button/ButtonStyles';

const CustomSearchFilter = ({
  searchPlaceholder = 'Search by name...',
  filterLabel = 'Filter',
  filterLabel2,
  buttonText,
  Filter,
  onSearchChange,
  onFilterClick,
  onButtonClick,
  onFilterChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

  const handleFilterClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onFilterChange({ date, role: selectedRole });
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    onFilterChange({ date: selectedDate, role });
  };

  return (
    <div className='px-14 py-3 flex justify-between items-center bg-white'>
      <div className='w-[300px] md:w-[384px] border border-[#ECEDEE] rounded-md opacity-85 relative'>
        <input
          className='w-full pl-10 outline-none border py-2 text-[#B6BBBE]'
          type="text"
          placeholder={searchPlaceholder}
          onChange={onSearchChange}
        />
        <CiSearch className='absolute bottom-1 opacity-35 pl-2 text-3xl'/>
      </div>
      <div className='flex justify-center items-center gap-3 relative'>
        <div className='flex justify-center items-center gap-4'>
          <p>{Filter}</p>
          <div
            className='flex justify-center items-center border text-[#4F5559] border-[#ECEDEE] gap-2 py-[6px] px-3 rounded-md cursor-pointer'
            onClick={handleFilterClick}
          >
            <p>{filterLabel}</p>
            <IoIosArrowDown />
          </div>
          {filterLabel2 && (
            <div
              className='flex justify-center items-center border text-[#4F5559] border-[#ECEDEE] gap-2 py-[6px] px-3 rounded-md cursor-pointer'
              onClick={handleFilterClick}
            >
              <p>{filterLabel2}</p>
              <IoIosArrowDown />
            </div>
          )}
        </div>
        {isDropdownOpen && (
          <div className='absolute top-10 right-10 mt-2 w-36 bg-white border border-[#ECEDEE] rounded-md shadow-lg z-10'>
            <div className='p-2'>
              <label className='block text-sm font-normal text-[#4B5563] pl-4'>Date</label>
            </div>
            <div className='p-2'>
              <label className='block text-sm font-normal text-[#4B5563] pl-4'>Role</label>
            </div>
          </div>
        )}
        <Button
          value={buttonText}
          className='w-[94px] text-sm text-center'
          ButtonState={ButtonState.PRIMARY}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default CustomSearchFilter;
