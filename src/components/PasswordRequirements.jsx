import React from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";

const PasswordRequirements = ({ password }) => {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);

  return (
    <div className="mt-4 pl-[70px] ">
      <div className="flex items-center">
        {minLength ? (
          <BsCheckCircle className="text-green-500 mr-2" />
        ) : (
          <BsCircle className="text-red-500 mr-2" />
        )}
        <span>Minimum of 8 characters</span>
      </div>
      <div className="flex items-center">
        {hasUpperCase ? (
          <BsCheckCircle className="text-green-500 mr-2 " />
        ) : (
          <BsCircle className="text-red-500 mr-2" />
        )}
        <span>One uppercase character</span>
      </div>
      <div className="flex items-center">
        {hasSpecialChar ? (
          <BsCheckCircle className="text-green-500 mr-2" />
        ) : (
          <BsCircle className="text-red-500 mr-2" />
        )}
        <span>One special character</span>
      </div>
      <div className="flex items-center">
        {hasNumber ? (
          <BsCheckCircle className="text-green-500 mr-2" />
        ) : (
          <BsCircle className="text-red-500 mr-2" />
        )}
        <span>One number</span>
      </div>
    </div>
  );
};

export default PasswordRequirements;
