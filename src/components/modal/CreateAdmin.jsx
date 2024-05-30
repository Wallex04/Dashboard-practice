import React from "react";
import CustomInput from "../CustomInput";
import Button from "../Button/CustomButton";
import { ButtonSize, ButtonState } from "../Button/ButtonStyles";

const CreateAdmin = () => {
  return (
    <div className="w-full max-w-[400px] mx-auto">
      <h1 className="text-2xl text-center font-semibold pb-2 font-sora tracking-wide">
        Create Role
      </h1>
      <p className="text-center mb-6 text-[#4F5559]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        in.
      </p>
      <div className="flex flex-col max-w-[350px] mx-auto">
        <CustomInput
          className='bg-[#F3F4F6] py-3 mb-5 outline-none rounded-md pl-6'
          label="Role name*"
          labelClassName="font-semibold text-[#374151]"
          placeholder="Enter role name"
        />
        <div className="flex flex-col">
          <label className="font-semibold text-[#374151]">Description</label>
   <textarea className="outline-none bg-[#F3F4F6] mb-6 rounded-md pt-2 pb-8 pl-4" name="" placeholder="Enter description" id=""></textarea>
   </div>
      </div>
      <div className="text-center">
      <Button 
      className='text-center rounded-md mx-auto w-[400px] max-w-[350px] mt-6'
      size={ButtonSize.lg}
      variant={ButtonState.PRIMARY}
      value="continue"
      />
      </div>
    </div>
  );
};

export default CreateAdmin;
