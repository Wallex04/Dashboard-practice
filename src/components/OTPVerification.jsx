import React, { useState } from 'react';
import Button from '../components/Button/CustomButton';
import { ButtonSize, ButtonState } from '../components/Button/ButtonStyles';

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if a digit is entered
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className='w-[430px] text-center m-auto rounded-md border border-[#F3EBEF] shadow-md mb-10'>
      <h1 className='font-semibold pt-10 pb-1 text-[20px]'>Verify OTP</h1>
      <p className='text-[14px]'>Enter the six digit code sent to your Email address,</p>
      <p className='font-semibold text-[14px]'>Annjesunge@gmail.com</p>
      <div className='gap-3 flex justify-center items-center mt-6 mb-5'>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type='text'
            maxLength='1'
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className='w-10 h-10 bg-[#EFF3f5] rounded-md text-center text-lg'
          />
        ))}
      </div>
      <div className='flex justify-between items-center mx-16 mb-10'>
        <p className='text-[#4F5559] text-[14px]'>Didn't receive code?</p>
        <span className='text-[12px] text-[#0051CF]'>Resend in 01:59</span>
      </div>
      <Button
        className='mb-10'
        value='OTP Verification'
        size={ButtonSize.lg}
        variant={ButtonState.lg}
      />
    </div>
  );
};

export default OTPVerification;
