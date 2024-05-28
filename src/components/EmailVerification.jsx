import React from 'react'
import emailLogo from '../assets/emaillogo.png'
const EmailVerification = () => {
  return (
    <div className='bg-[#f7f8f8] w-[650px] mx-auto mb-20 p-8'>
      <div className='w-[560px] mx-auto'>
        <div className='bg-[#0051cf] py-3' >
        <img className='mx-auto' src={emailLogo} alt="" />
        </div>
        <div className='w-[560px] bg-[#FFFFFF] shadow-md font-sans rounded-md mt-2 px-6'>
          <h1 className='pt-4 font-semibold pb-4 text-[#061820] text-2xl'>OTP Verification</h1>
          <h1 className='text-[#5f6166] pb-4'>Hello, Ann Johnson</h1>
          <p className='text-[#5f6166] pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate hic cumque blanditiis doloremque! Debitis illo, expedita accusantium a aliquam adipisci id sequi! Iure repellat amet soluta placeat reprehenderit quod.</p>
          <p className='py-12 mb-4 bg-[#EFF3f5] text-center font-semibold text-3xl'>456789</p>
          <p className='text-[#5f6166] pt-8'>Thank you</p>
          <h1 className='pt-2 pb-6 font-semibold'>The Cardvuy Team</h1>
        </div>
      </div>
   
    </div>
  )
}

export default EmailVerification
