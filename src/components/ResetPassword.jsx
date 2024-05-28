import React from 'react'
import CustomInput from './CustomInput'
import Button from "./Button/CustomButton";
import { ButtonSize, ButtonState } from "./Button/ButtonStyles";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import PasswordRequirements from './PasswordRequirements'


const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div>
         <div className="flex flex-col mx-auto">
          <div className="relative flex flex-col mx-auto">
            {showPassword ? (
              <BsFillEyeFill
                className="absolute right-6 bottom-8 cursor-pointer bg-[#F3F4F6]"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <BsFillEyeSlashFill
                className="absolute right-6 bottom-8 cursor-pointer bg-[#F3F4F6]"
                onClick={togglePasswordVisibility}
              />
            )}
               <CustomInput  className="bg-[#F3F4F6] rounded-md w-[420px] mx-auto py-3 pl-6 border-none outline-none"
            label="password"
            labelClassName="font-semibold mb-1 mt-4"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          </div>
        </div>
       <PasswordRequirements password={password}/>
        <p className="flex gap-2 mt-6 items-center pl-[70px] pb-14">
          Forgot Password?{" "}
          <span className="text-[#0051CF] font-normal text-sm">Reset here</span>
        </p>
        <div className="text-center">
          <Button
          className='mx-auto -mt-3 mb-3'
            value="Login"
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
          />
        </div>
    </div>
  )
}

export default ResetPassword
