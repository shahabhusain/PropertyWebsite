"use client";

import React from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from 'next/link';

const Otp = ({ setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setOpen(2);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <div className='ml-2'>
        <h1 className='text-[#AE8E50] text-[35px] font-[600]'>OTP Verification</h1>
        <p className='text-[15px] font-[400] text-[#000] mt-3'>
          Enter the OTP sent to your Email
        </p>
      </div>

      <InputOTP maxLength={6} required>
        <InputOTPGroup>
          <InputOTPSlot index={0} required />
          <InputOTPSlot index={1} required />
          <InputOTPSlot index={2} required />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} required />
          <InputOTPSlot index={4} required />
          <InputOTPSlot index={5} required />
        </InputOTPGroup>
      </InputOTP>

      <div className='mt-20 flex flex-col gap-2'>
        <button
          type="submit"
          className='bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full text-center'
        >
          Verify OTP
        </button>
        <button
          type="button"
          className='border-[#000] border-[2px] text-[#000] rounded-md font-medium py-2 px-4 w-full'
        >
          Resend
        </button>
        <h1 className='text-[14px] font-[400] text-center'>
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => setOpen(0)}
            className='underline text-[#AE8E50]'
          >
            SIGN UP
          </button>
        </h1>
      </div>
    </form>
  );
};

export default Otp;
