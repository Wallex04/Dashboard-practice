import React from "react";
import carduvyLogo from "../assets/carduvy&logo.png";
import Button from "./Button/CustomButton";
import { ButtonSize, ButtonState } from "./Button/ButtonStyles";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import CustomInput from "./CustomInput";
import PasswordRequirements from "./PasswordRequirements";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 
 
  
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email address";
    }
    return "";
  };


  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

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
      <img className="mx-20 mb-8 mt-24" src={carduvyLogo} alt="" />
      <div className="w-[560px] m-w-[300px] mx-auto border font sans border-[#F3EBeF] rounded-lg mb-8">
        <h1 className="text-2xl font-semibold text-center pt-8 pb-6 text-[#1F2937]">
          Admin Login
        </h1>
        <p className="text-center px-20 pb-6 text-[#4F5559]">
          Enter your email address and password to login into your account
        </p>
        <div className="flex flex-col mx-auto">
          <CustomInput  className="bg-[#F3F4F6] rounded-md w-[420px] mx-auto py-3 pl-6 border-none outline-none"
            label="Email Address"
            labelClassName="font-semibold pl-[70px] mb-1"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
            validate={validateEmail}
           errorMessage={emailError}
          />
        </div>
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
    </div>
  );
};

export default Login;




// import React, { useState } from "react";
// import carduvyLogo from "../assets/carduvy&logo.png";
// import Button from "./Button/CustomButton";
// import { ButtonSize, ButtonState } from "./Button/ButtonStyles";
// import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
// import CustomInput from "./CustomInput";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const validateEmail = (value) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(value)) {
//       return "Invalid email address";
//     }
//     return "";
//   };

//   const validatePassword = (value) => {
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordRegex.test(value)) {
//       return "Password must contain at least 8 characters, including one letter, one number, and one special character";
//     }
//     return "";
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     setEmailError(validateEmail(newEmail));
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     setPasswordError(validatePassword(newPassword));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <img className="mx-20 mb-8 mt-24" src={carduvyLogo} alt="" />
//       <div className="w-[560px] m-w-[300px] mx-auto border font sans border-[#F3EBeF] rounded-lg mb-8">
//         <h1 className="text-2xl font-semibold text-center pt-8 pb-6 text-[#1F2937]">
//           Admin Login
//         </h1>
//         <p className="text-center px-20 pb-6 text-[#4F5559]">
//           Enter your email address and password to login into your account
//         </p>
//         <div className="flex flex-col mx-auto">
//           <CustomInput
//             className="bg-[#F3F4F6] rounded-md w-[420px] mx-auto py-3 pl-6 border-none outline-none"
//             label="Email Address"
//             labelClassName="font-semibold pl-[70px] mb-1"
//             placeholder="Enter email address"
//             value={email}
//             onChange={handleEmailChange}
//             validate={validateEmail}
//             errorMessage={emailError}
//           />
//         </div>
//         <div className="flex flex-col mx-auto">
//           <div className="relative flex flex-col mx-auto">
//             {showPassword ? (
//               <BsFillEyeFill
//                 className="absolute right-6 bottom-8 cursor-pointer bg-[#F3F4F6]"
//                 onClick={togglePasswordVisibility}
//               />
//             ) : (
//               <BsFillEyeSlashFill
//                 className="absolute right-6 bottom-8 cursor-pointer bg-[#F3F4F6]"
//                 onClick={togglePasswordVisibility}
//               />
//             )}
//             <CustomInput
//               className="bg-[#F3F4F6] rounded-md w-[420px] mx-auto py-3 pl-6 border-none outline-none"
//               label="Password"
//               labelClassName="font-semibold mb-1 pl-[70px] mt-4"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter password"
//               value={password}
//               onChange={handlePasswordChange}
//               validate={validatePassword}
//               errorMessage={passwordError}
//             />
//           </div>
//         </div>
//         <p className="flex gap-2 mt-6 items-center pl-[70px] pb-14">
//           Forgot Password?{" "}
//           <span className="text-[#0051CF] font-normal text-sm">Reset here</span>
//         </p>
//         <div className="text-center">
//           <Button
//             className="mx-auto -mt-3 mb-3"
//             value="Login"
//             size={ButtonSize.lg}
//             variant={ButtonState.PRIMARY}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import carduvyLogo from "../assets/carduvy&logo.png";
// import Button from "./Button/CustomButton";
// import { ButtonSize, ButtonState } from "./Button/ButtonStyles";
// import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
// import CustomInput from "./CustomInput";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const validateEmail = (value) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(value)) {
//       return "Invalid email address";
//     }
//     return "";
//   };

//   const validatePassword = (value) => {
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordRegex.test(value)) {
//       return "Password must contain at least 8 characters, including one letter, one number, and one special character";
//     }
//     return "";
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     setEmailError(validateEmail(newEmail));
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     setPasswordError(validatePassword(newPassword));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <img className="mx-20 mb-8 mt-24" src={carduvyLogo} alt="" />
//       <div className="w-[560px] m-w-[300px] mx-auto border font sans border-[#F3EBeF] rounded-lg mb-8">
//         <h1 className="text-2xl font-semibold text-center pt-8 pb-6 text-[#1F2937]">
//           Admin Login
//         </h1>
//         <p className="text-center px-20 pb-6 text-[#4F5559]">
//           Enter your email address and password to login into your account
//         </p>
//         <div className="flex flex-col mx-auto">
//           <CustomInput
//             className="bg-[#F3F4F6] rounded-md w-[420px] mx-auto py-3 pl-6 border-none outline-none"
//             label="Email Address"
//             labelClassName="font-semibold pl-[70px] mb-1"
//             placeholder="Enter email address"
//             value={email}
//             onChange={handleEmailChange}
//             validate={validateEmail}
//             errorMessage={emailError}
//           />
//         </div>
//         <div className="flex flex-col mx-auto">
//           <div className="relative flex flex-col mx-auto w-[420px]">
//             <CustomInput
//               className="bg-[#F3F4F6] rounded-md py-3 pl-6 pr-12 border-none outline-none"
//               label="Password"
//               labelClassName="font-semibold mb-1 mt-4"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter password"
//               value={password}
//               onChange={handlePasswordChange}
//               validate={validatePassword}
//               errorMessage={passwordError}
//             />
//             <div className="absolute right-4 top-2/3 transform -translate-y-1/2 cursor-pointer">
//               {showPassword ? (
//                 <BsFillEyeFill onClick={togglePasswordVisibility} />
//               ) : (
//                 <BsFillEyeSlashFill onClick={togglePasswordVisibility} />
//               )}
//             </div>
//           </div>
//         </div>
//         <p className="flex gap-2 mt-6 items-center pl-[70px] pb-14">
//           Forgot Password?{" "}
//           <span className="text-[#0051CF] font-normal text-sm">Reset here</span>
//         </p>
//         <div className="text-center">
//           <Button
//             className="mx-auto -mt-3 mb-3"
//             value="Login"
//             size={ButtonSize.lg}
//             variant={ButtonState.PRIMARY}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
