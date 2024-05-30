import React, { useState } from "react";
import CustomInput from "../CustomInput";
import Button from "../Button/CustomButton";
import { ButtonSize, ButtonState } from "../Button/ButtonStyles";
import RolesComponent from "../RolesComponent/RolesComponent"; // Make sure to import the RolesComponent

const CreateAdmin = () => {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track form submission

  const validate = () => {
    const newErrors = {};
    if (!roleName.trim()) {
      newErrors.roleName = "Role name cannot be empty";
    }
    if (description.length < 50) {
      newErrors.description = "Description must be at least 50 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true); // Set form as submitted
    }
  };

  if (isSubmitted) {
    return <RolesComponent />; // Render RolesComponent if form is submitted
  }

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <h1 className="text-2xl text-center font-semibold pb-2 font-sora tracking-wide">
        Create Role
      </h1>
      <p className="text-center mb-6 text-[#4F5559]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        in.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-[350px] mx-auto">
          <CustomInput
            className={`bg-[#F3F4F6] py-3 mb-1 outline-none rounded-md pl-6 ${
              errors.roleName ? "border-red-500" : ""
            }`}
            label="Role name*"
            labelClassName="font-semibold text-[#374151]"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
          {errors.roleName && (
            <p className="text-red-500 text-sm">{errors.roleName}</p>
          )}
          <div className="flex flex-col">
            <label className="font-semibold text-[#374151]">Description</label>
            <textarea
              className={`outline-none bg-[#F3F4F6] mb-1 rounded-md pt-2 pb-8 pl-4 ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
        </div>
        <div className="text-center">
          <Button
            className="text-center rounded-md mx-auto w-[400px] max-w-[350px] mt-6"
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
            value="continue"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateAdmin;
