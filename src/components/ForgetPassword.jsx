import React from "react";
import carduvyLogo from "../assets/carduvy&logo.png";
import Button from "./Button/CustomButton";
import { ButtonSize, ButtonState } from "./Button/ButtonStyles";
import { useState } from "react";
import CustomInput from "./CustomInput";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div>
      <img className="mx-20 mb-8 mt-24" src={carduvyLogo} alt="" />
      <div className="w-[560px] m-w-[300px] mx-auto border font sans border-[#F3EBeF] rounded-lg mb-8">
        <h1 className="text-2xl font-semibold text-center pt-8 pb-6 text-[#1F2937]">
          Admin Login
        </h1>
        <p className="text-center px-20 pb-6 text-[#4F5559]">
          Enter your register email address and an OTP code will be sent to reset your password
        </p>
        <div className="flex flex-col mx-auto">
          <CustomInput  className="bg-[#F3F4F6] rounded-md w-[420px] mx-auto py-3 pl-6 border-none outline-none"
            label="Email Address"
            labelClassName="font-semibold pl-[70px] mb-1"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="flex gap-2 mt-2 items-center pl-[70px] pb-14">
          Remember Password?
          <span className="text-[#0051CF] font-normal text-sm">Sign in</span>
        </p>
        <div className="text-center">
          <Button
          className='mx-auto -mt-3 mb-3'
            value="send OTP"
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

